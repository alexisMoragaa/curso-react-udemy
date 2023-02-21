import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const Weather = ({ temperature }) => {
  return (
    <div>
        <Typography variant='h3'>{temperature}</Typography>
    </div>
  )
}

Weather.propTypes = {
    temperature : PropTypes.number.isRequired
}

export default Weather