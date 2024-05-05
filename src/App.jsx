import { useState } from "react";
import "./App.css";
import jsonLibraryQuestion from "./assets/Questions.json";
import Questions from "./Components/Questions";
import Result from "./Components/Result";

function App() {
  const [currentQuestion, SetCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleNextQuestion = (isCorrect) => {
    SetCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };
  const handleResetQuiz = () => {
    SetCurrentQuestion(0);
    setUserAnswers([]);
    setQuizStarted(false); 
  };
  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="container">
      <h1>React Quiz</h1>
      <hr />
      {!quizStarted ? (
       <div className="aboutDesc">
       <p>The React Quiz App tests users' knowledge with multiple-choice questions from a JSON file, covering diverse topics. Its clean and intuitive interface includes a prominent start button to begin the quiz.</p>
       <button onClick={handleStartQuiz}>Start Quiz</button>
     </div>
      ) : (
        <>
      {currentQuestion < jsonLibraryQuestion.length && (
        <div className="index">
          {currentQuestion + 1} / {jsonLibraryQuestion.length}
        </div>
      )}
      {currentQuestion < jsonLibraryQuestion.length && (
        <Questions
          currentQuestionBank={jsonLibraryQuestion[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}
      {currentQuestion === jsonLibraryQuestion.length && (
        <Result
          userAnswers={userAnswers}
          questions={jsonLibraryQuestion}
          resetQuiz={handleResetQuiz}
/>
          )}
        </>
      )}
    </div>
  );
}

export default App;