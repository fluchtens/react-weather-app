import { Weather } from "../utils/weather.interface";
import { FaTemperatureLow, FaWind, FaSun } from "react-icons/fa6";
import { IoWaterSharp } from "react-icons/io5";
import styles from "../styles/CurrentDetails.module.scss";

function CurrentDetails({ weather }: { weather: Weather | null | undefined }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Current Details</p>
      <ul className={styles.detailsList}>
        <li>
          <div className={styles.dataType}>
            <FaTemperatureLow className={styles.icon} />
            <p className={styles.text}>Feels like</p>
          </div>
          <p className={styles.data}>{weather?.current.feelslike_c}°</p>
        </li>
        <li>
          <div className={styles.dataType}>
            <FaWind className={styles.icon} />
            <p className={styles.text}>Wind</p>
          </div>
          <p className={styles.data}>{weather?.current.wind_kph} km/h</p>
        </li>
        <li>
          <div className={styles.dataType}>
            <IoWaterSharp className={styles.icon} />
            <p className={styles.text}>Humidity</p>
          </div>
          <p className={styles.data}>{weather?.current.humidity}%</p>
        </li>
        <li>
          <div className={styles.dataType}>
            <FaSun className={styles.icon} />
            <p className={styles.text}>UV Index</p>
          </div>
          <p className={styles.data}>{weather?.current.uv}</p>
        </li>
      </ul>
    </div>
  );
}

export default CurrentDetails;
