import { AgentExecutor } from "langchain/agents";
import { createStockDataAgent } from "./stockDataAgent";
import { createHistoryAnalysisAgent } from "./historyAnalysis";
import { createMarketStrategyAgent } from "./marketStrategyAgent";
import { createIndicatorAnalysisAgent } from "./indicatorAnalysis";
import { createConfidenceCalculationAgent } from "./confidenceCalculationAgent";

export async function runWorkflow(symbol: string) {
  try {
    const stockDataAgent = await createStockDataAgent();
    const historyAnalysisAgent = await createHistoryAnalysisAgent();
    const marketStrategyAgent = await createMarketStrategyAgent();
    const indicatorAnalysisAgent = await createIndicatorAnalysisAgent();
    const confidenceCalculationAgent = await createConfidenceCalculationAgent();
    // Check if all agents were created successfully
    if (
      !stockDataAgent ||
      !historyAnalysisAgent ||
      !marketStrategyAgent ||
      !indicatorAnalysisAgent ||
      !confidenceCalculationAgent
    ) {
      throw new Error("Failed to create one or more agents.");
    }

    // Function to fetch stock data
    const getStockData = async () => {
      const stockDataExecutor = new AgentExecutor({
        agent: stockDataAgent,
        tools: [],
        maxIterations: 5,
      });

      console.log(
        "Invoking StockDataAgent with input:",
        `Fetch stock data for ${symbol}`
      );

      // Invoke StockDataAgent to fetch stock data for the specified symbol
      const result = await stockDataExecutor.invoke({
        input: {
          input: `Fetch stock data for ${symbol}`,
          agent_scratchpad: "",
        },
      });

      return result;
    };

    // Fetch stock data
    const stockDataResult = await getStockData();

    console.log(stockDataResult.output);

    const getHistoryAnalysis = async () => {
      const historyAnalysisExecutor = new AgentExecutor({
        agent: historyAnalysisAgent,
        tools: [],
        maxIterations: 5,
      });
      console.log(
        "Invoking HistoryAnalysisAgent with input:",
        `Analyze historical data for ${symbol}`
      );
      const result = await historyAnalysisExecutor.invoke({
        input: {
          input: `Analyze historical data for ${symbol}`,
          agent_scratchpad: "",
        },
      });
      // console.log('HistoryAnalysisAgent result:', result);
      return result;
    };

    const getMarketStrategyAnalysis = async (data: string) => {
      const marketStrategyExecutor = new AgentExecutor({
        agent: marketStrategyAgent,
        tools: [],
        maxIterations: 5,
      });
      console.log(
        "Invoking MarketStrategyAgent with input:",
        `Analyze market strategies using data: ${data}`
      );
      const result = await marketStrategyExecutor.invoke({
        input: {
          input: `Analyze market strategies using data: ${data}`,
          agent_scratchpad: "",
        },
      });
      // console.log('MarketStrategyAgent result:', result);
      return result;
    };

    const getIndicatorAnalysis = async (data: string) => {
      const indicatorAnalysisExecutor = new AgentExecutor({
        agent: indicatorAnalysisAgent,
        tools: [],
        maxIterations: 5,
      });
      console.log(
        "Invoking IndicatorAnalysisAgent with input:",
        `Analyze technical indicators using data: ${data}`
      );
      const result = await indicatorAnalysisExecutor.invoke({
        input: {
          input: `Analyze technical indicators using data: ${data}`,
          agent_scratchpad: "",
        },
      });
      // console.log('IndicatorAnalysisAgent result:', result);
      return result;
    };

    const calculateConfidence = async (combinedResult: any) => {
      const confidenceCalculationExecutor = new AgentExecutor({
        agent: confidenceCalculationAgent,
        tools: [],
        maxIterations: 5,
      });

      const confidenceInput = {
        stockData: combinedResult.stockData.output, // Adjust here to match the structure of your output
        historyAnalysis: combinedResult.historyAnalysis.output,
        marketStrategies: combinedResult.marketStrategies.output,
        technicalIndicators: combinedResult.technicalIndicators.output,
        agent_scratchpad: "",
      };

      console.log(
        "Invoking ConfidenceCalculationAgent with input:",
        confidenceInput
      );
      const result = await confidenceCalculationExecutor.invoke({
        input: confidenceInput,
      });
      // console.log('ConfidenceCalculationAgent result:', result);
      return result;
    };

    // const stockDataResult = await getStockData();
    // const historyAnalysisResult = await getHistoryAnalysis();
    // const marketStrategyResult = await getMarketStrategyAnalysis(stockDataResult.output);
    // const indicatorAnalysisResult = await getIndicatorAnalysis(stockDataResult.output);

    // const combinedResult = {
    //   stockData: stockDataResult.output,
    //   historyAnalysis: historyAnalysisResult.output,
    //   marketStrategies: marketStrategyResult.output,
    //   technicalIndicators: indicatorAnalysisResult.output,
    // };

    // const confidenceResult = await calculateConfidence(combinedResult);

    // console.log('Comprehensive Analysis:', combinedResult);
    // console.log('Confidence Score:', confidenceResult.output.confidence);
    // console.log('Conclusion:', confidenceResult.output.conclusion);
  } catch (error) {
    console.error("Error running workflow:", error);
  }
}
