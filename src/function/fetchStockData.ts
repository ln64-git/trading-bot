import axios from "axios";

const ALPACA_API_KEY = process.env.ALPACA_API_KEY || "YOUR_API_KEY_ID";
const ALPACA_SECRET_KEY =
  process.env.ALPACA_SECRET_KEY || "YOUR_API_SECRET_KEY";
const BASE_URL = "https://paper-api.alpaca.markets"; // Use 'https://api.alpaca.markets' for live trading

async function fetchStockData(symbol: string) {
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
    const parsedError = error.response ? error.response.data : error.message;
    console.error(
      "Error fetching stock data:",
      parsedError.message || parsedError
    );
    throw new Error(parsedError.message || parsedError); // Ensure the error is rethrown
  }
}

module.exports = { fetchStockData };
