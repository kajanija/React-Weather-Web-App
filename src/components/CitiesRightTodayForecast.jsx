import React, {useEffect} from 'react'
import CitiesRightTodayForecastSingle from './CitiesRightTodayForecastSingle'
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

function CitiesRightTodayForecast() {
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
        }, [activeCity, setWeather, setHourly, setActiveCity, cities]);
  
  return (
    <div className='text-theme-white mt-5 pb-3 border-b border-gray-700'>
        <p className='opacity-80 uppercase text-sm font-medium mb-5'>Today's forecast</p>
        <div className='grid grid-cols-3 gap-2 items-center text-center'>
            {
              hourly?.list?.slice(0,3).map((weather,index) => (
                <CitiesRightTodayForecastSingle key={weather?.dt} time={convertToTime(weather?.dt)} icon={icons[weather?.weather[0]?.icon]} temp={`${Math.round(weather?.main?.temp)}°`} />
              ))
            }
        </div>
    </div>
  )
}

export default CitiesRightTodayForecast