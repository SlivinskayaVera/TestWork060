import { convertCityNameToCityObject, fetchCurrentWeather } from '@/api/api';
import { useState } from 'react';
import { useWeatherStore } from '@/store/useWeatherStore';
import { ICity } from '@/app/commonTypes/types';
import LoadingPage from '../LoadingPage/LoadingPage';
import SelectorList from '../SelectorList/SelectorList';
import SearchBar from '../SearchBar/SearchBar';

const SearchWithDropDown = () => {
  const { setCurrentWeather, setCity, city } = useWeatherStore();

  const [cities, setCities] = useState<ICity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleClickOnOption = async (city: ICity) => {
    setIsLoading(true);
    setIsOpen(false);
    setCity(city);

    try {
      const weather = await fetchCurrentWeather(city);
      setCurrentWeather(weather);
    } catch (error) {
      if (typeof error === 'string') {
        setErrorText(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchByCityName = async (city: string) => {
    setErrorText('');
    setCity(null);

    try {
      const getCitiesFromSearch = await convertCityNameToCityObject(city.trim());

      setCities(getCitiesFromSearch);
      setIsOpen(true);
    } catch (error) {
      if (typeof error === 'string') {
        setErrorText(error);
      }
      setCities([]);
    }
  };

  return (
    <section>
      <p>View the current weather {city ? `in ${city.name}` : ''}</p>
      <SearchBar onSearch={handleSearchByCityName} />
      {errorText && <p>{errorText}</p>}

      <SelectorList isOpen={isOpen} data={cities} onClick={handleClickOnOption} />

      {isLoading && <LoadingPage />}
    </section>
  );
};

export default SearchWithDropDown;
