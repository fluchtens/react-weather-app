import { useEffect, useState } from "react";
import { getCityWeather } from "../services/weather";
import { Weather } from "../utils/weather.interface";
import styles from "../styles/Home.module.scss";
import TodayForecast from "../components/TodayForecast";
import CurrentDetails from "../components/CurrentDetails";

function Home() {
  const [weather, setWeather] = useState<Weather | null | undefined>(null);

  useEffect(() => {
    async function getWeather() {
      try {
        const data = await getCityWeather("Marche-lez-Ecausinnes");
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    }

    getWeather();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.city}>{weather?.location.name}</h1>
      <div className={styles.tempContainer}>
        <h2 className={styles.temp}>{weather?.current.temp_c}°</h2>
        <img src={weather?.current.condition.icon} />
        <p className={styles.feelsLike}>{weather?.current.condition.text}</p>
      </div>
      <TodayForecast weather={weather} />
      <CurrentDetails weather={weather} />
    </main>
  );
}

export default Home;
