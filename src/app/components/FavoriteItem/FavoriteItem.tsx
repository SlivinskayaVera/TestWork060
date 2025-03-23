import { ICurrentWeather } from '@/app/commonTypes/types';
import ForecastItem from '../ForecastItem/ForecastItem';
import { Container } from 'react-bootstrap';

interface FavoriteItemProps {
  weather: ICurrentWeather;
}

const FavoriteItem = ({ weather }: FavoriteItemProps) => {
  return (
    <Container>
      <h3>{weather.name}</h3>
      <ForecastItem weather={weather} />
    </Container>
  );
};

export default FavoriteItem;
