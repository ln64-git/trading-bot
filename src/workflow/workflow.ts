import { fetchStockData } from "../functions/fetchStockData";

export async function runWorkflow(symbol: string) {
  const stockMetrics = await fetchStockData(symbol);
  console.log("stockMetrics: ", stockMetrics);
  return stockMetrics;
}
