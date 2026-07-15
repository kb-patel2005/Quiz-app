import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import LeaderBoard from "./LeaderBoard";

function ResultScreen({ score, total, quiz }) {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const percentage = (score / (total * 10)) * 100;

  const handleSubmit = async () => {
    if (username.trim() !== "") {
      try {
        await addDoc(collection(db, "leaderboard"), {
          name: username,
          quizId: quiz.id,
          quizTitle: quiz.title,
          score,
          percentage,
          completedAt: serverTimestamp(),
        });

        setSubmitted(true);
      } catch (error) {
        console.error(error);
      }

    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center p-8 bg-teal-50 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-[#005461] mb-4">Quiz Finished 🎉</h2>

        {/* Step 1: Ask for name first */}
        {!submitted ? (
          <div className="mt-6 space-y-3">
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-lg font-medium shadow-md transition w-full"
            >
              Submit Name
            </button>
          </div>
        ) : (
          <>
            {/* Step 2: Show results after name is submitted */}
            <p className="text-[#018790] text-lg">Score: {score}</p>
            <p className="text-[#018790] text-lg">Correct: {score / 10}</p>
            <p className="text-[#018790] text-lg">Wrong: {total - score / 10}</p>
            <p className="text-[#018790] text-lg">Percentage: {percentage}%</p>
            <p className="text-[#00B7B5] text-lg font-semibold mt-2">
              {percentage > 80 ? "Excellent!" : "Keep practicing!"}
            </p>
            <p className="mt-4 text-lg text-[#005461] font-semibold">
              Thanks, {username}! Your result has been saved ✅
            </p>

            <button
              onClick={() => (window.location.href = "/")}
              className="mt-6 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition w-full"
            >
              🎮 Play Again
            </button>
          </>
        )}
        {submitted && (
          <LeaderBoard quizId={quiz.id} />
        )}

      </div>
    </div>
  );
}

export default ResultScreen;
