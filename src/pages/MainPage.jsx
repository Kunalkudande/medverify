import React, { useState } from 'react';
import SamplesPage from './SamplesPage';
import DetailsPage from './DetailsPage';
import ApiSection from '../components/ApiSection';

const MainPage = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file ? URL.createObjectURL(file) : null);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      {/* Main Page Section */}
      <section id="main" className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="w-full max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Free Deepfake Detector</h1>
            <p className="text-lg mb-6">
              1 out of 4 people are impacted by Voice AI Scams causing more than $1.6B in damages.
              Protect your organization today by integrating our Detect Stack.
            </p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700">
                Free Detector
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white font-semibold rounded hover:bg-gray-700">
                Enterprise Resemble Detect
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white rounded p-6 shadow-md text-black">
            <h2 className="text-2xl font-semibold mb-4">Upload an Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full mb-4 text-sm text-gray-600 border border-gray-300 rounded cursor-pointer focus:outline-none"
            />
            {image && (
              <div className="mt-4">
                <p className="mb-2">Uploaded Image Preview:</p>
                <img src={image} alt="Uploaded preview" className="max-w-full h-auto rounded" />
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default MainPage;
