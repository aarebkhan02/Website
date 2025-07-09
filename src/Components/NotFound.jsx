import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-12">
      
      {/* Left Content */}
      <div className="text-center lg:text-left max-w-lg">
        <h1
          className="text-7xl sm:text-8xl font-extrabold text-[#0F3D3E] leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-3 text-base leading-relaxed">
          The page you’re looking for might have been moved, deleted, or never existed. Please check the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 bg-[#0F3D3E] hover:bg-[#0c3132] text-white px-6 py-3 rounded-full text-lg font-medium transition-all shadow-md"
        >
          Back to Home
        </Link>
      </div>

      {/* Right Image */}
      <div className="max-w-lg w-full flex justify-center mb-12 lg:mb-0">
        <img
          src="/404-illustration.WebP" // or .svg
          alt="404 Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
    </div>
  );
}
