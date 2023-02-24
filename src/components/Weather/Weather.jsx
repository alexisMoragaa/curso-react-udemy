import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons'




const statateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain

}


const renderSate = (state) => {

  let Icon = statateByName[state] === undefined ?   statateByName["sunny"] : statateByName[state]
  return < Icon />
}

const Weather = ({ temperature, state }) => {
  return (
    <div>
      <IconContext.Provider value={{size:'4em'}}>

       {renderSate(state)}
      </IconContext.Provider>

        <Typography display="inline" variant='h3'>{temperature}</Typography>
    </div>
  )
}

Weather.propTypes = {
    temperature : PropTypes.number.isRequired,
    state: PropTypes.string.isRequired
}

export default Weather