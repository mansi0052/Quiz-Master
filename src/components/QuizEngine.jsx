import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../questions";
import "./QuizEngine.css";

function QuizEngine() {
  const [quizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timer, setTimer] = useState(15);
  const [answerTimes, setAnswerTimes] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  const intervalRef = useRef(null);
  const navigate = useNavigate();

  // Load questions based on settings
  useEffect(() => {
    const playerData = JSON.parse(localStorage.getItem("quizSettings"));
    const filtered = questions.filter(
      (q) => q.category === playerData.category && q.difficulty === playerData.difficulty
    );
    setQuizData(filtered);
  }, []);

  // Timer effect
  useEffect(() => {
    if (timer === 0 && selectedOption === null) {
      setShowAnswer(true);
      clearInterval(intervalRef.current);
      setTimeout(() => handleNext(), 1500);
    }
    intervalRef.current = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, timer]);

  // Restore previous answer and time
  useEffect(() => {
    const prevAnswer = userAnswers[currentIndex];
    const prevTime = answerTimes[currentIndex]?.timeTaken || 0;

    if (prevAnswer !== undefined) {
      setSelectedOption(prevAnswer);
      setShowAnswer(false);
      setTimer(15 - prevTime);
    } else {
      setSelectedOption(null);
      setShowAnswer(false);
      setTimer(15);
    }
  }, [currentIndex]);

  // Answer click logic
  const handleOptionClick = (option) => {
    if (timer <= 0) return;

    clearInterval(intervalRef.current);
    setSelectedOption(option);
    setShowAnswer(true);

    setUserAnswers((prev) => {
      const updated = [...prev];
      updated[currentIndex] = option;
      return updated;
    });

    setAnswerTimes((prev) => {
      const updated = [...prev];
      updated[currentIndex] = {
        question: quizData[currentIndex].question,
        category: quizData[currentIndex].category,
        timeTaken: 15 - timer,
        correct: option === quizData[currentIndex].answer,
      };
      return updated;
    });
  };

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      localStorage.setItem("quizResults", JSON.stringify(answerTimes));
      localStorage.setItem(
        "score",
        answerTimes.filter((a) => a?.correct).length
      );
      navigate("/summary");
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (quizData.length === 0) return <p>Loading questions...</p>;

  const current = quizData[currentIndex];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${((currentIndex + 1) / quizData.length) * 100}%`,
            }}
          />
        </div>
        <h2>
          Question {currentIndex + 1} of {quizData.length}
        </h2>
        <div className="timer">⏱ {timer}s</div>
      </div>

      <h3 className="question">{current.question}</h3>
      <div className="options">
        {current.options.map((opt) => (
          <button
            key={opt}
            className={`option-btn ${
              showAnswer
                ? opt === current.answer
                  ? "correct"
                  : opt === selectedOption
                  ? "wrong"
                  : ""
                : selectedOption === opt
                ? "selected"
                : ""
            }`}
            onClick={() => handleOptionClick(opt)}
            disabled={showAnswer || timer === 0}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="button-group">
        {currentIndex > 0 && (
          <button className="back-btn" onClick={handleBack}>
            ← Back
          </button>
        )}
        <button
          className="next-btn"
          onClick={handleNext}
          disabled={selectedOption === null && timer > 0}
        >
          {currentIndex === quizData.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default QuizEngine;
