import React, { useState } from "react";

function DetailsPage() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a medical deepfake?",
      answer:
        "A medical deepfake is a digitally altered medical image or video created using artificial intelligence to mimic real medical data, often used maliciously to spread misinformation.",
    },
    {
      question: "How does this system detect medical deepfakes?",
      answer:
        "The system uses custom-trained CNN models to analyze uploaded medical images and classify them as real or fake with high accuracy.",
    },
    {
      question: "Can this system be used with other types of images?",
      answer:
        "Currently, the system supports lungs and knee datasets, but it can be extended to other medical image types with additional model training.",
    },
    {
      question: "What kind of data is required for training the model?",
      answer:
        "Balanced and high-quality datasets of both real and fake medical images are required for effective training and better prediction performance.",
    },
    {
      question: "How secure is the uploaded data?",
      answer:
        "Uploaded data is securely transmitted and not stored permanently. Our system ensures privacy by following secure communication protocols.",
    },
  ];

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      {/* Project Overview Section */}
      <div className="bg-white rounded-2xl shadow-2xl px-10 py-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">
          MedVerify: Medical Deepfake Detection System
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <span className="font-semibold text-blue-600">MedVerify</span> is a full-stack AI-powered platform designed to detect tampered or AI-generated medical images such as X-rays. By leveraging modern microservice architecture and state-of-the-art deep learning, it helps healthcare professionals verify image authenticity and reduce the risk of misdiagnosis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🔍 Prediction Microservice</h3>
            <p className="text-gray-700">
              Built with <span className="font-medium text-blue-500">FastAPI</span> and Python, this service loads two custom-trained <span className="italic">CNN models</span> for lungs and knee X-rays. It handles image preprocessing and prediction.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">💾 Database Microservice</h3>
            <p className="text-gray-700">
              Developed using <span className="font-medium text-green-600">Node.js</span>, <span className="font-medium text-yellow-600">Express</span>, and <span className="font-medium text-teal-700">MongoDB</span>, this service securely manages user data, authentication, and image metadata.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🧠 Model Architecture</h3>
            <p className="text-gray-700">
              The core deep learning models are trained using <span className="font-medium">Convolutional Neural Networks (CNNs)</span> for high accuracy on domain-specific datasets (lungs and knees).
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🌐 Frontend Interface</h3>
            <p className="text-gray-700">
              The user-facing interface is built with <span className="font-medium text-blue-500">React.js</span> and styled using <span className="font-medium text-indigo-500">TailwindCSS</span>. Users can register, choose the dataset type (lungs or knee), upload images, and receive predictions in real time.
            </p>
          </div>
        </div>

        <div className="mt-10 text-gray-800 text-md leading-relaxed">
          <p>
            All services communicate through robust API connections, ensuring a decoupled and scalable architecture.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-blue-50 rounded-lg shadow-lg p-8 mt-12 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h4 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
                {faq.question}
                <span
                  className={`text-2xl ${
                    openQuestion === index ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  {openQuestion === index ? "-" : "+"}
                </span>
              </h4>
              {openQuestion === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
