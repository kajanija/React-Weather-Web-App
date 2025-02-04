import React, { useState, useEffect } from 'react';
import CitiesListSingle from './CitiesListSingle';
import convertToTime from '../data/Time';
import { useGlobalState, fetchHourlyData, fetchWeatherData, fetchAllCitiesData } from '../data/globalStates';
import {
  faBars,
  faCloud,
  faCloudBolt,
  faCloudRain,
  faCloudSun,
  faCloudSunRain,
  faSmog,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import icons from '../data/icons';

function CitiesList() {
  const [weather, setWeather] = useGlobalState("weather");
  const [hourly, setHourly] = useGlobalState("hourly");
  const [activeCity, setActiveCity] = useGlobalState("activeCity");
  const [cities, setCities] = useGlobalState("cities");
  const [allData, setAllData] = useGlobalState("all");

  useEffect(() => {
    const getWeather = async () => {
      if (activeCity >= 0 && activeCity < cities.length) {
        const data = await fetchWeatherData(cities[activeCity]);
        setWeather(data);
        const hourlyData = await fetchHourlyData(cities[activeCity]);
        setHourly(hourlyData);
        const allCitiesData = await fetchAllCitiesData(cities);
        setAllData(allCitiesData);
        setCities(cities);
      }
    };
    getWeather();
  }, [activeCity, setWeather, setHourly, setActiveCity, cities, setCities]);
  return (
    <div className="mt-5 grid gap-5 items-start grid-rows-auto self-start">
      {cities.map((city, index) => (
        <CitiesListSingle
        key={index}
        onClick={() => {
          setActiveCity(index);
          localStorage.setItem("activeCity", index);
        }}
        icon={allData[index]?.weather && allData[index]?.weather[0]?.icon ? icons[allData[index].weather[0].icon] : faBars}
        active={activeCity === index}
        city={city}
        time={allData[index]?.dt ? convertToTime(allData[index].dt) : "N/A"}
        temp={allData[index]?.main?.temp ? allData[index].main.temp : "N/A"}
      />
      ))}
    </div>
  );
}

export default CitiesList;
