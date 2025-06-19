import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ScoreSummary.css";

function ScoreSummary() {
  const navigate = useNavigate();
  const score = parseInt(localStorage.getItem("score") || "0", 10);
  const name = localStorage.getItem("playerName") || "Player";
  const results = JSON.parse(localStorage.getItem("quizResults")) || [];
  const settings = JSON.parse(localStorage.getItem("quizSettings")) || {};
  const savedRef = useRef(false);

  const totalTime = results.reduce((sum, r) => sum + r.timeTaken, 0);
  const avgTime = results.length ? (totalTime / results.length).toFixed(2) : 0;
  const fastest = [...results].sort((a, b) => a.timeTaken - b.timeTaken)[0];
  const slowest = [...results].sort((a, b) => b.timeTaken - a.timeTaken)[0];

  const correctCounts = results.reduce((acc, r) => {
    if (r.correct) acc[r.category] = (acc[r.category] || 0) + 1;
    return acc;
  }, {});

  const incorrectCounts = results.reduce((acc, r) => {
    if (!r.correct) acc[r.category] = (acc[r.category] || 0) + 1;
    return acc;
  }, {});

  const mostAccurateCategory = Object.keys(correctCounts).reduce((a, b) =>
    correctCounts[a] > correctCounts[b] ? a : b, "");

  const mostStruggledCategory = Object.keys(incorrectCounts).reduce((a, b) =>
    incorrectCounts[a] > incorrectCounts[b] ? a : b, "");

  // Motivational message logic
  const getMotivation = () => {
    const percent = (score / results.length) * 100;
    if (percent >= 90) return "🏆 Quiz Champion! Outstanding!";
    if (percent >= 70) return "🎉 Great effort! Keep it up!";
    if (percent >= 50) return "👍 Good try! You're getting there!";
    return "☕ More caffeine, maybe? Try again!";
  };

  useEffect(() => {
    if (savedRef.current || results.length === 0) return;

    const newEntry = {
  name,
  score,
  category: settings.category || "General",
  difficulty: settings.difficulty || "Unknown",
  timeTaken: totalTime.toFixed(2) + "s",
  date: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })
};


    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push(newEntry);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    savedRef.current = true;
  }, []);

  const handleRestart = () => {
    localStorage.removeItem("score");
    localStorage.removeItem("quizResults");
    navigate("/");
  };

  return (
    <div className="summary-container">
      <h2>🎉 Quiz Summary</h2>
      <p>
        <strong>{name}</strong>, you scored <strong>{score}</strong> out of <strong>{results.length}</strong>!
      </p>
      <p className="motivation">{getMotivation()}</p>

      {results.length > 0 && (
        <div className="analysis">
          <h3>📊 Performance Analysis</h3>
          <p>⏱ Avg. Time/Question: <strong>{avgTime}s</strong></p>
          <p>⚡ Fastest Answer: <strong>{fastest?.timeTaken}s</strong> – <em>{fastest?.question}</em></p>
          <p>🐢 Slowest Answer: <strong>{slowest?.timeTaken}s</strong> – <em>{slowest?.question}</em></p>
          <p>🎯 Most Accurate Category: <strong>{mostAccurateCategory || "N/A"}</strong></p>
          {mostStruggledCategory && (
            <p>❗ Struggled Category: <strong>{mostStruggledCategory}</strong></p>
          )}

          <h4>🧮 Per-Question Summary</h4>
          <table className="summary-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Question</th>
                <th>Answered</th>
                <th>Correct</th>
                <th>Time (s)</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, i) => (
                <tr
                  key={i}
                  className={
                    res.question === fastest?.question
                      ? "highlight-fast"
                      : res.question === slowest?.question
                      ? "highlight-slow"
                      : ""
                  }
                >
                  <td>{i + 1}</td>
                  <td>{res.question}</td>
                  <td>{res.selectedOption || "⏱ Timed Out"}</td>
                  <td>{res.correct ? "✅" : "❌"}</td>
                  <td>{res.timeTaken.toFixed(2)}</td>
                  <td>{res.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="summary-buttons">
        <Link to="/leaderboard" className="summary-link">📋 View Leaderboard</Link>
        <button onClick={handleRestart} className="restart-btn">🔁 Play Again</button>
      </div>
    </div>
  );
}

export default ScoreSummary;
