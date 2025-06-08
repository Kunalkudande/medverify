import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";
import backgroundImage from "../images/detection-background.jpg";

const MainPage = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [selectedType, setSelectedType] = useState("lungs"); // Type state
  const navigate = useNavigate();

  // Handle image upload
  const handleImageUpload = (event) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please sign up before uploading an image.");
      navigate("/signup");
      return;
    }

    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
      setShowPopup(true);
      setResult(null);
    }
  };

  // Handle image detection
  const handleDetect = async () => {
    if (!imageFile) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    console.log(formData)
    formData.append("file", imageFile);
    formData.append("model_type", selectedType); // Send model type

    setLoading(true);
    setResult(null);
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      // Call FastAPI prediction endpoint
      console.log("Hello")
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        body: formData,
      });
      console.log(response)
      if (response.ok) {
        const data = await response.json();

        // Show prediction result in UI
        setResult({
          prediction: data.prediction || "Unknown",
          description: data.description || "Unknown",
          confidence: data.confidence || 0,
        });
        const token = localStorage.getItem("token");

        // Send prediction & user info to Node.js backend for history saving
        const uploadFormData = new FormData();
          uploadFormData.append("file", imageFile); // The actual file
          uploadFormData.append("modelType", selectedType);
          uploadFormData.append("userId", user._id); // if needed
          uploadFormData.append("prediction", JSON.stringify({
            prediction: data.prediction,
            description: data.description,
            confidence: data.confidence,
          }));

          await fetch("http://localhost:5000/api/image/upload", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${token}`,  // only auth header, NO Content-Type here!
            },
            body: uploadFormData,
          });


      } else {
        throw new Error("Error: Could not process the image.");
      }
    } catch (error) {
      alert("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <section className="flex flex-col items-center justify-center min-h-screen p-8 rounded-lg">
        <div className="w-full max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-between">
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

          <div className="lg:w-1/2 bg-gray-800 rounded-lg p-6 shadow-xl text-white">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">
              Upload an Image
            </h2>

            {/* Image Type Selection */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-300">
                Select Image Type:
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-green-600 focus:outline-none"
              >
                <option value="lungs">Lungs CT Scan</option>
                <option value="knee">Knee Scan</option>
              </select>
            </div>

            {/* Image Upload Button */}
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

            {/* Display image preview */}
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

      {/* Show Popup for Result */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-md text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              {result ? "Prediction Result" : "Ready to Detect"}
            </h3>
            <div className="mb-4">
              <img
                src={image}
                alt="Uploaded Preview"
                className="max-w-full h-40 object-contain border border-green-600 rounded-md shadow-md"
              />
            </div>
            {result ? (
              <>
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
                <h3 className="text-xl font-semibold">Description:</h3>
                <p
                  className={`text-2xl font-bold ${
                    result.prediction.includes("Malicious")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {result.description}
                </p>
                <p className="text-gray-300">
                  Confidence: {(result.confidence * 100).toFixed(2)}%
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-6 px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 shadow-lg transition"
                >
                  Close
                </button>
              </>
            ) : (
              <>
                <p className="text-gray-300 mb-6">
                  Your image is uploaded successfully. Click below to detect!
                </p>
                <button
                  onClick={handleDetect}
                  disabled={loading}
                  className={`px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 shadow-lg transition ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Detecting..." : "Detect"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
