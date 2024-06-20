// src/function/fetchStockData.ts
import axios from "axios";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const ALPACA_API_KEY = process.env.ALPACA_API_KEY;
const ALPACA_SECRET_KEY = process.env.ALPACA_SECRET_KEY;
const BASE_URL = "https://paper-api.alpaca.markets"; // Use 'https://api.alpaca.markets' for live trading

export async function fetchStockData(symbol: string) {
  const endpoint = `/v2/assets/${symbol}`;

  try {
    const response = await axios.get(BASE_URL + endpoint, {
      headers: {
        "APCA-API-KEY-ID": ALPACA_API_KEY,
        "APCA-API-SECRET-KEY": ALPACA_SECRET_KEY,
      },
    });
    console.log("asset: ", response.data);
    return response.data;
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || error.message || error;
    console.error("Error fetching stock data:", errorMessage);
    throw new Error(errorMessage); // Ensure the error is rethrown with the correct message
  }
}
