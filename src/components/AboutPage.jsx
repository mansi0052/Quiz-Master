import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>📚 About This Quiz App</h1>

      <section className="about-section">
        <h2>🎯 What is this App?</h2>
        <p>
          This is a fun and interactive Quiz Web App built as part of the Kshitij Web Development &
          AI Workshop 2025. It allows users to select categories, answer timed questions, view performance stats,
          and compete on the leaderboard!
        </p>
      </section>

      <section className="about-section">
        <h2>🛠️ Technologies Used</h2>
        <ul>
          <li>⚛️ React JS – for building the UI</li>
          <li>📦 React Router – for page navigation</li>
          <li>🗃️ localStorage – to persist data like scores, leaderboard, and player info</li>
          <li>🎨 CSS – for styling with animations, transitions, and responsiveness</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🧠 What I Learned</h2>
        <ul>
          <li>⏱ Handling timers and intervals in React</li>
          <li>🔁 Re-rendering components based on state and localStorage</li>
          <li>📊 Storing and analyzing quiz performance data</li>
          <li>📱 Making responsive and interactive UIs</li>
          <li>🧪 Debugging tricky bugs (like back button logic!)</li>
        </ul>
      </section>

      <section className="about-section meme-section">
        <h2>😄 Just for Fun</h2>
        <img
          src="https://media.tenor.com/2gpoHQxAIugAAAAm/double-thumbs-up-emoticon-emoticon.webp"
          alt="When you get all answers right"
          className="meme"
        />
        <p className="caption">When you see your name at the top of the leaderboard 🏆</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSi-HGxHEaGDMOMDsCmNTd6SVyTXrhdQJog&s"
          alt="Struggled with JavaScript"
          className="meme"
        />
        <p className="caption">When JavaScript timer broke your quiz flow 😵</p>
      </section>

      <footer className="about-footer">
        <p>Made with 💙 during Kshitij 2025 Workshop</p>
      </footer>
    </div>
  );
}

export default About;
