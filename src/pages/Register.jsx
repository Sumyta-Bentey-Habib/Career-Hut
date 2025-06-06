import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/registration.json";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="flex flex-col-reverse w-full max-w-5xl overflow-hidden bg-white shadow-2xl rounded-xl md:flex-row">
        
        {/* Form */}
        <div className="w-full p-10 md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Create your account</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/sign-in" className="text-blue-600 hover:underline">
              Sign in
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
