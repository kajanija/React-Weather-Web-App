import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useGlobalState, fetchWeatherData, fetchHourlyData } from '../data/globalStates';
import icons from '../data/icons';
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

function MainToday() {

  const [weather, setWeather] = useGlobalState("weather");
  const [hourly, setHourly] = useGlobalState("hourly");
  const [activeCity, setActiveCity] = useGlobalState("activeCity");
  const [cities, setCities] = useGlobalState("cities");

  useEffect(() => {
    const getWeather = async () => {
      if (activeCity >= 0 && activeCity < cities.length) {
        const data = await fetchWeatherData(cities[activeCity]);
        setWeather(data);
        const hourlyData = await fetchHourlyData(cities[activeCity]);
        setHourly(hourlyData);
      }
    };

    getWeather();
  }, [activeCity, setWeather, setHourly, cities]);
  return (
    <div className='text-theme-white grid grid-cols-2 mt-10 px-10 items-center'>
      <div>
        <p className='text-[45px] font-bold'>{weather?.name ?? "N/A"}</p>
        <p className='mt-12 text-[60px] font-bold'>{Math.round(weather?.main?.temp) ?? "N/A"}°</p>
      </div>
      <p className='text-right'>
        {weather?.weather?.[0]?.icon && (
          <FontAwesomeIcon
            className='text-amber-400 text-[140px]'
            icon={icons[weather.weather[0].icon] ?? faBars}
          />
        )}
      </p>
    </div>
  );
}

export default MainToday;