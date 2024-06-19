const axios = require("axios");
const { fetchStockData } = require("../src/function/fetchStockData");

jest.mock("axios");

const mockedAxios = axios;

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
  });

  it("should fetch asset data successfully", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: assetData });

    const result = await fetchStockData(symbol);

    expect(result).toEqual(assetData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://paper-api.alpaca.markets/v2/assets/${symbol}`,
      {
        headers: {
          "APCA-API-KEY-ID": process.env.ALPACA_API_KEY || "YOUR_API_KEY_ID",
          "APCA-API-SECRET-KEY":
            process.env.ALPACA_SECRET_KEY || "YOUR_API_SECRET_KEY",
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
          "APCA-API-KEY-ID": process.env.ALPACA_API_KEY || "YOUR_API_KEY_ID",
          "APCA-API-SECRET-KEY":
            process.env.ALPACA_SECRET_KEY || "YOUR_API_SECRET_KEY",
        },
      }
    );
  });
});
