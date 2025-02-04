import React from 'react'
import { useEffect } from 'react';
import MainTodayForecastSingle from './MainTodayForecastSingle'
import { useGlobalState, fetchWeatherData, fetchHourlyData } from '../data/globalStates';
import convertToTime from '../data/Time';
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

function MainTodayForecast() {
      const [hourly, setHourly] = useGlobalState("hourly");
      const [activeCity, setActiveCity] = useGlobalState("activeCity");
      const [cities, setCities] = useGlobalState("cities");

      useEffect(() => {
          const getWeather = async () => {
            if (activeCity >= 0 && activeCity < cities.length) {
              const hourlyData = await fetchHourlyData(cities[activeCity]);
              setHourly(hourlyData);
            }
          };
      
          getWeather();
        }, [activeCity, setHourly, cities]);

        const icons = {
          "01d": faSun,
          "01n": faSun,
          "02d": faCloudSun,
          "02n": faCloudSun,
          "03d": faCloud,
          "03n": faCloud,
          "04d": faCloud,
          "04n": faCloud,
          "09d": faCloudRain,
          "09n": faCloudRain,
          "10d": faCloudSunRain,
          "10n": faCloudSunRain,
          "11d": faCloudBolt,
          "11n": faCloudBolt,
          "13d": faSnowflake,
          "13n": faSnowflake,
          "50d": faSmog,
          "50n": faSmog,
        };
  return (
    <div className='bg-secondary p-4 text-theme-white rounded-2xl mt-5'>
        <p className='opacity-80 uppercase text-sm font-medium mb-5'>Today's forecast</p>
        <div className='grid grid-cols-6 gap-2 items-center text-center'>
          {
            hourly.list?.slice(0,6)?.map((key,index) => (
              <MainTodayForecastSingle key={hourly?.list[index]?.dt} time={convertToTime(hourly?.list[index]?.dt)} icon={icons[hourly?.list[index]?.weather[0]?.icon] ?? faBars} temp={hourly?.list[index]?.main?.temp} />
            ))
          }
           
            
        </div>
    </div>
  )
}

export default MainTodayForecast