import React from "react";
import useSidebarStore from "@/store/store";
import PlayIcon from "../icons/play-icon";
import CogIcon from "@/icons/cog-icon";
import { runWorkflow } from "@/langchain/workflow/analysis-workflow";
import { wipeDatabase } from "@/server/utils/wipeDatabase";

export default function StartCard() {
  const isOpen = useSidebarStore((state) => state.isOpen);

  const handleClick = async () => {
    try {
      await runWorkflow("AAPL");
      console.log("Workflow initalized.");
    } catch (error) {
      console.error("Error running analysis workflow:", error);
    }
  };

  const handleCog = async () => {
    try {
      await wipeDatabase();
      console.log("Database wiped.");
    } catch (error) {
      console.error("Error running analysis workflow:", error);
    }
  };
  return (
    <div className="flex mx-2 items-center justify-center h-full">
      <div className="flex my-2 items-center w-full space-x-2 relative">
        <button
          onClick={handleClick}
          className="flex-1 bg-green-700 bg-opacity-10 text-green-400 hover:text-green-300 font-semibold py-3 px-2 rounded-lg shadow-lg hover:bg-green-600 hover:bg-opacity-10 transition ease-in-out duration-300 transform hover:scale-105 relative"
        >
          <p
            className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          >
            Start
          </p>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
          >
            <PlayIcon />
          </div>
        </button>
        {isOpen && (
          <button
            onClick={handleCog}
            className="w-12 h-12 p-3 bg-gray-600 bg-opacity-10 text-gray-400 hover:text-gray-300 rounded-lg shadow-lg hover:bg-gray-600 hover:bg-opacity-10 transition ease-in-out duration-300 transform hover:scale-105 flex items-center justify-center">
            <CogIcon />
          </button>
        )}
      </div>
    </div>
  );
}
