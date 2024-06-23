"use client";
import useSidebarStore from "@/store/store";
import React from "react";
import MaleIcon from "../icons/male-icon";
import FemaleIcon from "../icons/female-icon";
import { ChatInfo } from "@/types/types";

export default function ChatCard({ chat }: { chat: ChatInfo }) {
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <div className="flex h-full overflow-hidden">
      <button
        className={`relative h-[68px] bg-gray-600 bg-opacity-10 text-gray-400 hover:text-gray-300 font-semibold rounded-lg shadow-lg hover:bg-gray-500 hover:bg-opacity-10 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105 w-full mx-2 flex items-center`}
      >
        <div
          className={`absolute w-14 left-0 top-0 h-full flex justify-center items-center`}
        >
          {chat.agent.gender === "male" ? (
            <MaleIcon color={chat.agent.color} />
          ) : (
            <FemaleIcon color={chat.agent.color} />
          )}
        </div>
        <div
          className={`flex-grow flex flex-col justify-center transition-opacity duration-500 overflow-hidden whitespace-nowrap text-ellipsis ${
            isOpen ? "pl-16 opacity-100" : "opacity-0"
          } `}
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
