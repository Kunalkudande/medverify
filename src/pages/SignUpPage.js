import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext"; // Import the custom hook

const SignupPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();  // Access login function from context
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    
    // Simulate successful signup
    login({ name: formData.name, email: formData.email });  // Set user data in context
    alert("Signup successful!");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-3 rounded-md font-semibold hover:bg-yellow-500 transition-all duration-300"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
