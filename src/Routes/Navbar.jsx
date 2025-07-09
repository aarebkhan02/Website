import React, { useEffect, useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("AccessToken"));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("AccessToken"));

    const handleStorageChange = () => {
      setLoggedIn(!!localStorage.getItem("AccessToken"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  const handleDummyLogout = () => {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("RefreshToken");
    localStorage.removeItem("user");
    setLoggedIn(false);
    alert("You have been logged out (Demo only)");
    navigate("/login");
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-[#0F3D3E] to-[#14532d] fixed top-0 left-0 right-0 shadow-xl z-[9999]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 h-14 w-14 sm:h-16 sm:w-16">
              <Link to="/" className="no-underline">
                <img src="/image.WebP" alt="Logo" className="object-cover h-full w-full" />
              </Link>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-row gap-4 sm:gap-8 items-center text-white font-semibold"
                style={{ fontFamily: "Poppins, sans-serif" }}>
              <li>
                <Link to="/home" className="text-white hover:text-[#FB6D6C] drop-shadow-md transition duration-300 font-bold text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ProductPage" className="text-white hover:text-[#FB6D6C] drop-shadow-md transition duration-300 font-bold text-lg">
                  Store
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-[#FB6D6C] drop-shadow-md transition duration-300 font-bold text-lg">
                  About
                </Link>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={200}
                  className="cursor-pointer text-white hover:text-[#FB6D6C] drop-shadow-md transition duration-300 font-bold text-lg">
                  Contact
                </ScrollLink>
              </li>

              {/* Profile Icon */}
              <li>
                <button
                  onClick={() => setSidebarOpen(true)}
                  aria-label="Open Profile Menu"
                  className="text-white hover:text-[#FB6D6C] drop-shadow-md transition duration-300"
                >
                  <CgProfile className="text-3xl" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-[#0F3D3E] to-[#14532d] shadow-lg p-6 text-white flex flex-col z-[9998]
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
        ref={sidebarRef}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-playfair font-extrabold">Profile</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Profile Menu"
            className="hover:text-[#FB6D6C]"
          >
            <IoClose className="text-3xl" />
          </button>
        </div>

        <div className="flex flex-col gap-4 text-lg font-semibold font-poppins">
          
            <>
              <Link to="/account" onClick={() => setSidebarOpen(false)} className="hover:text-[#FB6D6C]">
                Account
              </Link>
              
              <Link to="/Cart" onClick={() => setSidebarOpen(false)} className="hover:text-[#FB6D6C]">
                My Cart
              </Link>
              <hr className="border-gray-400" />
              <button onClick={handleDummyLogout} className="text-left hover:text-[#FB6D6C] focus:outline-none">
                Logout
              </button>
            </>
        
            <>
              <Link to="/login" onClick={() => setSidebarOpen(false)} className="hover:text-[#FB6D6C]">
                Login
              </Link>
              <Link to="/Signup" onClick={() => setSidebarOpen(false)} className="hover:text-[#FB6D6C]">
                SignUp
              </Link>
            </>
        
        </div>
      </div>
    </>
  );
}
