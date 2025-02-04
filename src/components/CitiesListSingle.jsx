import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CitiesListSingle({onClick,icon,active,city,time,temp}) {
  return (
    <div onClick={onClick} className={`text-theme-white p-6 rounded-3xl grid grid-cols-[auto_1fr_auto] gap-5 items-center ${active ? 'bg-primary border-2 border-blue-400':'bg-secondary border-secondary border-2'} cursor-pointer transition-all duration-600 ease-in-out`}>
        <FontAwesomeIcon icon={icon} className='text-[80px]' />
        <div className='ml-6'>
            <p className='font-bold opacity-80 text-xl'>{city}</p>
            <p className='mt-2 text-sm opacity-80'>{time}</p>
        </div>
        <p className='font-md text-3xl text-right'>{Math.round(temp)}°</p>
    </div>
  )
}

export default CitiesListSingle