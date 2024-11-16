import { useState } from 'react';

function HomePage() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the image
    }
  };

  const handleCheckImage = async () => {
    if (!image) {
      alert("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setResult(data.result); // "Real" or "Fake"
    } catch (error) {
      console.error(error);
      alert("Error occurred while checking the image.");
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-6">Welcome to MedVerify</h2>
      <p className="mb-4 text-gray-600 text-center">
        Upload a medical image to verify its authenticity.
      </p>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 border p-2 rounded"
      />
      
      {/* Display the image preview if an image is selected */}
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

      <button
        onClick={handleCheckImage}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Check Image
      </button>

      {/* Display the prediction result */}
      {result && (
        <div className="mt-6 text-center">
          <h3 className="text-xl">Prediction Result:</h3>
          <p className={`text-2xl font-bold ${result === 'Fake' ? 'text-red-500' : 'text-green-500'}`}>
            {result}
          </p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
