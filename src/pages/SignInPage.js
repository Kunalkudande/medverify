import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext"; // Import the custom hook

const SigninPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();  // Access login function from context
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://med-verify-backend-database.vercel.app/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (res.ok) {
      const data = await res.json();
      login(data.user); // Save user in context
      localStorage.setItem("token", data.token); 
      alert("Signin successful!");
      navigate("/");
    } else {
      const err = await res.json();
      alert(err.message || "Signin failed");
    }
  } catch (err) {
    alert("Error during signin.");
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={credentials.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-3 rounded-md font-semibold hover:bg-yellow-500 transition-all duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SigninPage;
