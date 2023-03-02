import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'





const validState = [  'cloud',  'cloudy',  'fog',  'sunny',  'rain',]

const statateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
  
  }


const IconState = ({ state }) => {
  let Icon = statateByName[state] === undefined ? statateByName["sunny"] : statateByName[state]
  return < Icon />

}

IconState.propTypes = {
    state: PropTypes.oneOf(validState).isRequired,
}
export  { validState }
export default  IconState 