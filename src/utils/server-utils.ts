"use server";
import dotenv from "dotenv";
import { AlpacaConfig } from "@/types/types";

// Load environment variables from .env file
dotenv.config();

export async function getAlpacaConfig(): Promise<AlpacaConfig> {
  // Ensure environment variables are defined
  const alpacaConfig: AlpacaConfig = {
    ALPACA_API_KEY: process.env.ALPACA_API_KEY || throwError("ALPACA_API_KEY"),
    ALPACA_SECRET_KEY:
      process.env.ALPACA_SECRET_KEY || throwError("ALPACA_SECRET_KEY"),
    ALPACA_PAPER_API_KEY:
      process.env.ALPACA_PAPER_API_KEY || throwError("ALPACA_PAPER_API_KEY"),
    ALPACA_PAPER_SECRET_KEY:
      process.env.ALPACA_PAPER_SECRET_KEY ||
      throwError("ALPACA_PAPER_SECRET_KEY"),
  };

  // Return a Promise that resolves with the configuration object
  return Promise.resolve(alpacaConfig);
}

function throwError(variable: string): never {
  throw new Error(`Environment variable ${variable} is not defined`);
}
