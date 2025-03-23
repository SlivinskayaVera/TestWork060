import { ICity } from '@/app/commonTypes/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IFavoriteCitiesStore {
  favorites: ICity[];
  addFavorite: (city: ICity) => void;
  removeFavorite: (city: ICity) => void;
}

export const useFavoritesCitiesStore = create<IFavoriteCitiesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (city) => set(() => ({ favorites: [...get().favorites, city] })),
      removeFavorite: (city) =>
        set(() => ({ favorites: [...get().favorites].filter((f) => f.name !== city.name) })),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
