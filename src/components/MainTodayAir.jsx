import React from 'react'
import MainTodayAirSingle from './MainTodayAirSingle'
import { useGlobalState, fetchWeatherData } from '../data/globalStates'
import { useEffect } from 'react'
import icons from "../data/icons";
import {
  faCloud,
  faCloudBolt,
  faCloudRain,
  faCloudSun,
  faCloudSunRain,
  faSmog,
  faSnowflake,
  faSun,
  faTemperatureHalf,
  faWind,
  faDroplet,
  faTemperature0,
  faTemperatureFull
} from "@fortawesome/free-solid-svg-icons";

function MainTodayAir() {
  const [weather,setWeather] = useGlobalState("weather");
  const [activeCity] = useGlobalState("activeCity");
  const [cities] = useGlobalState("cities");

  useEffect(() => {
    const getWeather = async () => {
      if (activeCity >= 0 && activeCity < cities.length) {
        const data = await fetchWeatherData(cities[activeCity]);
        setWeather(data);

      }
    };

    getWeather()

  },[activeCity, setWeather, cities])


  return (
    <div className='bg-secondary p-4 text-theme-white rounded-2xl mt-5'>
        <div className='flex justify-between mb-5 items-center'>
            <p className='opacity-80 uppercase text-sm font-medium'>Air contidions</p>
            <button className='bg-blue-500 p-1 px-4 rounded-2xl font-medium text-sm cursor-pointer'>See More</button>
        </div>
        <div className='grid grid-cols-[repeat(2,1fr)] gap-10 w-[80%]'>
            <MainTodayAirSingle icon={faTemperatureHalf} title="Real Feel" value={`${Math.round(weather?.main?.feels_like)}°`} />
            <MainTodayAirSingle icon={faWind} title="Wind" value={`${Math.round(weather?.wind?.speed)} km/h`} />
            <MainTodayAirSingle icon={faTemperature0} title="Minimal Temperature" value={`${Math.round(weather?.main?.temp_min)}°`} />
            <MainTodayAirSingle icon={faTemperatureFull} title="Maximum Temperature" value={`${Math.round(weather?.main?.temp_max)}°`} />
        </div>
    </div>
  )
}

export default MainTodayAir