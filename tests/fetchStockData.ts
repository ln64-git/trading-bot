// tests/fetchStockData.test.ts
import { createClient } from "@alpacahq/typescript-sdk";
import { fetchStockData } from "../src/function/fetchStockData.js";
import type { AlpacaError } from "../src/types/error.js";

// Mock the createClient function and its methods
jest.mock("@alpacahq/typescript-sdk");

const mockGetAsset = jest.fn();
(createClient as jest.Mock).mockReturnValue({
  getAsset: mockGetAsset,
});

describe("fetchStockData", () => {
  const mockAsset = {
    id: "test-id",
    class: "us_equity",
    exchange: "NASDAQ",
    symbol: "AAPL",
    status: "active",
    tradable: true,
  };

  it("should fetch stock data successfully", async () => {
    mockGetAsset.mockResolvedValue(mockAsset);

    const result = await fetchStockData("AAPL");

    expect(mockGetAsset).toHaveBeenCalledWith({ symbol_or_asset_id: "AAPL" });
    expect(result).toEqual(mockAsset);
  });

  it("should handle errors correctly", async () => {
    const mockError: AlpacaError = {
      code: 404,
      message: "Asset not found",
    };

    mockGetAsset.mockRejectedValue(new Error(JSON.stringify(mockError)));

    await expect(fetchStockData("INVALID_SYMBOL")).rejects.toThrow(
      "Error: Asset not found"
    );

    expect(mockGetAsset).toHaveBeenCalledWith({
      symbol_or_asset_id: "INVALID_SYMBOL",
    });
  });
});
