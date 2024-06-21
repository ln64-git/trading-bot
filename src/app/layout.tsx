import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/particle-background";
import AgentCard from "@/components/agent-card";
import StartCard from "@/components/start-program-card";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <ParticleBackground />
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-10 backdrop-blur-lg z-20"></div>
        <div className="flex w-full h-screen absolute top-0 left-0 z-30 p-2">
          <div className="bg-gray-700 bg-opacity-10 w-1/3 h-full rounded-tl-md rounded-bl-md hidden sm:flex flex-col justify-between">
            <div className="h-full">
              <AgentCard />
            </div>
            <div>
              <StartCard />
            </div>
          </div>
          <div className="flex-1 bg-gray-800 rounded-tr-md rounded-br-md bg-opacity-10 h-full sm:flex-1 sm:h-full sm:w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
