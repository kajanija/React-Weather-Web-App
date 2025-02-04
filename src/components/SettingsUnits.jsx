import React from 'react'
import SettingsUnitsSingle from './SettingsUnitsSingle'

function SettingsUnits() {
  return (
    <div className='mt-5 text-theme-white'>
        <p className='font-bold text-xl'>Units</p>
        <div className='bg-secondary p-4 mt-5 rounded-2xl'>
            <SettingsUnitsSingle title="Temperature" options_number={2} options={["Cilesius","Fahrenheit"]} active={0}/>
            <SettingsUnitsSingle title="Wind Speed" options_number={3} options={["km/h","m/s","Knots"]} active={0}/>
            <SettingsUnitsSingle title="Pressure" options_number={4} options={["hPa","Inches","kPa","mm"]} active={2}/>
            <SettingsUnitsSingle title="Distance" options_number={2} options={["Kilometes","Milse"]} active={0}/>
        </div>
    </div>
  )
}

export default SettingsUnits
