import { Weather } from "../utils/weather.interface";
import styles from "../styles/CurrentWeather.module.scss";

function CurrentWeather({ weather }: { weather: Weather | null | undefined }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.city}>{weather?.location.name}</h1>
      <h2 className={styles.temp}>{weather?.current.temp_c}°</h2>
    </div>
  );
}

export default CurrentWeather;
