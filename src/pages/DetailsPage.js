function DetailsPage() {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Project Details</h2>
        <p>
          This project utilizes deep learning techniques to detect medical deepfake images. The backend is developed in Python, employing a pre-trained EfficientNet model to classify images as real or fake. Users can upload an image on the home page to test its authenticity.
        </p>
      </div>
    );
  }
  
  export default DetailsPage;
  