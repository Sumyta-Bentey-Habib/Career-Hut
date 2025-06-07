import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/login.json";
import { useNavigate } from "react-router";

const SignIn = () => {
  
  useEffect(() => {
      document.title = "Sing In || Career Hut";
    }, []);

  const { singInUser, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user} =useContext(AuthContext)
  const navigate =useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    singInUser(email, password)
      .then((result) => {
        setUser(result.user);
        console.log("Login successful:", result.user);
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        alert("Login failed. " + error.message);
      });
  };
  useEffect(()=>{
    if(user){
      navigate("/")
    }
  },[user,navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-purple-100 via-white to-purple-200">
      <div className="flex flex-col-reverse w-full max-w-5xl overflow-hidden bg-white shadow-2xl rounded-xl md:flex-row">
        {/* Form */}
        <div className="w-full p-10 md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Welcome Back!
          </h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <br />
            <br />
            {/* return home btn */}
            <a
              href="/"
              class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Return Home
              </span>
              <span class="relative invisible">Return Home</span>
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
