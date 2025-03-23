import { ICity, ICurrentWeather, IForecast } from '@/app/commonTypes/types';
import { create } from 'zustand';

interface IWeatherStore {
  city: ICity | null;
  currentWeather: ICurrentWeather | null;
  forecast: IForecast[] | null;
  setCurrentWeather: (weather: ICurrentWeather) => void;
  setForecast: (forecast: IForecast[]) => void;
  setCity: (city: ICity | null) => void;
}

export const useWeatherStore = create<IWeatherStore>((set) => ({
  city: null,
  currentWeather: null,
  forecast: null,
  setCity: (city) => set(() => ({ city: city })),
  setCurrentWeather: (weather: ICurrentWeather) => set({ currentWeather: weather }),
  setForecast: (forecast) => set({ forecast }),
}));


