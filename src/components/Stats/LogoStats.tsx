import React from "react";
import {
  ArrowDownTrayIcon,
  UserIcon,
  BellAlertIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/solid";

const LogoStats: React.FC = () => {
  return (
    <>
      <section className="bg-white">
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <ArrowDownTrayIcon className="w-8 h-8 p-1 text-blue-500 sm:w-10 sm:h-10 sm:p-2" />
              </div>
              <h6 className="text-4xl font-bold text-blue-500">819</h6>
              <p className="mb-2 font-bold text-md">Downloads</p>
              <p className="text-gray-700">
                It’s something that’s many of the wisest people in history have
                kept in mind.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <UserIcon className="w-8 h-8 p-1 text-blue-500 sm:w-10 sm:h-10 sm:p-2" />
              </div>
              <h6 className="text-4xl font-bold text-blue-500">1.3K</h6>
              <p className="mb-2 font-bold text-md">Users</p>
              <p className="text-gray-700">
                For many men, the acquisition of wealth does not end their
                troubles, it only changes them.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <BellAlertIcon className="w-8 h-8 p-1 text-blue-500 sm:w-10 sm:h-10 sm:p-2" />
              </div>
              <h6 className="text-4xl font-bold text-blue-500">91</h6>
              <p className="mb-2 font-bold text-md">Subscribers</p>
              <p className="text-gray-700">
                It's a helluva start, being able to recognize what makes you
                happy today, in this moment.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <ArchiveBoxIcon className="w-8 h-8 p-1 text-blue-500 sm:w-10 sm:h-10 sm:p-2" />
              </div>
              <h6 className="text-4xl font-bold text-blue-500">52</h6>
              <p className="mb-2 font-bold text-md">Products</p>
              <p className="text-gray-700">
                Happiness is when what you think, what you say, and what you do
                are in harmony.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoStats;
