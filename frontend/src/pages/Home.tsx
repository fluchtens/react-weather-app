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
  const [city, setCity] = useState("Bruxelles");
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    async function getWeather() {
      try {
        if (city && trigger) {
          const data = await getCityWeather(city);
          setWeather(data);
          setCity("");
        }
      } catch (error) {
        console.error(error);
      }
    }
    getWeather();
    setTrigger(false);
  }, [city, trigger]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      setTrigger(true);
    }
  };

  return (
    <main className={styles.main}>
      <SearchBar
        city={city}
        onCityChange={setCity}
        onKeyPress={handleKeyPress}
      />
      <CurrentWeather weather={weather} />
      <TodayForecast weather={weather} />
      <CurrentDetails weather={weather} />
    </main>
  );
}

export default Home;
