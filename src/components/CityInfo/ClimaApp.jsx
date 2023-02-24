import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';

const ClimaApp = ({city, country}) => {
  return (
    <div>
        <Typography variant="h4" display="inline">{city}, </Typography>
        <Typography variant="h5" display="inline">{country}</Typography>
    </div>
  )
}

ClimaApp.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default ClimaApp