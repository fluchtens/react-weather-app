import { Condition } from "./condition.interface";

export interface Current {
  condition: Condition;
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  wind_kph: number;
  wind_mph: number;
  humidity: number;
  uv: number;
}
