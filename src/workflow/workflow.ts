// src/workflow/workflow.ts
import { fetchStockData } from "../functions/fetchStockData";

export async function runWorkflow(symbol: string) {
  const stockMetrics = await fetchStockData(symbol);
  return stockMetrics;
}
