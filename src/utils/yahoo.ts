// utils/yahoo.ts
import { DynamicStructuredTool } from "@langchain/core/tools";
import { z } from "zod";
import yahooFinance from 'yahoo-finance2';

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
      console.log(`StockDataTool invoked for symbol: ${symbol}`); // Log invocation
      const data = await yahooFinance.search(symbol);
      console.log(`Fetched data for symbol ${symbol}: ${JSON.stringify(data)}`); // Log fetched data
      return JSON.stringify(data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
      throw error;
    }
  },
});
