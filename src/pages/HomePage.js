import { useState } from "react";

function HomePage() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle Image Selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Generate preview
    }
  };

  // Send Image to Backend API for Prediction
  const handleCheckImage = async () => {
    console.log("Button Clicked!");

    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image); // FastAPI expects "file"

    console.log("Sending image to API...");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8080/predict/", {
        method: "POST",
        body: formData,
      });

      console.log("API Response Status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data received from API:", data);

      setResult({
        prediction: data.prediction || "Unknown",
        confidence: data.confidence || 0,
      });
    } catch (error) {
      console.error("API Error:", error);
      alert("Error: Could not process the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-6">Welcome to MedVerify</h2>
      <p className="mb-4 text-gray-600 text-center">
        Upload a medical image to verify its authenticity.
      </p>

      {/*Image Upload Input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 border p-2 rounded"
      />

      {/*Image Preview */}
      {imagePreview && (
        <div className="mb-4">
          <p className="text-gray-600">Selected Image:</p>
          <img
            src={imagePreview}
            alt="Uploaded Preview"
            className="w-64 h-64 object-contain border rounded shadow-md"
          />
        </div>
      )}

      {/*Check Image Button */}
      <button
        onClick={handleCheckImage}
        disabled={loading}
        className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Checking..." : "Check Image"}
      </button>

      {/*Display Prediction Result */}
      {result && (
        <div className="mt-6 text-center">
          <h3 className="text-xl">Prediction Result:</h3>
          <p
            className={`text-2xl font-bold ${
              result.prediction.includes("Malicious")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {result.prediction}{" "}
            <span className="text-gray-600">
              ({(result.confidence * 100).toFixed(2)}% confidence)
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
