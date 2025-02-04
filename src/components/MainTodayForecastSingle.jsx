import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
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

function MainTodayForecastSingle({time,icon,temp}) {
  return (
    <div className='border-r border-gray-700 last:border-r-0 '>
        <p className='opacity-80 uppercase text-sm font-medium mb-3 border-gray-500'>{time}</p>
        <FontAwesomeIcon icon={icon} className='text-[28px]'/>
        <p className='mt-3 text-xl font-bold'>{Math.round(temp)}°</p>
    </div>
  )
}

export default MainTodayForecastSingle