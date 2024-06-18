import { DynamicStructuredTool } from "@langchain/core/tools";
import { z } from "zod";
import fetch from 'node-fetch';

// Define schema using Zod for input validation
const weatherDataSchema = z.object({
  city: z.string().min(1).max(50).describe("City name to fetch weather data for"),
});

// Create a DynamicStructuredTool instance
export const WeatherDataTool = new DynamicStructuredTool({
  name: "weather_data",
  description: "Fetches weather data from OpenWeatherMap",
  schema: weatherDataSchema,
  func: async ({ city }: { city: string }) => {
    try {
      console.log(`WeatherDataTool invoked with city: ${city}`);
      const apiKey = process.env.WEATHER_API_KEY;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      const data = await response.json();
      if (response.ok) {
        console.log(`Fetched weather data: ${JSON.stringify(data)}`);
        return JSON.stringify(data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  },
});
