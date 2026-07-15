// src/pages/QuizList.jsx
import React from "react";
import quizzesData from "../data/quiz";
import QuizCard from "../components/QuizCard";

function QuizList() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0fdfa] to-[#e0f2f1]">
      {/* Page Header */}
      <header className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-[#005461] drop-shadow-sm">
          🏆 Welcome to Quiz Player
        </h1>
        <p className="mt-4 text-lg text-[#018790] max-w-2xl mx-auto">
          Test your knowledge across categories, challenge yourself, and have fun learning!
        </p>
      </header>

      {/* Quiz Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {quizzesData.quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default QuizList;
