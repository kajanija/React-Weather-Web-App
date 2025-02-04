import React from 'react'
import { Link } from 'react-router-dom'

function SettingsAd() {
  return (
    <div className='bg-secondary p-5 rounded-2xl'>
        <div className='pb-5 border-b border-gray-600 text-theme-white'>
            <p className='text-[30px] font-bold'>Advanced</p>
        </div>
        <p className='text-lg font-bold opacity-80 text-theme-white mt-3'>Get new experience</p>
        <ul className='list-disc p-5 text-theme-white opacity-50 mt-5'>
            <li>Ad free</li>
            <li>Healt activities overview</li>
            <li>Severe weather notifications</li>
        </ul>
        <Link to="/">
            <p className='p-3 rounded-2xl bg-second mt-5 text-[34px] text-theme-white font-bold text-center opacity-80'>$5.99<span className='text-sm font-normal'>/month</span></p>
        </Link>
    </div>

  )
}

export default SettingsAd