import React from "react";
import { AiOutlineApi } from "react-icons/ai";

const ApiSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header Section */}
      <div className="bg-yellow-500 text-black px-4 py-1 mb-4 font-semibold rounded-md shadow-md">
        FOR DEVELOPERS
      </div>
      <h2 className="text-4xl font-extrabold mb-4 text-yellow-400 flex items-center gap-2">
        <AiOutlineApi size={40} className="text-yellow-300" />
        Developer-First API
      </h2>
      <p className="max-w-xl text-center mb-6 text-gray-300">
        Empower your applications to recognize deepfake audio across a myriad of
        media types, from music to podcasts, combating AI fraud by leveraging
        cutting-edge neural models.
      </p>
      <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md shadow-lg hover:bg-yellow-500 transition">
        Get API Access
      </button>

      {/* Code Section */}
      <div className="bg-gray-800 rounded-lg p-6 mt-8 shadow-lg w-full max-w-screen-md">
        <h3 className="text-lg font-semibold text-yellow-400 mb-4 text-center">
          Example API Request
        </h3>
        <pre className="bg-gray-900 text-left text-green-400 p-4 rounded-lg overflow-auto text-sm">
          <code>
            {`curl --location --request POST \\
'https://app.resemble.ai/api/v2/detect' \\
--header 'x-access-token: YOURACCESSTOKEN' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "audio_src": "https://resemble-detect.s3.us-east-2.amazonaws.com/example.wav",
  "mode": "label"
}'`}
          </code>
        </pre>
      </div>

      {/* Additional Decoration */}
      <div className="mt-12 w-32 h-1 bg-yellow-400 rounded-md"></div>
    </div>
  );
};

export default ApiSection;
