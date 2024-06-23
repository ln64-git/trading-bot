import axios from "axios";
import { getAlpacaConfig } from "@/utils/server-utils";
import { AlpacaConfig } from "@/types/types";

const LIVE_BASE_URL = "https://api.alpaca.markets";
const PAPER_BASE_URL = "https://paper-api.alpaca.markets";

export async function fetchStockData(symbol: string) {
  const alpacaConfig: AlpacaConfig = await getAlpacaConfig();
  const usePaper = true;
  try {
    const BASE_URL = usePaper ? PAPER_BASE_URL : LIVE_BASE_URL;
    const API_KEY = usePaper
      ? alpacaConfig.ALPACA_PAPER_API_KEY
      : alpacaConfig.ALPACA_API_KEY;
    const SECRET_KEY = usePaper
      ? alpacaConfig.ALPACA_PAPER_SECRET_KEY
      : alpacaConfig.ALPACA_SECRET_KEY;

    const { data } = await axios.get(`${BASE_URL}/v2/assets/${symbol}`, {
      headers: {
        "APCA-API-KEY-ID": API_KEY,
        "APCA-API-SECRET-KEY": SECRET_KEY,
      },
    });

    if (!data) throw new Error("No data found for the given symbol.");
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || "Unknown error";
      throw new Error(errorMessage);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
