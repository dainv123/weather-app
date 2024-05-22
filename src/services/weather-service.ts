import axios from "axios";
import { config } from "@/config";
import { message } from "@/message";
import { Units } from "@/models/unit";
import { WeatherData } from "@/models/weather-data";

export async function fetchWeather(
  city: string,
  units: Units
): Promise<WeatherData> {
  const apiUrl = `${config.apiUrl}?q=${city}&appid=${config.apiKey}&units=${units}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data as WeatherData;
  } catch (error) {
    throw new Error(message.fetchWeatherFailedWithoutTry);
  }
}
