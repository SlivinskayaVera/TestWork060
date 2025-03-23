export interface ICity {
  id: number;
  country: string;
  lat: number;
  lon: number;
  name: string;
  state?: string;
}

export interface ICurrentWeather {
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [{ description: string; icon: string; id: number; main: string }];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

export interface IForecast {
  city: {
    coord: { lat: number; lon: number };
    country: string;
    id: number;
    name: string;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  dt_txt: string;
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}
