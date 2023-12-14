import { Weather } from "../../types/weather.interface";

interface CurrentWeatherProps {
  weather: Weather;
}

export const CurrentWeather = ({ weather }: CurrentWeatherProps) => (
  <section className="py-3 px-10 flex-col md:flex-row flex justify-center md:justify-between items-center">
    <div className="flex-col flex gap-2 text-center md:text-left">
      <h1 className="text-3xl font-bold">{weather.location.name}</h1>
      {weather.location.region ? (
        <p className="text-base font-normal">
          {weather.location.country} ({weather.location.region})
        </p>
      ) : (
        <p className="text-base font-normal">{weather.location.country}</p>
      )}
    </div>
    <div className="flex-col md:flex-row flex justify-center items-center	text-center md:text-right">
      <img className="w-16 h-16" src={weather.current.condition.icon} />
      <p className="ml-2 text-7xl font-light">{weather.current.temp_c}°</p>
    </div>
  </section>
);
