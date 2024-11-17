import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import backgroundImage from "../images/detection-background.jpg"; // Update with your image path

const MainPage = () => {
  const [image, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file ? URL.createObjectURL(file) : null);
    setShowPopup(true); // Show the popup after the image is uploaded
  };

  const handleDetect = () => {
    alert("Detecting the uploaded image..."); // Replace with actual detection logic
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Main Page Section */}
      <section
        id="main"
        className="flex flex-col items-center justify-center min-h-screen p-8  rounded-lg"
      >
        <div className="w-full max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <h1 className="text-4xl font-extrabold mb-4 leading-tight text-green-400">
              Medical Deepfake Detector
            </h1>
            <p className="text-lg mb-6 text-gray-300">
              1 in 4 people are affected by medical deepfake scams, posing
              serious risks to healthcare integrity and patient safety. Protect
              your organization now with our advanced Medical Deepfake Detection
              tools.
            </p>
            <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 shadow-lg transition">
              Free Detector
            </button>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 bg-gray-800 rounded-lg p-6 shadow-xl text-white">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">
              Upload an Image
            </h2>
            <label
              htmlFor="imageUpload"
              className="flex flex-col items-center justify-center border border-dashed border-green-600 p-6 rounded-md cursor-pointer hover:bg-gray-700 transition"
            >
              <AiOutlineCloudUpload size={48} className="text-green-500 mb-4" />
              <p className="text-gray-300">
                Drag & Drop or{" "}
                <span className="text-green-400 underline">Browse</span>
              </p>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            {image && (
              <div className="mt-6 text-center">
                <p className="mb-4 text-green-400 font-semibold">
                  Uploaded Image Preview:
                </p>
                <img
                  src={image}
                  alt="Uploaded preview"
                  className="max-w-full h-auto rounded-md shadow-md border border-green-600"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popup Detect Button */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-md text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Ready to Detect
            </h3>
            <p className="text-gray-300 mb-6">
              Your image is uploaded successfully. Click below to detect!
            </p>
            <button
              onClick={handleDetect}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 shadow-lg transition"
            >
              Detect
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 shadow-lg transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
