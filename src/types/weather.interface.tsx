import { Location } from "./location.interface";
import { Current } from "./current.interface";
import { Forecast } from "./forecast.interface";

export interface Weather {
  location: Location;
  current: Current;
  forecast: Forecast;
}
