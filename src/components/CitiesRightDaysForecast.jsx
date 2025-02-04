import React , {useEffect} from 'react'
import CitiesRightDaysForecastSingle from './CitiesRightDaysForecastSingle'
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
import convertToDay from '../data/Day';
import { icon } from 'leaflet';

function CitiesRightDaysForecast() {
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
    <div className='text-theme-white mt-5'>
        <p className='opacity-80 uppercase text-sm font-medium'>3-Day forecast</p>
        <div className='grid grid-cols-1 gap-5 items-center text-center'>
            {
              hourly?.list?.slice(0,24)?.map((weather,index) => {
                if(index % 8 === 0){
                  return (
                    <CitiesRightDaysForecastSingle key={weather?.dt} day={convertToDay(weather?.dt)} icon={icons[weather?.weather[0]?.icon] ? icons[weather?.weather[0]?.icon] : faBars} desc={weather?.weather[0]?.main} tempMax={`${Math.round(weather?.main?.temp)}°`} />
                  )
                }
              })
            }
        </div>
    </div>
  )
}

export default CitiesRightDaysForecast