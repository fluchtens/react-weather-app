import { useEffect, useState } from "react";
import { getCityWeatherApi } from "../../services/weather";
import { Weather } from "../../types/weather.interface";
import { SearchBar } from "../sections/SearchBar";
import { CurrentWeather } from "../sections/CurrentWeather";
import { TodayForecast } from "../sections/TodayForecast";
import { CurrentDetails } from "../sections/CurrentDetails";

export default function Home() {
  const [weather, setWeather] = useState<Weather | null | undefined>(null);
  const [city, setCity] = useState(
    localStorage.getItem("lastCity") || "Bruxelles"
  );
  const [trigger, setTrigger] = useState(true);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTrigger(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (city && trigger) {
        const data = await getCityWeatherApi(city);
        console.log(data);
        if (!data) {
          return;
        }
        setWeather(data);
        setCity("");
        localStorage.setItem("lastCity", city);
      }
    };
    fetchData();
    setTrigger(false);
  }, [city, trigger]);

  return (
    <>
      {weather && (
        <div className="flex-col flex gap-3">
          <SearchBar
            city={city}
            onChange={setCity}
            onKeyDown={handleKeyPress}
          />
          <CurrentWeather weather={weather} />
          <TodayForecast weather={weather} />
          <CurrentDetails weather={weather} />
        </div>
      )}
    </>
  );
}
