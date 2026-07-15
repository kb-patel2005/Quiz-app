import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Timer({ timeLeft, setTimeLeft, onTimeout }) {
  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const urgent = timeLeft <= 5;

  return (
    <motion.p
      className={`mb-2 font-semibold ${urgent ? "text-rose-300" : "text-indigo-500"}`}
      animate={urgent ? { scale: [1, 1.03, 1] } : { scale: 1 }}
      transition={{ duration: 0.6, repeat: urgent ? Infinity : 0 }}
    >
      ⏳ Time Left: {timeLeft}s
    </motion.p>
  );
}

export default Timer;