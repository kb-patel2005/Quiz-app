import React from "react";
import { motion } from "framer-motion";

function ProgressBar({ current, total }) {
    const progress = (current / total) * 100;
    return (
        <div className="w-full bg-white/6 rounded-full h-2 mb-4 overflow-hidden">
            <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
        </div>
    );
}

export default ProgressBar;
