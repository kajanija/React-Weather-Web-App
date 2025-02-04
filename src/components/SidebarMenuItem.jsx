import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'


function SidebarMenuItem({icon,title,link}) {
  return (
    <NavLink to={link} end className={({ isActive }) => `${isActive ? 'opacity-100' : 'opacity-50'} text-center cursor-pointer hover:opacity-75 p-2 transition-all duration-300 ease-in-out`}>
            <FontAwesomeIcon icon={icon} className='text-theme-white mb-3' />
            <p className='text-theme-white'>{title}</p>
    </NavLink>
  )
}

export default SidebarMenuItem