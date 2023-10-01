import { Weather } from "../utils/weather.interface";
import styles from "../styles/CurrentWeather.module.scss";

function CurrentWeather({ weather }: { weather: Weather | null | undefined }) {
  return (
    <div className={styles.container}>
      <div className={styles.location}>
        <p className={styles.city}>{weather?.location.name}</p>
        {weather?.location.region ? (
          <p className={styles.country}>
            {weather?.location.country} ({weather?.location.region})
          </p>
        ) : (
          <p className={styles.country}>{weather?.location.country}</p>
        )}
      </div>
      <div className={styles.condition}>
        <img className={styles.icon} src={weather?.current.condition.icon} />
        <p className={styles.temp}>{weather?.current.temp_c}°</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
