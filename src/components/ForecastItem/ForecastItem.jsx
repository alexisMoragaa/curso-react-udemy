import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
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


const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (

    <Grid container direction="column" justify="center" alignItems="center">
        <Grid item >
            <Typography>{weekDay}</Typography>
        </Grid>

        <Grid item >
            <Typography>{hour}</Typography>
        </Grid>

        <Grid item >
            <IconContext.Provider value={{size:'3em'}}>
                {renderSate(state)}
            </IconContext.Provider>
        </Grid>

        <Grid item >
            <Typography>{temperature}°</Typography>
        </Grid>

    </Grid>
  )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validState).isRequired,
    temperature: PropTypes.number.isRequired
}
export default ForecastItem




