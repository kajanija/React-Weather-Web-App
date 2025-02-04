import React from 'react'

function SettingsUnitsSingle({title,options_number,options=[],active=1}) {
  return (
    <>
    <p className='mt-4 mb-4 opacity-80 uppercase text-sm font-medium'>{title}</p>
    <div className={`grid grid-cols-${options_number} bg-primary p-2 rounded-3xl items-center text-center`}>
        {
            options.map((key,index) => (
                <p key={key} className={`${active === index ? 'bg-secondary':''} p-1 px-3 rounded-2xl cursor-pointer text-sm`}>{options[index]}</p>
            ))
        }
    </div>
    </>
  )
}

export default SettingsUnitsSingle