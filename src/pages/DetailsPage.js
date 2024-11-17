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
        "The system uses a pre-trained EfficientNet deep learning model to analyze uploaded medical images and classify them as real or fake with high accuracy.",
    },
    {
      question: "Can this system be used with other types of images?",
      answer:
        "Currently, the system is optimized for detecting medical deepfakes, but it can be adapted for other image types with additional training and customization.",
    },
    {
      question: "What kind of data is required for training the model?",
      answer:
        "The model requires a balanced dataset of real and fake medical images for effective training. High-quality annotated data improves the system's accuracy.",
    },
    {
      question: "How secure is the uploaded data?",
      answer:
        "Uploaded data is processed securely and not stored permanently. Privacy and security protocols ensure data confidentiality.",
    },
  ];

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      {/* Project Details Section */}
      <div className="bg-white rounded-lg shadow-lg px-12 py-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6">
          Project Details
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Welcome to our <span className="font-semibold text-blue-600">Medical Deepfake Detection System</span>, an innovative solution leveraging the power of <span className="font-semibold">Deep Learning</span> to ensure the authenticity of medical images. This project is designed to combat the growing issue of medical deepfakes, which can mislead healthcare professionals and patients.
        </p>
        <div className="mt-6 space-y-4 text-left">
          <p className="text-lg text-gray-700">
            <span className="font-bold text-blue-600">Backend:</span> Built with Python, the system utilizes a pre-trained <span className="italic text-blue-500">EfficientNet</span> model to classify images as real or fake, ensuring high accuracy and reliability.
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-blue-600">Frontend:</span> A sleek, user-friendly interface developed using <span className="italic text-blue-500">React.js</span> and styled with TailwindCSS, enabling seamless image uploads and instant feedback.
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-blue-600">Use Case:</span> Upload medical images to verify their authenticity. The system processes and provides results in real-time, offering critical support for healthcare organizations.
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
