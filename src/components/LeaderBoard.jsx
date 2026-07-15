import React, { useEffect, useState } from "react";
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Leaderboard({ quizId }) {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const q = query(
                    collection(db, "leaderboard"),
                    where("quizId", "==", quizId),
                    orderBy("score", "desc"),
                    orderBy("completedAt", "desc"),
                    limit(10)
                );

                const snapshot = await getDocs(q);
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setScores(data);
            } catch (error) {
                console.error("Error fetching leaderboard:", error);
            }
        };

        fetchLeaderboard();
    }, [quizId]);

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg max-w-lg mt-3">
            <h2 className="text-2xl font-bold text-[#005461] mb-4">🏆 Leaderboard</h2>
            {scores.length === 0 ? (
                <p className="text-[#018790]">No scores yet. Be the first!</p>
            ) : (
                <ul className="space-y-2">
                    {scores.map((entry, index) => (
                        <li
                            key={entry.id}
                            className="flex justify-between bg-teal-50 p-3 rounded-lg shadow-sm"
                        >
                            <span className="font-semibold text-[#005461]">
                                {index + 1}. {entry.name}
                            </span>
                            <span className="text-[#018790]">
                                {Math.round(entry.percentage)}%
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Leaderboard;
