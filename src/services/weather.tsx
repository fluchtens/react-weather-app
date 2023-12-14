import { Weather } from "../types/weather.interface";

const API_URL = import.meta.env.VITE_WEATHER_API_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getCityWeatherApi(
  city: string
): Promise<Weather | null | undefined> {
  try {
    const response = await fetch(
      `${API_URL}/forecast.json?key=${API_KEY}&q=${encodeURIComponent(
        city
      )}&days=3`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP response status: ${response.status}`);
    }
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
