import React from 'react'
import { Link } from 'react-router-dom'

function SettingsSignUp() {
  return (
    <div className='bg-secondary p-5 rounded-2xl mt-5'>
        <div className='pb-5 border-b border-gray-600 text-theme-white'>
            <p className='text-xl font-bold'>Newer forget your umbrella</p>
        </div>
        <p className='text-sm opacity-80 text-theme-white mt-3'>Signup for our daly weather newsletter personalized just for you. </p>
        <Link to="/">
            <p className='p-3 rounded-2xl bg-blue-500 mt-5 text-sm text-theme-white font-medium text-center'>Signup</p>
        </Link>
    </div>
  )
}

export default SettingsSignUp