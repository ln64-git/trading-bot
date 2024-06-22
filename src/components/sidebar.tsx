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
        isOpen ? "w-[300px]" : "w-[76px]"
      } h-full rounded-tl-md rounded-bl-md hidden sm:flex flex-col transition-width duration-300 ease-in-out`}
    >
      <div>
        <StatusCard />
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="space-y-2">
          <AgentCard />
        </div>
      </div>
      <div>
        <StartCard />
      </div>
    </div>
  );
};

export default Sidebar;
