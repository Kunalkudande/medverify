import React from "react";
import logo from '../images/logo.webp';

const Navbar = ({ scrollToSection, refs }) => {
  return (
    <nav className="sticky top-0 flex items-center justify-between p-4 shadow-md bg-white z-50">
      <div className="flex items-center">
        <img src={logo} alt="Resemble AI" className="h-8 mr-2" />
        <span className="text-xl font-bold text-green-600">MEDIFY</span>
      </div>

      <div className="flex space-x-6 text-gray-700">
        <button onClick={() => scrollToSection(refs.mainRef)} className="focus:outline-none hover:text-black">
          Home
        </button>
        <button onClick={() => scrollToSection(refs.detailsRef)} className="focus:outline-none hover:text-black">
          Details
        </button>
        <button onClick={() => scrollToSection(refs.samplesRef)} className="focus:outline-none hover:text-black">
          Samples
        </button>
        <button onClick={() => scrollToSection(refs.apiRef)} className="focus:outline-none hover:text-black">
          API
        </button>
        <button className="focus:outline-none hover:text-black">Sign In</button>
      </div>

      <div>
        <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
