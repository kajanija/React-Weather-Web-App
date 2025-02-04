import React, {useEffect} from 'react'
import RightSingle from './RightSingle'
import { useGlobalState,fetchHourlyData } from '../data/globalStates'
import icons from '../data/icons'
import {
  faCloud,
  faCloudBolt,
  faCloudRain,
  faCloudSun,
  faCloudSunRain,
  faSmog,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import convertToDay from '../data/Day';


function Right() {
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

  return (
    <div className='bg-secondary p-4 text-theme-white rounded-2xl mt-5'>
        <p className='opacity-80 uppercase text-sm font-medium mb-5'>7-Day forecast</p>
        <div className='grid grid-cols-1 gap-5 items-center text-center'>
          {
            hourly?.list?.map((weather,index) => {
              if(index % 8 === 0){
                return (
                  <RightSingle key={weather.dt} day={convertToDay(weather.dt)} icon={icons[weather?.weather[0]?.icon]} desc={weather?.weather[0]?.main} tempMax={`${Math.round(weather?.main?.temp_max)}°`} tempMin={`${Math.round(weather?.main?.temp_min)}°`} />
                )
              }
          })
          } 
        </div>
    </div>
  )
}

export default Right