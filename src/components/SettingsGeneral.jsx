import React from 'react'
import { useState } from 'react'

function SettingsGeneral() {
    const [time, setTime] = useState(true);
    const [location, setLocation] = useState(true);
  return (
    <div className='mt-5 text-theme-white'>
        <p className='font-bold text-xl'>General</p>
        <div className='grid gap-5 bg-secondary p-4 rounded-2xl mt-5'>
            <div className='bg-secondary pb-6 mt-5 grid grid-cols-2 border-b-1 border-gray-600'>
                <div>
                    <p className='uppercase font-bold text-sm'>12-Hour Time</p>
                </div>
                <div onClick={() => setTime(!time)} className={`relative ${time ? 'bg-blue-500':'bg-primary'} w-10 h-5 rounded-xl px-1 transition-all duration-300 cursor-pointer justify-self-end `}>
                    <div className={`absolute ${time ? 'left-6':'left-1'} bg-theme-white w-3 h-3 top-1 rounded-full transition-all duration-300 ease-in-out`}></div>
                </div>
            </div>
            <div className='bg-secondary pb-4 grid grid-cols-2'>
                <div>
                    <p className='uppercase font-bold text-sm'>Location</p>
                    <p className='opacity-60'>Get weather of your loacation</p>
                </div>
                <div onClick={() => setLocation(!location)} className={`relative ${location ? 'bg-blue-500':'bg-primary'} w-10 h-5 rounded-xl px-1 transition-all duration-300 cursor-pointer justify-self-end `}>
                    <div className={`absolute ${location ? 'left-6':'left-1'} bg-theme-white w-3 h-3 top-1 rounded-full transition-all duration-300 ease-in-out`}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SettingsGeneral