import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/login.json";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-purple-100 via-white to-purple-200">
      <div className="flex flex-col-reverse w-full max-w-5xl overflow-hidden bg-white shadow-2xl rounded-xl md:flex-row">
        
        {/* Form */}
        <div className="w-full p-10 md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Welcome Back!</h2>
          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition bg-purple-600 rounded-md hover:bg-purple-700"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a href="/register" className="text-purple-600 hover:underline">
              Register now
            </a>
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="flex items-center justify-center w-full p-8 md:w-1/2 bg-purple-50">
          <Lottie animationData={animationData} loop />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
