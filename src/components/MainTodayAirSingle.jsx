import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function MainTodayAirSingle({title,value,icon}) {
  return (
    <div>
        <p className='opacity-80'>
            <FontAwesomeIcon icon={icon} className='text-lg mr-2'/>
            {title}
        </p>
        <p className='ml-6 mt-4 text-3xl font-bold'>{value}</p>
    </div>
  )
}

export default MainTodayAirSingle