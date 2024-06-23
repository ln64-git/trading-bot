// Sidebar.tsx
"use client";
import React, { useEffect, useState } from "react";
import useSidebarStore from "@/store/store";
import StatusCard from "./status-card";
import AgentCard from "./agent-card";
import StartCard from "./start-card";
import { colors, generateRandomGender } from "@/utils/utils";

interface Agent {
  color: string;
  gender: "male" | "female";
}

const DEFAULT_AGENT: Agent = {
  color: "#fff",
  gender: "male",
};

export default function Sidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const [agents, setAgents] = useState<Agent[]>(Array(8).fill(DEFAULT_AGENT));

  useEffect(() => {
    const generatedAgents: Agent[] = Array.from({ length: 4 }).map(
      (_, index) => ({
        color: colors[index % colors.length],
        gender: generateRandomGender(),
      })
    );
    setAgents(generatedAgents);
  }, []);

  return (
    <div
      className={`bg-gray-400 bg-opacity-10 ${
        isOpen ? "w-[300px]" : "w-[76px]"
      } h-full rounded-tl-md rounded-bl-md hidden sm:flex flex-col transition-width duration-300 ease-in-out`}
    >
      <div>
        <StatusCard />
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="space-y-2">
          {agents.map((agent, index) => (
            <AgentCard key={index} agent={agent} />
          ))}
        </div>
      </div>
      <div>
        <StartCard />
      </div>
    </div>
  );
}
