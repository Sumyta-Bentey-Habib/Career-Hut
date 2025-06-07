import React, { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/registration.json";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { useNavigate } from "react-router";

const Register = () => {

  useEffect(() => {
      document.title = "Register  || Career Hut";
    }, []);


  const { createUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData.email, formData.password);
      alert("User registered successfully!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="flex flex-col-reverse w-full max-w-5xl overflow-hidden bg-white shadow-2xl rounded-xl md:flex-row">
        {/* Form */}
        <div className="w-full p-10 md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Create your account
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/sign-in" className="text-blue-600 hover:underline">
              Sign in
            </a>
            <br />
            <br />
            <a href="/" class="relative px-6 py-3 font-bold text-white group">
              <span
                class="absolute inset-0 w-full h-full transition duration-300
               ease-out transform -translate-x-2 -translate-y-2
                bg-blue-600 group-hover:translate-x-0 group-hover:translate-y-0"
              ></span>
              <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span class="relative">Return Home</span>
            </a>
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="flex items-center justify-center w-full p-8 md:w-1/2 bg-blue-50">
          <Lottie animationData={animationData} loop />
        </div>
      </div>
    </div>
  );
};

export default Register;
