import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Welcome to QuizMaster</h1>
          <p>Test your brain with fun quizzes!</p>
          <Link to="/add-player" className="start-btn">Start Quiz</Link>
        </div>
        <div className="hero-image">
          <img src="https://thumbs.dreamstime.com/b/quiz-letters-quiz-letters-sign-speech-bubbles-colorful-transparent-flat-style-title-logo-transparency-flattened-103290887.jpg" alt="Quiz illustration" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
