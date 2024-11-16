import React from 'react';

function ResultsSection({ results }) {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">Prediction Results</h2>
      <p>Deepfake probability: {results.probability}%</p>
      {/* Add more result details here */}
    </div>
  );
}

export default ResultsSection;