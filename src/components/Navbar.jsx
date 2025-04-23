import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.webp"
import { useAuth } from "../components/AuthContext"; // Import the AuthContext

const Navbar = ({ scrollToSection, refs }) => {
  const { user, logout } = useAuth(); // Get user state and logout function

  const handleLogoClick = () => {
    window.location.reload(); // Refresh the page when the logo or website name is clicked
  };

  return (
    <nav className="sticky top-0 flex items-center justify-between p-2 shadow-md bg-white z-50">
      {/* Logo and Website Name */}
      <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
        <img src={logo} alt="MedVerify Logo" className="h-14 w-14 rounded-full mr-4 shadow-md transform transition-transform hover:scale-110" />
        <span className="text-2xl font-bold text-green-600 tracking-wide">MEDVERIFY</span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-8 text-gray-700 font-medium">
        <button
          onClick={() => scrollToSection(refs.mainRef)}
          className="focus:outline-none hover:text-green-600 transition-all duration-300"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection(refs.samplesRef)}
          className="focus:outline-none hover:text-green-600 transition-all duration-300"
        >
          Samples
        </button>
        <button
          onClick={() => scrollToSection(refs.apiRef)}
          className="focus:outline-none hover:text-green-600 transition-all duration-300"
        >
          API
        </button>
        <button
          onClick={() => scrollToSection(refs.detailsRef)}
          className="focus:outline-none hover:text-green-600 transition-all duration-300"
        >
          Details
        </button>
      </div>

      {/* SignUp/SignIn or Username & Logout */}
      <div className="flex gap-4">
        {!user ? (
          <>
            <Link to="/signup">
              <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500">
                SignUp
              </button>
            </Link>
          </>
        ) : (
          <>
            <span className="text-lg font-semibold text-green-600">{user.name}</span>
            <button
              onClick={() => logout()}
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
