import { useEffect, useState } from "react";
import { getCityWeather } from "../services/weather";
import { Weather } from "../utils/weather.interface";
import styles from "../styles/Home.module.scss";

function Home() {
  // const [weather, setWeather] = useState<Weather | null | undefined>(null);

  // useEffect(() => {
  //   async function getWeather() {
  //     try {
  //       const data = await getCityWeather("Marche-lez-Ecausinnes");
  //       setWeather(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   getWeather();
  // }, []);

  return (
    <main className={styles.main}>
      <h1>Brussels</h1>
      <h1>16°</h1>
      <p>Feels like 15°</p>
      <img src="https://cdn.weatherapi.com/weather/64x64/day/296.png" />
      <p>Light rain</p>
    </main>
  );
}

export default Home;
