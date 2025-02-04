import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CitiesRightDaysForecastSingle({day,icon,desc,tempMax}) {
  return (
    <div className='border-b border-gray-700 last:border-b-0 py-5 grid grid-cols-4 items-center text-center'>
            <p className='opacity-80 uppercase text-sm font-medium border-gray-500'>{day}</p>
            <FontAwesomeIcon icon={icon} className='text-[28px] mx-auto'/>
            <p className='uppercase text-sm font-medium border-gray-500'>{desc}</p>
            <p className='mt-3 text-xl'>{tempMax}</p>
    </div>
  )
}

export default CitiesRightDaysForecastSingle