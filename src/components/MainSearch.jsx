import React, { useState, useEffect } from 'react';
import { useGlobalState, fetchWeatherData, fetchCitiesData } from '../data/globalStates';

function MainSearch() {
  const [cities, setCities] = useGlobalState("cities");
  const [search, setSearch] = useState("");
  const [activeCity, setActiveCity] = useGlobalState("activeCity");
  const [weather, setWeather] = useGlobalState("weather");
  const [searchRes, setSearchRes] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      if (activeCity >= 0 && activeCity < cities.length) {
        const data = await fetchWeatherData(cities[activeCity]);
        setWeather(data);
      }
    };

    getWeather();
  }, [activeCity, setWeather, cities]);

  useEffect(() => {
    const getSearch = async () => {
      if (search.length > 2) {
        const data = await fetchCitiesData(search);
        setSearchRes(data);
      }
    };

    getSearch();
  }, [search]);

  const steNewCity = (city) => {
    if (!cities.includes(city)) {
      setCities([...cities, city]);
      setActiveCity(cities.length); // Postavi novi grad kao aktivni
    }
  };

  return (
    <div className='relative'>
      <input
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        className='bg-secondary p-3 rounded-2xl w-full text-theme-white placeholder-theme-white focus:outline-none'
        type="text"
        placeholder='Search for cities...'
      />
      <div className={`${search.length > 2 ? 'h-100' : 'h-0'} absolute bg-secondary z-2 w-full top-15 left-0 rounded-2xl transition-all duration-300 overflow-hidden`}>
        {
          searchRes?.map((sr, index) => (
            <p key={index} onClick={() => {
              steNewCity(sr?.name?.replace(/City Of /i, '').trim());
              setSearch("");
              if (!cities.includes(sr?.name?.replace(/City Of /i, '').trim())) {
                localStorage.setItem("cities", JSON.stringify([...cities,sr?.name?.replace(/City Of /i, '').trim()]));
              }
            }} className='p-4 text-theme-white cursor-pointer'>
              {`${sr?.name} - ${sr?.country}`}
            </p>
          ))
        }
      </div>
    </div>
  );
}

export default MainSearch;
