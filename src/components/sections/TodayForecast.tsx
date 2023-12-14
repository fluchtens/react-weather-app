import { Weather } from "../../types/weather.interface";
import { ContainerTitle } from "../ui/ContainerTitle";

interface TodayForecastProps {
  weather: Weather;
}

const HourlyForecast = ({ weather }: TodayForecastProps) => {
  const forecastHours: number[] = [6, 9, 12, 15, 18, 21];

  return (
    <ul className="flex-wrap md:flex-row flex justify-between items-center gap-[2rem] text-center">
      {forecastHours.map((hour) => {
        const displayHour = hour > 12 ? hour - 12 : hour;
        const displayPeriod = hour >= 12 ? "PM" : "AM";

        return (
          <li className="" key={hour}>
            <p className="text-base font-semibold text-quaternary">{`${displayHour}:00 ${displayPeriod}`}</p>
            <img
              className="w-12	h-12 md:w-16 md:h-16"
              src={weather.forecast.forecastday[0].hour[hour].condition.icon}
            />
            <p className="text-xl md:text-2xl font-semibold">
              {weather.forecast.forecastday[0].hour[hour].temp_c}°
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export const TodayForecast = ({ weather }: TodayForecastProps) => (
  <div className="px-6 py-5 flex-col flex gap-2 rounded-2xl md:rounded-3xl bg-secondary">
    <ContainerTitle title="Today's Forecast" />
    <HourlyForecast weather={weather} />
  </div>
);
