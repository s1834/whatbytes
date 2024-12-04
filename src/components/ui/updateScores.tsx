"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpdateScores = ({ isOpen, onClose }: ModalProps) => {
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [currentScore, setCurrentScore] = useState("");

  const handleSave = () => {
    console.log("Updated Scores:", { rank, percentile, currentScore });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[750px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Update Scores</h2>
              <Image
                src="/html-logo.svg"
                alt="HTML Logo"
                width={50}
                height={50}
                className="ml-2"
              />
            </div>

            <div className="space-y-6">
              {/* Rank */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  1
                </div>
                <label htmlFor="rank" className="w-1/3 text-left">
                  Update your <b>Rank</b>
                </label>
                <input
                  id="rank"
                  type="text"
                  placeholder="Rank"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-xl"
                />
              </div>

              {/* Percentile */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <label htmlFor="percentile" className="w-1/3 text-left">
                  Update your <b>Percentile</b>
                </label>
                <input
                  id="percentile"
                  type="text"
                  placeholder="Percentile"
                  value={percentile}
                  onChange={(e) => setPercentile(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-xl"
                />
              </div>

              {/* Current Score */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  3
                </div>
                <label htmlFor="currentScore" className="w-1/3 text-left">
                  Update your <b>Current Score (out of 15)</b>
                </label>
                <input
                  id="currentScore"
                  type="text"
                  placeholder="Current Score"
                  value={currentScore}
                  onChange={(e) => setCurrentScore(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-xl"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-6 py-4 text-blue-600 bg-white rounded-xl border border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-500"
              >
                Save →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
