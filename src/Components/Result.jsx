import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Result = ({ userAnswers, questions, resetQuiz }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="result">
      <h2>Results</h2>
      <p>
        You correctly answered {correctAnswers} out of {questions.length}{" "}
        questions
      </p>
      <div className="retry">
        <span>Click below to try again!!!</span>
        <button onClick={resetQuiz}>Restart</button>
        <button onClick={handleShow}>View Answers</button>
      </div>
      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Questions and Answers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {questions.map((question, index) => (
            <div
              key={index}
              className="question-answer"
              data-correct={userAnswers[index] ? "true" : "false"}
              style={{ margin: "0px", padding: "0px" }}
            >
              <p style={{ textAlign: "left" }}>
                <strong>Q{index + 1}:</strong> {question.question}{" "}
                <strong>Ans:</strong>{" "}
                <i>
                  {
                    question.answerOptions.find((option) => option.isCorrect)
                      .text
                  }
                </i>{" "}
              </p>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Result;
