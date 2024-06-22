"use client";
import useSidebarStore from "@/store/store";
import { MaleIcon } from "@/components/icons/male-icon";
import { FemaleIcon } from "@/components/icons/female-icon";
import React, { useState, useEffect } from "react";

export default function AgentCard() {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const [isMale, setIsMale] = useState(true);

  useEffect(() => {
    // Randomly set isMale to true or false
    setIsMale(Math.random() > 0.5);
  }, []);

  return (
    <div className="flex h-full overflow-hidden">
      <button
        className={`relative h-[68px] bg-gray-700 bg-opacity-10 text-gray-400 hover:text-gray-300 font-semibold rounded-lg shadow-lg hover:bg-gray-600 hover:bg-opacity-10 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105 w-full mx-2 flex items-center`}
      >
        <div
          className={`absolute left-0 top-0 h-full flex justify-center items-center ${
            isOpen ? "w-14" : "w-14"
          }`}
        >
          {isMale ? <MaleIcon /> : <FemaleIcon />}
        </div>
        <div
          className={`flex-grow flex flex-col justify-center transition-opacity duration-500 ${
            isOpen ? "pl-16 opacity-100" : "opacity-0"
          } overflow-hidden whitespace-nowrap text-ellipsis`}
        >
          {isOpen && (
            <>
              <p className="text-left whitespace-nowrap overflow-hidden text-ellipsis">
                Agent Name
              </p>
              <p className="text-left text-sm font-light overflow-hidden text-ellipsis">
                description
              </p>
            </>
          )}
        </div>
      </button>
    </div>
  );
}
