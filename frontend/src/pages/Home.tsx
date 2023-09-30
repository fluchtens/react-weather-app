import { useEffect, useState } from "react";
import { getCityWeather } from "../services/weather";
import { Weather } from "../utils/weather.interface";
import styles from "../styles/Home.module.scss";

function Home() {
  const [weather, setWeather] = useState<Weather | null | undefined>(null);
  const forecastHours = [6, 9, 12, 15, 18, 21];

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
        <p className={styles.feelsLike}>
          Feels like {weather?.current.feelslike_c}°
        </p>
        <img src={weather?.current.condition.icon} />
        <p className={styles.feelsLike}>{weather?.current.condition.text}</p>
      </div>

      <div className={styles.todayForecast}>
        <p className={styles.todayForecastTitle}>Today's Forecast</p>
        <ul className={styles.todayForecastList}>
          {forecastHours.map((hour) => {
            const displayHour = hour > 12 ? hour - 12 : hour;
            const displayPeriod = hour >= 12 ? "PM" : "AM";
            return (
              <li key={hour}>
                <p
                  className={styles.forecastHour}
                >{`${displayHour}:00 ${displayPeriod}`}</p>
                <img
                  src={
                    weather?.forecast.forecastday[0].hour[hour].condition.icon
                  }
                />
                <p className={styles.forecastTemp}>
                  {weather?.forecast.forecastday[0].hour[hour].temp_c}°
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Home;
