// app/api/socket/route.ts
import { Server } from 'socket.io'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', (socket) => {
        console.log('New client connected')

  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })

  socket.on('signal', (toId, message) => {
    io.to(toId).emit('signal', socket.id, message)
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
    })
  }
  res.end()
}

export default SocketHandler