import { AgentIcon } from "@/utils/agenbt-icon";
import { FemaleIcon } from "@/utils/female-icon";
import { MaleIcon } from "@/utils/male-icon";
import React from "react";

export default function AgentCard() {
  return (
    <div className="flex items-center justify-center h-full">
      <button className="bg-gray-700 bg-opacity-10 text-gray-400 hover:text-gray-300 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-600 hover:bg-opacity-10 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105 w-full mx-4 my-1 flex items-center">
        <div className="pr-4">
          <MaleIcon />
        </div>
        <div>
          <p className="text-left">Agent Name</p>
          <p className="text-left text-sm font-light">description</p>
        </div>
      </button>
    </div>
  );
}
