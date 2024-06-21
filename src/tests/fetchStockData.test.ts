// tests/fetchStockData.test.ts
import { fetchStockData } from "@/functions/fetchStockData";
import axios from "axios";
import dotenv from "dotenv";

// Mocking axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Load environment variables from .env file
dotenv.config({ path: "./.env" });

describe("fetchStockData", () => {
  const symbol = "AAPL";
  const assetData = {
    id: "test_id",
    class: "us_equity",
    exchange: "NASDAQ",
    symbol: "AAPL",
    name: "Apple Inc.",
    status: "active",
    tradable: true,
  };
  const errorMessage = "Asset not found";

  beforeEach(() => {
    jest.clearAllMocks();

    // Ensure environment variables are set
    process.env.ALPACA_API_KEY = "AKXXEWUYXVP576ADYRS9";
    process.env.ALPACA_SECRET_KEY = "Si13vhr9f7layB83UwmG684RKeOGfgkHogenwfZg";
  });

  it("should fetch asset data successfully", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: assetData });

    const result = await fetchStockData(symbol);

    expect(result).toEqual(assetData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://paper-api.alpaca.markets/v2/assets/${symbol}`,
      {
        headers: {
          "APCA-API-KEY-ID": process.env.ALPACA_API_KEY,
          "APCA-API-SECRET-KEY": process.env.ALPACA_SECRET_KEY,
        },
      }
    );
  });

  it("should handle errors correctly", async () => {
    mockedAxios.get.mockRejectedValueOnce({
      response: {
        data: { message: errorMessage },
      },
    });

    await expect(fetchStockData(symbol)).rejects.toThrow(errorMessage);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://paper-api.alpaca.markets/v2/assets/${symbol}`,
      {
        headers: {
          "APCA-API-KEY-ID": process.env.ALPACA_API_KEY,
          "APCA-API-SECRET-KEY": process.env.ALPACA_SECRET_KEY,
        },
      }
    );
  });
});
