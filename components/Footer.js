import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-gray-900 text-white py-8 px-4 w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-4">
        {/* Divider line */}
        <div className="w-20 h-1 bg-purple-600 rounded-full mb-2 opacity-70"></div>

        {/* Brand line */}
        <p className="text-base md:text-lg font-medium text-gray-300">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-purple-400 font-semibold">Get Me A Chai</span> — All rights reserved.
        </p>

        {/* Creator line */}
        <p className="text-sm text-gray-400">
          Made with <span className="text-red-400">❤️</span> by{" "}
          <Link
            href="/"
            className="text-blue-400 font-semibold hover:underline transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saksham Sharma
          </Link>
        </p>

        {/* Optional: social links */}
        <div className="flex gap-4 mt-2">
          <Link
            href="#"
            className="text-gray-400 hover:text-yellow-300 transition duration-200 text-sm"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-yellow-300 transition duration-200 text-sm"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-yellow-300 transition duration-200 text-sm"
          >
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
