// utils/yahoo.ts

import { DynamicStructuredTool } from "@langchain/core/tools";
import { z } from "zod";
import yahooFinance from "yahoo-finance2";

// Define schema using Zod for input validation
const stockDataSchema = z.object({
  symbol: z.string().min(1).max(10).describe("Stock symbol to fetch data for"),
});

// Create a DynamicStructuredTool instance
export const StockDataTool = new DynamicStructuredTool({
  name: "stock_data",
  description: "Fetches stock data from Yahoo Finance",
  schema: stockDataSchema,
  func: async ({ symbol }: { symbol: string }) => {
    try {
      // Fetch stock data from Yahoo Finance API
      const data = await yahooFinance.quote(symbol);

      // Extract specific metrics from the fetched data
      const stockMetrics = {
        price: data.regularMarketPrice,
        volume: data.regularMarketVolume,
        marketCap: data.marketCap,
        dividendYield: data.dividendYield,
        eps: data.eps,
        peRatio: data.peRatio,
        revenue: data.revenue,
      };

      // Return JSON stringified response
      return JSON.stringify(stockMetrics);
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw error;
    }
  },
});
