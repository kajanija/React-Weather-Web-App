import React from 'react'
import MainSearch from './MainSearch'
import SettingsUnits from './SettingsUnits'
import SettingsNotifications from './SettingsNotifications'
import SettingsGeneral from './SettingsGeneral'

function SettingsMain() {
  return (
    <div>
        <MainSearch />
        <SettingsUnits />
        <SettingsNotifications />
        <SettingsGeneral />
    </div>
  )
}

export default SettingsMain