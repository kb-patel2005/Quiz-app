// src/components/QuizPlayer.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";
import ResultScreen from "./ResultScreen";

function QuizPlayer({ quiz }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  console.log("Quiz Data:", quiz); // Debugging line to check the quiz data
  const [timeLeft, setTimeLeft] = useState(quiz.timePerQuestion);

  const handleNext = () => {
    if (selected === quiz.questions[index].correctAnswer) {
      setScore(score + quiz.questions[index].points);
    }
    setSelected(null);
    setTimeLeft(quiz.timePerQuestion);
    setIndex(index + 1);
  };

  if (index >= quiz.questions.length) {
    return <ResultScreen score={score} total={quiz.questions.length} quiz={quiz} />;
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };

  const item = { hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.div
      className="p-6 rounded-lg w-full max-w-2xl mx-auto mt-10 bg-white shadow-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <ProgressBar current={index + 1} total={quiz.questions.length} />
      </motion.div>

      <motion.h2
        variants={item}
        className="text-xl font-bold mb-2 text-[#005461]"
      >
        Question {index + 1}/{quiz.questions.length}
      </motion.h2>

      <motion.div variants={item} className="text-lg font-semibold mb-2 text-black">
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeout={handleNext} />
      </motion.div>

      <motion.p
        variants={item}
        className="mb-4 text-[#00B7B5] font-medium overflow-hidden"
      >
        <motion.span
          style={{ display: "inline-block", transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {quiz.questions[index].question}
        </motion.span>
      </motion.p>

      <motion.div className="grid gap-3" variants={containerVariants}>
        {quiz.questions[index].options.map((opt) => (
          <motion.button
            key={opt}
            onClick={() => setSelected(opt)}
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-4 py-2 rounded-lg text-left border transition-all duration-150 focus:outline-none ${
              selected === opt
                ? "bg-gradient-to-r from-indigo-600 to-purple-500 text-white ring-2 ring-indigo-300"
                : "bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-200"
            }`}
          >
            {opt}
          </motion.button>
        ))}
      </motion.div>

      <motion.button
        variants={item}
        disabled={!selected}
        onClick={handleNext}
        whileHover={{ translateY: -3 }}
        className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </motion.button>
    </motion.div>
  );
}

export default QuizPlayer;
