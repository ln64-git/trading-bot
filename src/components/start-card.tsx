import CogIcon from "@/utils/cog-icon";
import React from "react";

export default function StartCard() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex items-center w-full m-4 space-x-2">
        <button className="flex-1 bg-green-700 bg-opacity-10 text-green-400 hover:text-green-300 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 hover:bg-opacity-10 transition ease-in-out duration-300 transform hover:scale-105">
          Start
        </button>
        <button className="p-3 bg-gray-700 bg-opacity-10 text-gray-400 hover:text-gray-300 rounded-lg shadow-lg hover:bg-gray-600 hover:bg-opacity-10 transition ease-in-out duration-300 transform hover:scale-105">
          <CogIcon />
        </button>
      </div>
    </div>
  );
}
