import React, { useEffect, useState } from "react";
import "./LeaderBoard.css";

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [sortOption, setSortOption] = useState("score");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

useEffect(() => {
  const raw = JSON.parse(localStorage.getItem("leaderboard") || "[]");

  const filtered = Array.isArray(raw)
    ? raw.filter(
        (entry) =>
          entry &&
          typeof entry === "object" &&
          typeof entry.name === "string"
      )
    : [];

  setEntries(filtered);
}, []);

const filteredEntries = entries.filter((entry) =>
  entry.name?.toLowerCase().includes(searchQuery.toLowerCase())
);

const sortedEntries = [...filteredEntries].sort((a, b) => {
  if (sortOption === "score") return b.score - a.score;
  if (sortOption === "time") return a.timeTaken - b.timeTaken;
  return 0;
});

  const totalPages = Math.ceil(sortedEntries.length / itemsPerPage);
  const paginatedEntries = sortedEntries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>

      <div className="leaderboard-controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="score">Highest Score</option>
          <option value="time">Fastest Time</option>
        </select>
      </div>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Time (s)</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {paginatedEntries.map((entry, i) => (
            <tr key={i} className={i === 0 && currentPage === 1 ? "top-scorer" : ""}>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
              <td>{entry.timeTaken}</td>
              <td>{entry.category}</td>
              <td>{entry.difficulty}</td>
              <td>{entry.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
