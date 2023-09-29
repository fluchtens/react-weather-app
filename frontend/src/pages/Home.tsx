import { useEffect, useState } from "react";
import { getCityWeather } from "../services/weather";
import { Weather } from "../utils/weather.interface";

function Home() {
  const [weather, setWeather] = useState<Weather | null | undefined>(null);

  useEffect(() => {
    async function getWeather() {
      try {
        const data = await getCityWeather("Braine le comte");
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    }

    getWeather();
  }, []);

  return (
    <div>
      {weather && (
        <div>
          <h1>
            Weather in {weather.location.name}, {weather.location.country}
          </h1>
          <img src={weather.current.condition.icon} />
          <p>{weather.current.condition.text}</p>
          <p>{weather.current.temp_c}°</p>
          <p>Feels like {weather.current.feelslike_c}°</p>
        </div>
      )}
    </div>
  );
}

export default Home;
