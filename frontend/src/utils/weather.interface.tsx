export interface Weather {
  location: Location;
  current: Current;
  forecast: Forecast;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  localtime: string;
}

interface Current {
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  condition: Condition;
}

interface Condition {
  icon: string;
  text: string;
}

interface Forecast {
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
