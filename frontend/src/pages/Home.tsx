import { useEffect, useState } from "react";
import { getCityWeather } from "../services/weather";
import { Weather } from "../utils/weather.interface";
import styles from "../styles/Home.module.scss";
import SearchBar from "../components/SearchBar";
import TodayForecast from "../components/TodayForecast";
import CurrentDetails from "../components/CurrentDetails";
import CurrentWeather from "../components/CurrentWeather";

function Home() {
  const [weather, setWeather] = useState<Weather | null | undefined>(null);
  const [city, setCity] = useState(
    localStorage.getItem("lastCity") || "Bruxelles"
  );
  const [trigger, setTrigger] = useState(true);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      setTrigger(true);
    }
  };

  useEffect(() => {
    async function getWeather() {
      try {
        if (city && trigger) {
          const data = await getCityWeather(city);
          if (!data) {
            setCity("");
            return;
          }
          setWeather(data);
          setCity("");
          localStorage.setItem("lastCity", city);
        }
      } catch (error) {
        console.error("catch component");
      }
    }
    getWeather();
    setTrigger(false);
  }, [city, trigger]);

  return (
    <main className={styles.main}>
      <SearchBar city={city} onChange={setCity} onKeyDown={handleKeyPress} />
      <CurrentWeather weather={weather} />
      <TodayForecast weather={weather} />
      <CurrentDetails weather={weather} />
    </main>
  );
}

export default Home;
