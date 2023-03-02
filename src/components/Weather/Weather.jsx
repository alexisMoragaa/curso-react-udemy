import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import IconState , { validState } from './../IconState'
import { IconContext } from 'react-icons'
import {Grid} from '@mui/material'

const Weather = ({ temperature, state }) => {
  return (
    <Grid container  alignItems="center" >
      <IconContext.Provider value={{size:'6em'}}>
        <IconState state={state}/>
      </IconContext.Provider>

      <Typography display="inline" variant='h2'>{temperature}</Typography>
    </Grid>
  )
}

Weather.propTypes = {
    temperature : PropTypes.number.isRequired,
    state: PropTypes.oneOf(validState).isRequired
}

export default Weather