import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect} from 'react'
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


function CitiesRightToday() {
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
    <div className='text-theme-white grid grid-cols-2 items-center pb-3 border-b border-gray-700'>
            <div>
                <p className='text-[35px] font-bold'>{weather?.name}</p>
                <p className='mt-5 text-[40px] font-bold'>{`${Math.round(weather?.main?.temp)}°`}</p>
            </div>
            <p className='text-right'>
                <FontAwesomeIcon key={weather?.dt} className='text-amber-400 text-[100px]' icon={weather?.weather && weather?.weather[0]?.icon ? icons[weather.weather[0].icon] : faBars} />
            </p>
        </div>
  )
}

export default CitiesRightToday