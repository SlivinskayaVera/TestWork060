import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IFavoriteCitiesStore {
  favorites: string[];
  addFavorite: (city: string) => void;
  removeFavorite: (city: string) => void;
}

export const useFavoritesCitiesStore = create<IFavoriteCitiesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (city: string) => set(() => ({ favorites: [...get().favorites, city] })),
      removeFavorite: (city: string) =>
        set(() => ({ favorites: [...get().favorites].filter((f: string) => f !== city) })),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
