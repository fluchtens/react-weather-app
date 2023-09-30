import { useEffect, useState } from "react";
import { getCityWeather } from "../services/weather";
import { Weather } from "../utils/weather.interface";
import styles from "../styles/Home.module.scss";
import TodayForecast from "../components/TodayForecast";
import CurrentDetails from "../components/CurrentDetails";
import CurrentWeather from "../components/CurrentWeather";

function Home() {
  const [weather, setWeather] = useState<Weather | null | undefined>(null);

  useEffect(() => {
    async function getWeather() {
      try {
        const data = await getCityWeather("Marche-lez-ecaussinnes");
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    }

    getWeather();
  }, []);

  return (
    <main className={styles.main}>
      <CurrentWeather weather={weather} />
      <TodayForecast weather={weather} />
      <CurrentDetails weather={weather} />
    </main>
  );
}

export default Home;
