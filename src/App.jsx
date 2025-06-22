import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AddPlayerForm from "./components/AddPlayerForm";
import QuizEngine from "./components/QuizEngine";
import ScoreSummary from "./components/ScoreSummary";
import Leaderboard from "./components/LeaderBoard";
import AboutPage from "./components/AboutPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/add-player" element={<AddPlayerForm />} />
        <Route path="/quiz" element={<QuizEngine />} />
        <Route path="/summary" element={<ScoreSummary />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
