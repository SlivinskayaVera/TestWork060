import { useFavoritesCitiesStore } from '@/store/useFavoritesCitiesStore';
import { useWeatherStore } from '@/store/useWeatherStore';
import { Button } from 'react-bootstrap';

const FavoriteCityButton = () => {
  const { city } = useWeatherStore();
  const { favorites, removeFavorite, addFavorite } = useFavoritesCitiesStore();

  if (!city) return null;

  const isCityInFavorites = city ? favorites.find((favoriteCity) => favoriteCity.name === city?.name) : false;

  const buttonTitle = isCityInFavorites ? 'Remove from Favorites' : 'Add to Favorites';

  const handleSetFavorite = () => {
    if (city) {
      return isCityInFavorites ? removeFavorite(city) : addFavorite(city);
    }
  };

  return (
    <Button variant='light' onClick={handleSetFavorite}>
      {buttonTitle}
    </Button>
  );
};

export default FavoriteCityButton;
