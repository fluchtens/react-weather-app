async function getCityWeather() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  console.log(apiKey);
}

function Home() {
  getCityWeather();

  return <h1>Home</h1>;
}

export default Home;
