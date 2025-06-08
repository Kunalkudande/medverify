import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">MedVerify</h4>
          <p className="text-sm text-gray-400">
            MedVerify is a medical deepfake detection system that leverages AI-powered image analysis to verify the authenticity of medical images and protect healthcare systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/details" className="hover:text-white">Project Overview</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="text-sm space-y-2">
            <li>Email: support@medverify.com</li>
            <li>Location: Pune, Maharashtra</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MedVerify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
