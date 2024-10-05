'use client';

import React, { useEffect, useState } from 'react';

const questions = [
  { question: "1. What is the sign for 'Thank You'?", options: ["A hand to the chin, then outward", "Thumbs-up", "Waving both hands"], correct: 0, difficulty: 'easy' },
  { question: "2. Which sign represents 'Yes'?", options: ["A fist nodding up and down", "An open hand waving", "A finger touching the palm"], correct: 0, difficulty: 'easy' },
  { question: "3. What does the sign for 'Hello' look like?", options: ["Waving one hand", "Two hands making a heart shape", "Both hands on cheeks"], correct: 0, difficulty: 'easy' },
  { question: "4. Which sign is used for 'No'?", options: ["Thumb and index finger touching", "Shaking the head", "A fist with pinky and thumb extended"], correct: 1, difficulty: 'easy' },
  { question: "5. What is the sign for 'Please'?", options: ["Open hand on the chest moving in circles", "Pointing at the nose", "Both hands forming a cup"], correct: 0, difficulty: 'easy' },
  { question: "6. How do you sign 'Goodbye'?", options: ["Waving your open hand", "Thumb and pinky extended", "Nodding head down"], correct: 0, difficulty: 'easy' },
  { question: "7. What is the sign for 'Sorry'?", options: ["Rubbing the chest with a closed fist", "Shaking hands", "Pointing at oneself"], correct: 0, difficulty: 'medium' },
  { question: "8. How do you sign 'I Love You'?", options: ["Thumbs-up", "Hand forming a fist with pinky, thumb, and index finger extended", "Waving both hands"], correct: 1, difficulty: 'medium' },
  { question: "9. What is the sign for 'Help'?", options: ["A fist placed on an open palm", "Both hands moving upward", "Tapping the head with an open hand"], correct: 0, difficulty: 'medium' },
  { question: "10. Which sign represents 'Friend'?", options: ["Hooking the index fingers together", "Making a fist", "Pointing to both shoulders"], correct: 0, difficulty: 'medium' },
  { question: "11. How do you sign 'House'?", options: ["Hands forming a roof shape", "Pointing at a building", "Hands forming a square"], correct: 0, difficulty: 'medium' },
  { question: "12. What is the sign for 'Mother'?", options: ["Open hand with thumb touching chin", "A fist near the forehead", "A hand on the heart"], correct: 0, difficulty: 'medium' },
  { question: "13. What is the sign for 'Family'?", options: ["Making a circle with both hands", "Touching the forehead", "Crossing both arms over chest"], correct: 0, difficulty: 'hard' },
  { question: "14. How do you sign 'School'?", options: ["Clapping both hands together", "Waving with both hands", "Pointing at a book"], correct: 0, difficulty: 'hard' },
  { question: "15. What does the sign for 'Brother' look like?", options: ["One hand on the forehead, then both hands pointing outward", "Hands forming a roof", "Thumbs-up from both hands"], correct: 0, difficulty: 'hard' },
  { question: "16. How do you sign 'Water'?", options: ["Tapping the chin with a 'W' handshape", "Rubbing the chest", "Fingers spread out"], correct: 0, difficulty: 'hard' },
  { question: "17. What is the sign for 'Want'?", options: ["Hands reaching out and pulling towards you", "A fist nodding up and down", "Hands forming a circle"], correct: 0, difficulty: 'hard' },
  { question: "18. How do you sign 'Time'?", options: ["Tapping the wrist", "Pointing to the sky", "Rubbing the stomach"], correct: 0, difficulty: 'hard' },
  { question: "19. What does the sign for 'Understand' look like?", options: ["Index finger flicking up near the head", "Thumbs-up", "Waving both hands"], correct: 0, difficulty: 'hard' },
];

const SignLanguageQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState({ message: '', isCorrect: null });
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const selectAnswer = (selectedIndex) => {
    if (selectedIndex === currentQuestion.correct) {
      setFeedback({ message: 'Correct!', isCorrect: true });
    } else {
      setFeedback({ message: 'Incorrect! Try again.', isCorrect: false });
    }
  };

  const nextQuestion = () => {
    if (feedback.isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback({ message: '', isCorrect: null });
    } else {
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
          <p className="text-xl">Great job! You have completed the quiz with a score of {score} out of {questions.length}.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative z-10 bg-white p-10 rounded-lg shadow-lg text-center w-full max-w-2xl">
        {currentQuestion && (
          <>
            <h1 className="text-3xl font-bold mb-6">Sign Language Quiz</h1>
            <h2 className="text-xl mb-4">
              Difficulty Level: <span className="font-bold">{currentQuestion.difficulty}</span>
            </h2>
            <h2 className="text-xl mb-4">
              Question: {currentQuestion.question}
            </h2>
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
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
              <div className={`mt-4 ${feedback.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
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
    </div>
  );
};

export default SignLanguageQuiz;
