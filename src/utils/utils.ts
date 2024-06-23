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

export const generateShades = (baseColor: string) => {
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
