import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const WeatherDetails = ({ humidity, wind }) => {
  return (
    <>
        <Typography variant="h6" >Humedad {humidity}%</Typography>
        <Typography variant="h6" >Viento {wind} km/h</Typography>  
    </>
  )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherDetails