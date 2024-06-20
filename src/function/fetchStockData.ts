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
    if (!response.data) {
      throw new Error("No data found for the given symbol.");
    }
    console.log("asset: ", response.data);
    return response.data;
  } catch (error: any) {
    const errorMessage = handleAxiosError(error);
    console.error("Error fetching stock data:", errorMessage);
    throw new Error(errorMessage);
  }
}

function handleAxiosError(error: any): string {
  if (error.response) {
    // Server responded with a status code outside the range of 2xx
    if (error.response.status === 401) {
      return "Unauthorized access. Check your API keys.";
    } else if (error.response.status === 404) {
      return "Asset not found.";
    } else if (error.response.data && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.response.statusText || "An error occurred.";
    }
  } else if (error.request) {
    // No response received from the server
    return "No response received from the server.";
  } else {
    // Other errors
    return error.message;
  }
}
