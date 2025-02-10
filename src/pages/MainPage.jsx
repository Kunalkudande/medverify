import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import backgroundImage from "../images/detection-background.jpg"; // Update with your image path

const MainPage = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Store actual file
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // ✅ Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Generate preview
      setImageFile(file); // Store actual file for sending
      setShowPopup(true); // Show popup after upload
      setResult(null); // Reset previous result
    }
  };

  // ✅ Send Image to Backend API for Prediction
  const handleDetect = async () => {
    if (!imageFile) {
      alert("⚠ Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageFile); // 🔹 FastAPI expects "file"

    console.log("📤 Sending image to API...");
    setLoading(true);
    setResult(null); // Reset previous result

    try {
      const response = await fetch("http://127.0.0.1:8080/predict/", {
        method: "POST",
        body: formData,
      });

      console.log("✅ API Response Status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("📥 Data received from API:", data);

      setResult({
        prediction: data.prediction || "Unknown",
        confidence: data.confidence || 0,
      });
    } catch (error) {
      console.error("❌ API Error:", error);
      alert("Error: Could not process the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Main Page Section */}
      <section
        id="main"
        className="flex flex-col items-center justify-center min-h-screen p-8 rounded-lg"
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

      {/* ✅ Popup Detect Button & Prediction Result */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-md text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              {result ? "Prediction Result" : "Ready to Detect"}
            </h3>

            {/* ✅ Show Uploaded Image Inside Popup */}
            <div className="mb-4">
              <img
                src={image}
                alt="Uploaded Preview"
                className="max-w-full h-40 object-contain border border-green-600 rounded-md shadow-md"
              />
            </div>

            {/* ✅ Show Prediction Result */}
            {result ? (
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">Prediction:</h3>
                <p
                  className={`text-2xl font-bold ${
                    result.prediction.includes("Malicious")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {result.prediction}
                </p>
                <p className="text-gray-300">
                  Confidence: {(result.confidence * 100).toFixed(2)}%
                </p>
              </div>
            ) : (
              <p className="text-gray-300 mb-6">
                Your image is uploaded successfully. Click below to detect!
              </p>
            )}

            {/* ✅ Detect Button */}
            {!result && (
              <button
                onClick={handleDetect}
                disabled={loading}
                className={`px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 shadow-lg transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Detecting..." : "Detect"}
              </button>
            )}

            {/* ✅ Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 shadow-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
