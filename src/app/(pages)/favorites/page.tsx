'use client';

import { fetchCurrentWeather } from '@/api/api';
import { Stack } from 'react-bootstrap';
import { useFavoritesCitiesStore } from '@/store/useFavoritesCitiesStore';
import { useEffect, useState } from 'react';
import FavoriteItem from '@/app/components/FavoriteItem/FavoriteItem';
import { ICurrentWeather } from '@/app/commonTypes/types';

const FavoritesPage = () => {
  const { favorites } = useFavoritesCitiesStore();

  const [data, setData] = useState<ICurrentWeather[]>([]);

  useEffect(() => {
    for (const favorite of favorites) {
      (async () => {
        const weather: ICurrentWeather = await fetchCurrentWeather(favorite);

        if (typeof weather !== 'string') {
          setData((prev) => [...prev, weather]);
        }
      })();
    }
  }, [favorites]);

  return (
    <Stack gap={3} className='col-lr-5 mx-auto'>
      <h1>Favorites Cities</h1>

      {favorites.length > 0 ? (
        data.map((city, index) => <FavoriteItem key={index} weather={city} />)
      ) : (
        <p>You don&apos;t have any cities in favorites</p>
      )}
    </Stack>
  );
};

export default FavoritesPage;
