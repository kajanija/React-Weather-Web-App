import React from 'react'
import { useState } from 'react'

function SettingsNotifications() {
    const [isOn, setOn] = useState(true);
  return (
    <div className='mt-5 text-theme-white'>
        <p className='font-bold text-xl'>Notifications</p>
        <div className='bg-secondary p-4 mt-5 rounded-2xl grid grid-cols-2'>
            <div>
                <p className='uppercase font-bold text-sm'>Notifications</p>
                <p className='opacity-60'>Be Aware of the weather</p>
            </div>
            <div onClick={() => setOn(!isOn)} className={`relative ${isOn ? 'bg-blue-500':'bg-primary'} w-10 h-5 rounded-xl px-1 transition-all duration-300 cursor-pointer justify-self-end `}>
                <div className={`absolute ${isOn ? 'left-6':'left-1'} bg-theme-white w-3 h-3 top-1 rounded-full transition-all duration-300 ease-in-out`}></div>
            </div>
        </div>
    </div>
  )
}

export default SettingsNotifications