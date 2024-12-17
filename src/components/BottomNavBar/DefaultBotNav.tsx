import React from "react";
import {
  HomeIcon,
  WalletIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const DefaultBotNav: React.FC = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-blue-50 group"
          >
            <HomeIcon className="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600" />
            <span className="text-sm text-gray-500 group-hover:text-blue-600">
              Home
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-blue-50 group"
          >
            <WalletIcon className="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600" />
            <span className="text-sm text-gray-500 group-hover:text-blue-600">
              Wallet
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-blue-50 group"
          >
            <Cog6ToothIcon className="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600" />
            <span className="text-sm text-gray-500 group-hover:text-blue-600">
              Settings
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-blue-50 group"
          >
            <UserCircleIcon className="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600" />
            <span className="text-sm text-gray-500 group-hover:text-blue-600">
              Profile
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default DefaultBotNav;
