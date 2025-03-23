import { WEEK_DAYS } from '@/app/consts/weekDays';
import styles from './ForecastItem.module.scss';
import Image from 'next/image';
import { ICurrentWeather, IForecast } from '@/app/commonTypes/types';

interface ForecastItemProps {
  weather: ICurrentWeather | IForecast;
}

const ForecastItem = ({ weather }: ForecastItemProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const date = new Date(weather.dt * 1000).toLocaleDateString();
  const weekDay = WEEK_DAYS[new Date(weather.dt * 1000).getDay()];

  return (
    <div key={weather.dt} className={styles.forecastItem}>
      <div className={styles.forecastItem__block}>
        <div>
          <Image src={iconUrl} alt={weather.weather[0].description} width={100} height={100} />
          <p>{weather.weather[0].description}</p>
        </div>
        <div>
          <p>{date}</p>
          <p>{weekDay}</p>
        </div>
      </div>
      <div className={styles.forecastItem__block}>
        <div className={styles.forecastItem__description}>
          <p>Temperature {Math.round(weather.main.temp)}°C</p>
          <p>Feels like {Math.round(weather.main.feels_like)}°C</p>
        </div>
        <div className={styles.forecastItem__description}>
          <p>Humidity {weather.main.humidity}%</p>
          <p>Wind {weather.wind.speed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default ForecastItem;
