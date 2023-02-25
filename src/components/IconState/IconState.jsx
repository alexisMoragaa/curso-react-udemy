import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons'




const validState = [  'cloud',  'cloudy',  'fog',  'sunny',  'rain',]

const statateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
  
  }

  const renderSate = (state) => {
    let Icon = statateByName[state] === undefined ? statateByName["sunny"] : statateByName[state]
    return < Icon />
  }




const IconState = ({ state }) => {
  return (
    <IconContext.Provider value={{size:'3em'}}>
        {renderSate(state)}
    </IconContext.Provider>
  )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validState).isRequired,
}

export default IconState