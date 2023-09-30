import { Condition } from "./condition.interface";

export interface Current {
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  condition: Condition;
}
