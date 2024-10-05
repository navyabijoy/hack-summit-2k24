'use client';

import React, { useState } from 'react';

const questions = [
    {"question": "What is the sign for 'Thank You'?", "options": ["A hand to the chin, then outward", "Thumbs-up", "Waving both hands"], "correct": 0},
    {"question": "Which sign represents 'Yes'?", "options": ["A fist nodding up and down", "An open hand waving", "A finger touching the palm"], "correct": 0},
    {"question": "What does the sign for 'Hello' look like?", "options": ["Waving one hand", "Two hands making a heart shape", "Both hands on cheeks"], "correct": 0},
    {"question": "Which sign is used for 'No'?", "options": ["Thumb and index finger touching", "Shaking the head", "A fist with pinky and thumb extended"], "correct": 1},
    {"question": "How do you sign 'I Love You'?", "options": ["Thumbs-up", "Hand forming a fist with pinky, thumb, and index finger extended", "Waving both hands"], "correct": 1},
    {"question": "What is the sign for 'Sorry'?", "options": ["Rubbing the chest with a closed fist", "Shaking hands", "Pointing at oneself"], "correct": 0},
    {"question": "How do you sign 'Help'?", "options": ["Raising a fist", "Thumbs-up placed on an open palm", "Waving one hand in the air"], "correct": 1},
    {"question": "Which of these represents 'Friend'?", "options": ["Linking index fingers together", "High five", "Crossing arms over chest"], "correct": 0},
    {"question": "What is the sign for 'Please'?", "options": ["Rubbing an open palm on the chest", "Waving both hands", "Tapping the forehead"], "correct": 0},
    {"question": "How do you sign 'Good Morning'?", "options": ["Hand rising from chin to forehead", "Waving hand from chin outward", "Hand rising from chin with an open palm"], "correct": 2},
    {"question": "How do you sign 'Good Night'?", "options": ["Hands meet at chest level, then drop", "Hand waves at chest level", "Hands form a cross, then tap the chest"], "correct": 0},
    {"question": "What is the sign for 'Family'?", "options": ["Both hands make a circle", "Index fingers linking", "Both hands touching the heart"], "correct": 0},
    {"question": "How do you sign 'Excuse Me'?", "options": ["Hand brushes across the chest", "Thumb touching the palm", "Flat hand brushes fingertips against palm"], "correct": 2},
    {"question": "How do you say 'Name' in sign language?", "options": ["Tap two fingers on each other", "Thumb up", "Rubbing the chin"], "correct": 0},
    {"question": "How do you say 'Eat' in sign language?", "options": ["Tapping fingers to the mouth", "Two hands forming a circle", "Hand at chin level waving outward"], "correct": 0}
  ];

const SignLanguageQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState({ message: '', isCorrect: null });
  const [quizCompleted, setQuizCompleted] = useState(false);

  const selectAnswer = (selectedIndex) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
      setFeedback({ message: "Correct!", isCorrect: true });
    } else {
      setFeedback({ message: "Incorrect! Try again.", isCorrect: false });
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback({ message: '', isCorrect: null });
    } else {
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#ff6f61] via-[#ffbc42] to-[#0b7285]">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">15 Questions Completed!</h1>
          <p className="text-xl">Great job! You have successfully completed the quiz. Keep up the amazing work!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ff6f61] via-[#ffbc42] to-[#0b7285] overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff6f61] via-[#ffbc42] to-[#0b7285]">
          Sign Language Quiz
        </h1>
        {questions.length > 0 && (
          <>
            <h2 className="text-xl mb-4">
              Question {currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}
            </h2>
            <div className="space-y-2">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(index)}
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  {option}
                </button>
              ))}
            </div>
            {feedback.message && (
              <div className={`mt-4 flex items-center justify-center ${feedback.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                {feedback.isCorrect ? '✅' : '❌'} {feedback.message}
              </div>
            )}
            {feedback.isCorrect && (
              <button
                onClick={nextQuestion}
                className="mt-4 py-2 px-4 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors duration-300"
              >
                Next
              </button>
            )}
          </>
        )}
      </div>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white bg-opacity-30"
          style={{
            width: `${10 + i * 5}px`,
            height: `${10 + i * 5}px`,
            top: `${10 + i * 30}%`,
            left: `${15 + i * 25}%`,
            animation: `float-${i} ${4 + i * 2}s infinite ease-in-out alternate`,
          }}
        ></div>
      ))}
      <style jsx>{`
        @keyframes float-1 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
        @keyframes float-2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-30px); }
        }
        @keyframes float-3 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-40px); }
        }
      `}</style>
    </div>
  );
};

export default SignLanguageQuiz;