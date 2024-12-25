import React from "react";
import logo from "../../assets/react.svg";

const OneLineFooter: React.FC = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <img src={logo} className="h-8" alt="react logo" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                OneLineFooter
              </span>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default OneLineFooter;
