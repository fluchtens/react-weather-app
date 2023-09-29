import { Weather } from "../utils/weather.interface";

export async function getCityWeather(
  city: string
): Promise<Weather | undefined> {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl: string = "http://api.weatherapi.com/v1/current.json";

  const url: string = `${apiUrl}?key=${apiKey}&q=${encodeURIComponent(city)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
