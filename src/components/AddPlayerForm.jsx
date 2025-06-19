// src/components/AddPlayerForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPlayerForm.css";

function AddPlayerForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && category && difficulty) {
      const settings = { name, category, difficulty };
      localStorage.setItem("playerName", name);
      localStorage.setItem("quizSettings", JSON.stringify(settings));
      navigate("/quiz");
    }
  };

  return (
    <div className="form-container">
      <h2>Welcome to the Quiz!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Science">Science</option>
          <option value="Math">Math</option>
          <option value="History">History</option>
        </select>

        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required>
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <button type="submit" disabled={!name || !category || !difficulty}>
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default AddPlayerForm;
