"use client";
import React from "react";
import Hamburger from "hamburger-react";
import useSidebarStore from "@/store/store";

const StatusCard: React.FC = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <div className="flex  items-center justify-center h-full">
      <div className="text-gray-400 font-semibold py-2 px-2 rounded-lg w-full mx-4 my-1 flex items-center">
        <button
          className="ml-1 bg-gray-700 bg-opacity-10 rounded-lg mr-6 shadow-lg hover:bg-gray-600 hover:bg-opacity-10 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105"
          onClick={toggleSidebar}
        >
          <Hamburger size={16} />
        </button>
        {isOpen && (
          <div className="transition-opacity duration-500 opacity-100">
            <p className="text-left">Ready</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusCard;
