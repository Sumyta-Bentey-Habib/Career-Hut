import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const NavBar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/company">Company</NavLink>
      </li>
      {
        user && 
    <>
        <li>
        <NavLink to="/myApplication">My Application</NavLink>
        </li>
    </>
        
      }
    </>
  );

  return (
    <div className="sticky top-0 z-50 shadow-sm navbar bg-base-100 rounded-3xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="z-10 p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl btn btn-ghost">Career Hut</a>
      </div>

      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{links}</ul>
      </div>

      <div className="flex items-center gap-2 navbar-end">
        {user ? (
          <>
            <div
              className="tooltip tooltip-left"
              data-tip={user.displayName || user.email}
            >
              <div className="flex items-center justify-center w-10 h-10 font-semibold text-purple-800 bg-purple-200 rounded-full cursor-default">
                {user.displayName?.charAt(0).toUpperCase() ||
                  user.email?.charAt(0).toUpperCase()}
              </div>
            </div>
            <button onClick={handleSignOut} className="btn btn-outline btn-sm">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/sign-in" className="btn btn-sm">
              Sign In
            </NavLink>
            <NavLink to="/register" className="btn btn-sm">
              Register
            </NavLink>
          </>
        )}
        <button onClick={toggleTheme} className="btn btn-ghost">
          {theme === "light" ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1A.75.75 0 0110 3.25zm4.47 2.03a.75.75 0 011.06 1.06l-.71.7a.75.75 0 01-1.06-1.06l.71-.7zM16.75 10a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zm-2.53 4.72a.75.75 0 10-1.06 1.06l.7.71a.75.75 0 101.06-1.06l-.7-.71zM10 15.75a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zm-4.72-1.53a.75.75 0 10-1.06 1.06l.71.7a.75.75 0 001.06-1.06l-.7-.7zM4.25 10a.75.75 0 01.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01-.75.75zm2.53-4.72a.75.75 0 10-1.06-1.06l-.71.7a.75.75 0 001.06 1.06l.71-.7zM10 6a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 116.707 2.707a8.003 8.003 0 0010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
