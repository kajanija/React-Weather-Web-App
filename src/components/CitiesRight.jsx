import React from 'react'
import CitiesRightToday from './CitiesRightToday'
import CitiesRightTodayForecast from './CitiesRightTodayForecast'
import CitiesRightDaysForecast from './CitiesRightDaysForecast'

function CitiesRight() {
  return (
    <div className='p-4 grid text-theme-white mt-5'>
      <CitiesRightToday />
      <CitiesRightTodayForecast />
      <CitiesRightDaysForecast />
    </div>
  )
}

export default CitiesRight