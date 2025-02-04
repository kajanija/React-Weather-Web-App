import React, { useEffect, useState } from 'react'
import MainSearch from './MainSearch'
import MainToday from './MainToday'
import MainTodayForecast from './MainTodayForecast'
import MainTodayAir from './MainTodayAir'


function Main() {


  return (
    <div className='px-4'>
        <MainSearch />
        <MainToday />
        <MainTodayForecast />
        <MainTodayAir />
    </div>
  )
}

export default Main