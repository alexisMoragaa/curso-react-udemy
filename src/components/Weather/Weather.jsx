import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import IconState , { validState } from '../IconState'
import { IconContext } from 'react-icons'


const Weather = ({ temperature, state }) => {
  return (
    <div>
      <IconContext.Provider value={{size:'4em'}}>
        <IconState state={state}/>
      </IconContext.Provider>

      <Typography display="inline" variant='h3'>{temperature}</Typography>
    </div>
  )
}

Weather.propTypes = {
    temperature : PropTypes.number.isRequired,
    state: PropTypes.oneOf(validState).isRequired
}

export default Weather