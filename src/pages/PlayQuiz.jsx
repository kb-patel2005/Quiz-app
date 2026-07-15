import React from "react";
import { useParams } from "react-router-dom";
import quizzesData from "../data/quiz.json";
import QuizPlayer from "../components/QuizPlayer";

function PlayQuiz() {
  const { id } = useParams();
  const quiz = quizzesData.quizzes.find((q) => q.id === id);

  return <QuizPlayer quiz={quiz} />;
}

export default PlayQuiz;