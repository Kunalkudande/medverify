// import React from "react";

// function ResultsSection({ results }) {
//   if (!results) {
//     return (
//       <div className="container mx-auto px-6 py-8 text-center text-gray-500">
//         <p>No predictions yet. Upload an image to check.</p>
//       </div>
//     );
//   }

//   const isKneeModel = results.prediction === "Real" || results.prediction === "Fake";
//   const confidencePercent = (results.confidence * 100).toFixed(2);

//   const displayPrediction = isKneeModel
//     ? results.confidence === 1.0
//       ? "Real"
//       : results.confidence === 0.0
//       ? "Fake"
//       : results.prediction
//     : results.prediction;

//   return (
//     <div className="container mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4 text-blue-700">Prediction Results</h2>

//       <p className="text-lg mb-2">
//         <span className="font-semibold text-gray-700">Prediction: </span>
//         <span
//           className={`font-semibold ${
//             displayPrediction === "Fake" || displayPrediction.includes("False")
//               ? "text-red-600"
//               : "text-green-600"
//           }`}
//         >
//           {displayPrediction}
//         </span>
//       </p>

//       <p className="text-lg">
//         <span className="font-semibold text-gray-700">Confidence: </span>
//         <span className="text-indigo-600">{confidencePercent}%</span>
//       </p>

//       {/* Optional description if available */}
//       {results.description && (
//         <p className="mt-4 text-gray-600 italic border-t border-gray-200 pt-4">
//           {results.description}
//         </p>
//       )}
//     </div>
//   );
// }

// export default ResultsSection;
