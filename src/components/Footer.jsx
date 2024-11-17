import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {/* Product Information */}
        <div>
          <h4 className="font-semibold text-white text-xl mb-4">Our Solution</h4>
          <ul className="space-y-3">
            <li>Deepfake Detection Technology</li>
            <li>Real-time Threat Alerts</li>
            <li>AI-powered Image Analysis</li>
            <li>Scalable for Healthcare Systems</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-white text-xl mb-4">Resources</h4>
          <ul className="space-y-3">
            <li>Case Studies</li>
            <li>Research Papers</li>
            <li>Report</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Learn More */}
        <div>
          <h4 className="font-semibold text-white text-xl mb-4">Learn More</h4>
          <ul className="space-y-3">
            <li>Webinars</li>
            <li>Demos</li>
            <li>Guides</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white text-xl mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li>Email: support@medverify.com</li>
            <li>Phone: +1 (800) 555-1234</li>
            <li>Address: Pune, Maharashtra</li>
          </ul>
        </div>

        {/* About Company */}
        <div>
          <h4 className="font-semibold text-white text-xl mb-4">About</h4>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Terms & Privacy</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Deepfake Detect Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
