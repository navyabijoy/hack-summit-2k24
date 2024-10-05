let questions = [];
let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const feedbackElement = document.getElementById('feedback');
const quizContainer = document.querySelector('.quiz-container');

// Load questions from the JSON file
fetch('sign_language_quiz_questions.json')
  .then(response => response.json())
  .then(data => {
    questions = data;
    showQuestion();
  })
  .catch(error => console.error('Error loading questions:', error));

// Show the current question
function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(index, button));
    answerButtonsElement.appendChild(button);
  });
}

// Reset state before showing a new question
function resetState() {
  nextButton.style.display = 'none';
  feedbackElement.innerText = '';
  feedbackElement.style.color = '';
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// Handle answer selection
function selectAnswer(selectedIndex, button) {
  const currentQuestion = questions[currentQuestionIndex];

  // Check if the answer is correct
  if (selectedIndex === currentQuestion.correct) {
    button.classList.add('correct');
    feedbackElement.innerText = "Correct!";
    feedbackElement.style.color = "#28a745";

    // Disable all buttons after a correct answer
    disableButtons();
    nextButton.style.display = 'block';
  } else {
    button.classList.add('incorrect');
    feedbackElement.innerText = "Incorrect! Try again.";
    feedbackElement.style.color = "#dc3545";

    // Disable only the incorrect button
    button.disabled = true;
  }
}

// Disable all buttons (after correct answer)
function disableButtons() {
  Array.from(answerButtonsElement.children).forEach(btn => {
    btn.disabled = true;
  });
}

// Move to the next question
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    quizContainer.innerHTML = `
      <h1 class="quiz-completed">15 Questions Completed!</h1>
      <p class="appreciation-message">Great job! You have successfully completed the quiz. Keep up the amazing work!</p>
    `;
  }
});
