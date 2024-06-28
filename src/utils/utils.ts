// import { ChatInfo } from "@/types/types";
import { getChatEntries } from "@/mongo/service/getChatEntries";
import chroma from "chroma-js";

export const colors = [
  //   "#fe7f08c0",
  "#fe7d08",
  "#08fe7f",
  "#08bcfe",
  "#9c08fe",
  "#feca08",
  "#08feea",
  "#fe08c1",
  "#d908fe",
];

export const generateGradient = (baseColor: string) => {
  try {
    const scale = chroma.scale([baseColor, "#ffffff"]).colors(5);
    return scale;
  } catch (error) {
    console.error(`Error generating shades for color ${baseColor}:`, error);
    return [baseColor];
  }
};

export const generateRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const generateRandomGender = (): "male" | "female" => {
  return Math.random() > 0.5 ? "male" : "female";
};

export async function getHighestAgentIndex(): Promise<number> {
  const entries = await getChatEntries();
  let highestIndex = -1;
  for (const entry of entries) {
    if (entry.sender !== undefined && entry.sender > highestIndex) {
      highestIndex = entry.sender;
    }
    if (entry.receiver !== undefined && entry.receiver > highestIndex) {
      highestIndex = entry.receiver;
    }
  }
  return highestIndex;
}

// export const generatedChatList: ChatInfo[] = Array.from({ length: 4 }).map(
//   (_, index) => ({
//     agent: {
//       color: colors[index % colors.length],
//       gender: generateRandomGender(),
//     },
//     chatHistory: [],
//   })
// );
