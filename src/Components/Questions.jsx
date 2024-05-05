import React from "react";

const Questions = ({ currentQuestionBank, onAnswerClick = () => {} }) => {
  return (
    <div className="questions">
      <h2>{currentQuestionBank.question}</h2>
      <ul className="options">
        {currentQuestionBank.answerOptions.map((option) => {
          return (
            <li key={option.text}>
              <button onClick={() => onAnswerClick(option.isCorrect)}>
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Questions;
