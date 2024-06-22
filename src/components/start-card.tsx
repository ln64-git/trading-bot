import useSidebarStore from "@/store/store";
import CogIcon from "@/components/icons/cog-icon";
import React from "react";
import PlayIcon from "./icons/play-icon";

export default function StartCard() {
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex items-center w-full m-4 space-x-2">
        <button className="flex-1 bg-green-700 bg-opacity-10 text-green-400 hover:text-green-300 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 hover:bg-opacity-10 transition ease-in-out duration-300 transform hover:scale-105">
          {isOpen ? (
            <p>Start</p>
          ) : (
            <div className=" w-4 h-6 flex items-center justify-center">
              <PlayIcon />
            </div>
          )}
        </button>
        {isOpen && (
          <button className="w-12 h-12 p-3 bg-gray-700 bg-opacity-10 text-gray-400 hover:text-gray-300 rounded-lg shadow-lg hover:bg-gray-600 hover:bg-opacity-10 transition ease-in-out duration-300 transform hover:scale-105 flex items-center justify-center">
            <CogIcon />
          </button>
        )}
      </div>
    </div>
  );
}
