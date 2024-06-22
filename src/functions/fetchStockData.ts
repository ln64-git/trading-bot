// src/functions/fetchStockData.ts
import axios, { isAxiosError } from "axios";
import dotenv from "dotenv";

dotenv.config();

const { ALPACA_API_KEY, ALPACA_SECRET_KEY } = process.env;
const BASE_URL = "https://paper-api.alpaca.markets"; // Use 'https://api.alpaca.markets' for live trading

export async function fetchStockData(symbol: string) {
  try {
    const { data } = await axios.get(`${BASE_URL}/v2/assets/${symbol}`, {
      headers: {
        "APCA-API-KEY-ID": ALPACA_API_KEY,
        "APCA-API-SECRET-KEY": ALPACA_SECRET_KEY,
      },
    });

    if (!data) throw new Error("No data found for the given symbol.");
    return data;
  } catch (error: any) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
}
