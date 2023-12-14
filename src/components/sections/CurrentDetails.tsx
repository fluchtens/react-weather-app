import { Weather } from "../../types/weather.interface";
import { FaTemperatureLow, FaWind, FaSun } from "react-icons/fa6";
import { IoWaterSharp } from "react-icons/io5";
import { ContainerTitle } from "../ui/ContainerTitle";

interface CurrentDetailsProps {
  weather: Weather;
}

export const CurrentDetails = ({ weather }: CurrentDetailsProps) => (
  <div className="px-6 py-5 flex-col flex gap-2 rounded-2xl md:rounded-3xl bg-secondary">
    <ContainerTitle title="Current Details" />
    <ul className="flex-col md:flex-row flex md:justify-between items-start text-left md:items-center">
      <li className="mb-4 md:mb-0">
        <div className="flex items-center">
          <FaTemperatureLow className="w-6 h-6 text-quaternary" />
          <p className="ml-2 text-lg font-semibold text-quaternary">
            Feels like
          </p>
        </div>
        <p className="ml-8 text-lg font-semibold">
          {weather.current.feelslike_c}°
        </p>
      </li>
      <li className="mb-4 md:mb-0">
        <div className="flex items-center">
          <FaWind className="w-6 h-6 text-quaternary" />
          <p className="ml-2 text-lg font-semibold text-quaternary">Wind</p>
        </div>
        <p className="ml-8 text-lg font-semibold">
          {weather.current.wind_kph} km/h
        </p>
      </li>
      <li className="mb-4 md:mb-0">
        <div className="flex items-center">
          <IoWaterSharp className="w-6 h-6 text-quaternary" />
          <p className="ml-2 text-lg font-semibold text-quaternary">Humidity</p>
        </div>
        <p className="ml-8 text-lg font-semibold">
          {weather.current.humidity}%
        </p>
      </li>
      <li className="mb-4 md:mb-0">
        <div className="flex items-center">
          <FaSun className="w-6 h-6 text-quaternary" />
          <p className="ml-2 text-lg font-semibold text-quaternary">UV Index</p>
        </div>
        <p className="ml-8 text-lg font-semibold">{weather.current.uv}</p>
      </li>
    </ul>
  </div>
);
