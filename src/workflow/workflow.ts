// workflow/workflow.ts
import { fetchStockData } from "../function/fetchStockData";

export async function runWorkflow(symbol: string) {
  try {
    const stockMetrics = await fetchStockData(symbol);
    console.log("stockMetrics: ", stockMetrics);
    return stockMetrics;
  } catch (error: any) {
    console.error(`Error running workflow: ${error.message || error}`);
    throw new Error(error.message || error);
  }
}
