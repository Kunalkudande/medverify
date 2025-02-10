import React from "react";

function ResultsSection({ results }) {
  if (!results) {
    return (
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>No predictions yet. Upload an image to check.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">Prediction Results</h2>
      
      <p className="text-lg">
        Deepfake Probability:{" "}
        <span
          className={`font-semibold ${
            results.probability > 50 ? "text-red-500" : "text-green-500"
          }`}
        >
          {results.probability.toFixed(2)}%
        </span>
      </p>

      {/* 🔹 Add more details here if needed */}
    </div>
  );
}

export default ResultsSection;
