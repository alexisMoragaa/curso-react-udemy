import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import ForecastItem from '../ForecastItem/ForecastItem'
import { validState } from '../IconState'

const renderForecastItem = (forecastItemList) => {
    const { weekDay, hour, state, temperature } = forecastItemList

    return (
        <Grid data-testid="forecast-item-container"  
            item key={`${weekDay}${hour}`}>

            <ForecastItem weekDay={weekDay}
                hour={hour}
                state={state}
                temperature={temperature}
                />
        
        </Grid>
    )
}


const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container
        justifyContent="space-around"
        alignItems="center">
        {
            forecastItemList.map( forecast => renderForecastItem(forecast) )
        }
    </Grid>
  )
}

Forecast.propTypes = {

    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validState).isRequired,
        temperature: PropTypes.number.isRequired
    })).isRequired
}

export default Forecast