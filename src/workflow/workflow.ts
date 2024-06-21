// src/workflow/workflow.ts
import { fetchStockData } from "../functions/fetchStockData";

export async function runWorkflow(symbol: string) {
  try {
    const stockMetrics = await fetchStockData(symbol);
    if (!stockMetrics) {
      throw new Error("No stock metrics returned.");
    }
    console.log("stockMetrics: ", stockMetrics);
    return stockMetrics;
  } catch (error: any) {
    console.error(`Error running workflow: ${error.message}`);
    throw new Error(error.message);
  }
}
