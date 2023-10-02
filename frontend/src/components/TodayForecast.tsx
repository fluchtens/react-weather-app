import { Weather } from "../utils/weather.interface";
import { ContainerTitle } from "./ContainerTitle";
import styles from "../styles/TodayForecast.module.scss";

const HourlyForecast = ({
  weather,
}: {
  weather: Weather | null | undefined;
}) => {
  const forecastHours: number[] = [6, 9, 12, 15, 18, 21];

  return (
    <ul className={styles.list}>
      {forecastHours.map((hour) => {
        const displayHour = hour > 12 ? hour - 12 : hour;
        const displayPeriod = hour >= 12 ? "PM" : "AM";

        return (
          <li className={styles.element} key={hour}>
            <p className={styles.hour}>
              {`${displayHour}:00 ${displayPeriod}`}
            </p>
            <img
              className={styles.icon}
              src={weather?.forecast.forecastday[0].hour[hour].condition.icon}
            />
            <p className={styles.temp}>
              {weather?.forecast.forecastday[0].hour[hour].temp_c}°
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export const TodayForecast = ({
  weather,
}: {
  weather: Weather | null | undefined;
}) => (
  <div className={styles.container}>
    <ContainerTitle title="Today's Forecast" />
    <HourlyForecast weather={weather} />
  </div>
);
