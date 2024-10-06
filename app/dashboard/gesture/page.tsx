// app/dashboard/gesture/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { io } from 'socket.io-client';

const VideoChat = () => {
  const [meetingId, setMeetingId] = useState('')
  const [isMeetingCreator, setIsMeetingCreator] = useState(false)
  const [participants, setParticipants] = useState<string[]>([])
  const [captions, setCaptions] = useState('')
  const videoRef = useRef<HTMLVideoElement>(null)
  const localStreamRef = useRef<MediaStream | null>(null)
  const socketRef = useRef<ReturnType<typeof io> | null>(null)

  useEffect(() => {
    // Connect to the Socket.io server
    socketRef.current = io();

    return () => {
      // Disconnect when the component unmounts
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          localStreamRef.current = stream;
          videoRef.current.srcObject = stream;

          // Emit a join-room event to the server
          if (meetingId) {
            socketRef.current?.emit('join-room', meetingId);
          }
        })
        .catch(err => console.error('Error accessing media devices.', err))
    }
  }, [meetingId]);

  const createMeeting = () => {
    const newMeetingId = uuidv4();
    setMeetingId(newMeetingId);
    setIsMeetingCreator(true);
    // Emit the event to create a meeting
    socketRef.current?.emit('create-meeting', newMeetingId);
  }

  const joinMeeting = () => {
    if (meetingId) {
      // Emit the event to join an existing meeting
      socketRef.current?.emit('join-room', meetingId);
    }
  }

  useEffect(() => {
    // Listen for participants joining the room
    socketRef.current?.on('user-connected', (userId) => {
      setParticipants(prev => [...prev, userId]);
    });

    // Listen for participants leaving the room
    socketRef.current?.on('user-disconnected', (userId) => {
      setParticipants(prev => prev.filter(id => id !== userId));
    });

    return () => {
      socketRef.current?.off('user-connected');
      socketRef.current?.off('user-disconnected');
    };
  }, []);

  const updateCaptions = (newCaption: string) => {
    setCaptions(prev => prev + ' ' + newCaption);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Video Chat</h1>
      {!meetingId ? (
        <div>
          <button onClick={createMeeting} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Create Meeting
          </button>
          <input
            type="text"
            value={meetingId}
            onChange={(e) => setMeetingId(e.target.value)}
            placeholder="Enter Meeting ID"
            className="border p-2 rounded"
          />
          <button onClick={joinMeeting} className="bg-green-500 text-white px-4 py-2 rounded ml-2">
            Join Meeting
          </button>
        </div>
      ) : (
        <div>
          <p>Meeting ID: {meetingId}</p>
          <p>Participants: {participants.join(', ')}</p>
          <video ref={videoRef} autoPlay muted className="w-full max-w-md" />
          <div className="mt-4 p-2 bg-gray-100 rounded">
            <h2 className="font-bold">Captions:</h2>
            <p>{captions}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoChat
