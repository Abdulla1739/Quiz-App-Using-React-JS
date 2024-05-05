import React from 'react';

const CorrectAnswers = ({ questions, onClose }) => {
  return (
    <div className='correct-answers-container'>
      <h3>Correct Answers</h3>
      {questions.map((question, index) => (
        <div key={index} className='question-answer'>
          <p><strong>Question:</strong> {question.question}</p>
          <p><strong>Correct Answer:</strong> {question.answerOptions.find(option => option.isCorrect).text}</p>
        </div>
      ))}
      <button onClick={onClose}>Go Back to Result</button>
    </div>
  );
};

export default CorrectAnswers;
