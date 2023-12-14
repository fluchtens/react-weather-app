import { Condition } from "./condition.interface";

export interface Forecast {
  forecastday: ForecastDay[];
}

interface ForecastDay {
  hour: Hour[];
}

interface Hour {
  temp_c: number;
  temp_f: number;
  condition: Condition;
}
