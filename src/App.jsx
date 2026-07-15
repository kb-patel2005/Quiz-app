import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizList from "./pages/QuizList";
import PlayQuiz from "./pages/PlayQuiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/quiz/:id" element={<PlayQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;