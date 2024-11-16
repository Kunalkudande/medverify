import { Link } from 'react-router-dom';
import logo from '../images/logo.webp'; // Import the logo image

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo and title section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="MedVerify Logo" className="h-10" />
        <h1 className="text-2xl font-bold">MedVerify</h1>
      </div>

      {/* Navigation links */}
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/samples" className="hover:underline">Samples</Link>
        <Link to="/details" className="hover:underline">Details</Link>
      </div>
    </nav>
  );
}

export default Navbar;
