import React from "react";
import { Link } from "react-router-dom";

function QuizCard({ quiz }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center gap-6 flex-wrap">
      
      {/* Thumbnail */}
      <div className="w-[250px]">
        <img
          src={`/${quiz.thumbnail}`}
          alt={quiz.title}
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Quiz Info */}
      <div className="w-full space-y-3">
        <h2 className="font-bold text-2xl text-[#005461]">{quiz.title}</h2>
        <p className="text-[#018790]">{quiz.description}</p>

        {/* Info Boxes */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 text-sm">
          <div className="bg-teal-50 p-3 rounded-lg shadow-sm">
            <span className="block font-semibold text-[#005461]">Category: {quiz.category}</span>
          </div>
          <div className="bg-green-50 p-3 rounded-lg shadow-sm">
            <span className="block font-semibold text-[#005461]">Difficulty: {quiz.difficulty}</span>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg shadow-sm">
            <span className="block font-semibold text-[#005461]">Questions: {quiz.totalQuestions}</span>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg shadow-sm">
            <span className="block font-semibold text-[#005461]">Time/Q: {quiz.timePerQuestion}s</span>
          </div>
        </div>

        {/* Play Button */}
        <Link to={`/quiz/${quiz.id}`}>
          <button className="mt-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-5 py-2 rounded-lg font-medium shadow-md transition">
            🎮 Play Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default QuizCard;
