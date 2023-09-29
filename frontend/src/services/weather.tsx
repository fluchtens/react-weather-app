import { Weather } from "../utils/weather.interface";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiUrl: string = "http://api.weatherapi.com/v1";

export async function getCityWeather(
  city: string
): Promise<Weather | undefined> {
  try {
    const response = await fetch(
      `${apiUrl}/forecast.json?key=${apiKey}&q=${encodeURIComponent(
        city
      )}&days=3`
    );
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
