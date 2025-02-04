import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faList, faMap, faSliders } from '@fortawesome/free-solid-svg-icons'
import SidebarMenuItem from './SidebarMenuItem'

function Sidebar() {
  return (
    <div className='left-[10px] right-[10px] fixed z-100 bottom-5 sm:relative sm:bottom-0  bg-secondary p-2 sm:py-4 grid grid-cols-4 sm:grid-cols-1 sm:grid-rows-[repeat(4,max-content)] sm:mt-5 justify-center rounded-3xl gap-5'>
        <SidebarMenuItem icon={faCloudSunRain} title="Weather" link="/" />
        <SidebarMenuItem icon={faList} title="Cities" link="/cities" />
        <SidebarMenuItem icon={faMap} title="Map" link="/map" />
        <SidebarMenuItem icon={faSliders} title="Settings" link="/settings" />
    </div>
  )
}

export default Sidebar