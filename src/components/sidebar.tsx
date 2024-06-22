"use client";
import React from "react";
import AgentCard from "@/components/agent-card";
import StartCard from "@/components/start-card";
import StatusCard from "@/components/status-card";
import useSidebarStore from "@/store/store";

const Sidebar: React.FC = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <div
      className={`bg-gray-700 bg-opacity-10 ${
        isOpen ? "w-[300px]" : "w-[72px]"
      } h-full rounded-tl-md rounded-bl-md hidden sm:flex flex-col justify-between transition-width duration-300 ease-in-out`}
    >
      <div className="flex flex-col space-y-1 overflow-y-auto mt-4">
        <StatusCard />
        <AgentCard />
        <AgentCard />
      </div>
      <div>
        <StartCard />
      </div>
    </div>
  );
};

export default Sidebar;
