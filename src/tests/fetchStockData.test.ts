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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch asset data successfully from live market", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: assetData });

    const result = await fetchStockData(symbol);

    expect(result).toEqual(assetData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://api.alpaca.markets/v2/assets/${symbol}`,
      {
        headers: {
          "APCA-API-KEY-ID": process.env.ALPACA_API_KEY,
          "APCA-API-SECRET-KEY": process.env.ALPACA_SECRET_KEY,
        },
      }
    );
  });

  it("should fetch asset data successfully from paper market", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: assetData });

    const result = await fetchStockData(symbol, true);

    expect(result).toEqual(assetData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://paper-api.alpaca.markets/v2/assets/${symbol}`,
      {
        headers: {
          "APCA-API-KEY-ID": process.env.ALPACA_PAPER_API_KEY,
          "APCA-API-SECRET-KEY": process.env.ALPACA_PAPER_SECRET_KEY,
        },
      }
    );
  });
});
