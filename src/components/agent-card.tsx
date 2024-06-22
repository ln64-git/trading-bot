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
    <div className="flex items-center justify-center h-full overflow-hidden">
      <button className="h-[68px] bg-gray-700 bg-opacity-10 text-gray-400 hover:text-gray-300 font-semibold px-4 rounded-lg shadow-lg hover:bg-gray-600 hover:bg-opacity-10 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105 w-full mx-2 my-1 flex items-center overflow-hidden">
        <div className="flex justify-center items-center pr-4 w-10 h-10">
          {isMale ? <MaleIcon /> : <FemaleIcon />}
        </div>
        <div
          className={`flex flex-col justify-center transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
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
