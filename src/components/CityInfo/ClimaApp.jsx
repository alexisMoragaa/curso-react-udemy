import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';

const ClimaApp = ({city, country}) => {
  return (
    <div>
        <Typography variant="h4">{city}</Typography>
        <Typography variant="h5">{country}</Typography>
    </div>
  )
}

ClimaApp.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default ClimaApp