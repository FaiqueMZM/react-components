import React from "react";
import logo from "../../assets/react.svg";

const SimpleBotNav: React.FC = () => {
  return (
    <>
      <footer className="bg-white shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="react logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                SimpleFooter
              </span>
            </a>
            <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200  lg:my-8" />
          <span className="block text-sm text-gray-500 text-center">
            © 2024{" "}
            <a href="/" className="hover:underline">
              React™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default SimpleBotNav;
