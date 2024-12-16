import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/react.svg";

const TransparentNav: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-transparent backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="vite logo" />
            <span className="self-center text-2xl font-semibold text-black whitespace-nowrap">
              TransparentNav
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <XMarkIcon className="w-5 h-5 text-black" aria-hidden="true" />
            ) : (
              <Bars3Icon className="w-5 h-5 text-black" aria-hidden="true" />
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`transition-all duration-1000 ease-in-out ${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } md:block md:max-h-none md:opacity-100 w-full md:w-auto`}
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-300/70 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black hover:text-blue-400 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:text-blue-400 md:p-0"
                >
                  Dropdown{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-50 font-normal bg-gray-800 text-white divide-y divide-gray-600 rounded-lg shadow w-50 mt-2">
                    <ul
                      className="py-2 text-sm"
                      aria-labelledby="dropdownNavbarLink"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-700"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-700"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-700"
                        >
                          Earnings
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black hover:text-blue-400 md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black hover:text-blue-400 md:p-0"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black hover:text-blue-400 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TransparentNav;
