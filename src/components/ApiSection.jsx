import React from "react";

const ApiSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="bg-yellow-500 text-black px-2 py-1 mb-4 font-semibold">
        FOR DEVELOPERS
      </div>
      <h2 className="text-4xl font-bold mb-4">Developer first API</h2>
      <p className="max-w-md text-center mb-6">
        Empower your applications to recognize deepfake audio across a myriad of media types, from music to podcasts, combating AI fraud by leveraging cutting-edge neural models.
      </p>
      <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 mb-6">
        Get API Access
      </button>
      <div className="bg-gray-800 rounded p-4 text-sm overflow-auto max-w-full w-80 md:w-[600px]">
        <pre className="text-left text-green-500 whitespace-pre-wrap">
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
    </div>
  );
};

export default ApiSection;
