import React, { useState } from 'react';

const Quiz = () => {
  // List of questions with options and the correct answer
  const questions = [
    {
      question: "Which herb is known for its ability to reduce stress and anxiety?",
      options: ["Basil", "Lavender", "Mint", "Rosemary"],
      answer: "Lavender"
    },
    {
      question: "Which herb is commonly used to help with digestion?",
      options: ["Chamomile", "Echinacea", "Basil", "Ginger"],
      answer: "Ginger"
    },
    {
      question: "Which herb is known for boosting the immune system?",
      options: ["Peppermint", "Garlic", "Thyme", "Sage"],
      answer: "Garlic"
    },
    {
      question: "Which herb is traditionally used to treat insomnia?",
      options: ["Lemon Balm", "Turmeric", "Ashwagandha", "Oregano"],
      answer: "Lemon Balm"
    },
    {
      question: "Which herb is commonly used for skin care due to its healing properties?",
      options: ["Aloe Vera", "Basil", "Mint", "Thyme"],
      answer: "Aloe Vera"
    }
  ];

  // State hooks to manage the quiz state
  const [quizStarted, setQuizStarted] = useState(false); // Tracks if the quiz has started
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracks the current question index
  const [selectedAnswer, setSelectedAnswer] = useState(''); // Tracks the selected answer for the current question
  const [score, setScore] = useState(0); // Tracks the score based on correct answers
  const [quizCompleted, setQuizCompleted] = useState(false); // Tracks whether the quiz is completed or not

  // Function to handle the answer selection
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer); // Set the selected answer
  };

  // Function to handle moving to the next question or completing the quiz
  const handleNextQuestion = () => {
    // Check if the selected answer is correct, and update the score
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1); // Increase score if correct answer is selected
    }

    // Move to the next question if available, otherwise complete the quiz
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Increment question index
      setSelectedAnswer(''); // Reset selected answer for the next question
    } else {
      setQuizCompleted(true); // Mark the quiz as completed when all questions are answered
    }
  };

  // Function to determine the button class based on the selected answer
  const getButtonClass = (option) => {
    if (!selectedAnswer) return 'border-gray-300'; // Default border if no answer is selected

    // If the option is the selected answer, check if it's correct or wrong
    if (option === selectedAnswer) {
      return option === questions[currentQuestionIndex].answer
        ? 'border-green-500 bg-green-50' // Correct answer (green border)
        : 'border-red-500 bg-red-50'; // Wrong answer (red border)
    }

    // If the option is the correct answer, always display it with a green border
    if (option === questions[currentQuestionIndex].answer) {
      return 'border-green-500 bg-green-50'; // Correct answer (green border)
    }

    return 'border-gray-300'; // Default border for unselected options
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6 sm:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-green-700">Herbal Garden Quiz</h1>
          <p className="mt-4 text-lg text-[#50B250]">
            Test your knowledge about herbs and their benefits!
          </p>
        </div>

        {/* Show "Start Quiz" button before the quiz begins */}
        {!quizStarted && !quizCompleted && (
          <div className="text-center">
            <button
              onClick={() => setQuizStarted(true)} // Start the quiz when clicked
              className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700"
            >
              Start Quiz
            </button>
          </div>
        )}

        {/* Quiz questions and options */}
        {quizStarted && !quizCompleted ? (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Question {currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}
            </h2>

            {/* Display options for the current question */}
            <div className="space-y-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelection(option)} // Select answer when clicked
                  className={`w-full py-3 px-4 rounded-lg text-left border-2 ${getButtonClass(option)} hover:bg-green-100`}
                  disabled={selectedAnswer} // Disable all buttons after an answer is selected
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Next question button */}
            <div className="mt-6 text-center">
              <button
                onClick={handleNextQuestion} // Move to the next question or complete the quiz
                disabled={!selectedAnswer} // Disable the button until an answer is selected
                className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 disabled:bg-gray-400"
              >
                {currentQuestionIndex + 1 < questions.length ? 'Next Question' : 'Finish Quiz'}
              </button>
            </div>
          </div>
        ) : quizCompleted ? (
          // Display results after completing the quiz
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Quiz Completed!</h2>
            <p className="text-lg text-gray-600">You scored {score} out of {questions.length}!</p>
            <button
              onClick={() => {
                setCurrentQuestionIndex(0); // Reset to the first question
                setScore(0); // Reset the score
                setQuizCompleted(false); // Reset the quiz completion status
                setQuizStarted(false); // Reset quiz started status
              }}
              className="mt-6 bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700"
            >
              Restart Quiz
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Quiz;
