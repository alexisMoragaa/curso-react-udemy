import React from 'react'
import PropTypes from 'prop-types'
import ClimaApp from '../CityInfo/ClimaApp'
import Weather from '../Weather/Weather'
import { Grid } from '@mui/material'


const renderClimaApp = (data) => {
    
    const { city, country, temperature, state} = data

    return(
        <li key={city}>
            <Grid container>
                <Grid item
                    md={4}
                    xs={12}>

                    <ClimaApp city={city} country={country} />
                </Grid>
                <Grid item
                    md={8}
                    xs={12}
                    >
                    <Weather temperature={temperature} state={state}/>
                </Grid>

            </Grid>
        </li>

    ) 
}

const CityList = ({cities}) => {
  return (
    <ul >
        {
            cities.map( datos => renderClimaApp(datos) )
        }
    </ul>
  )
}

CityList.propTypes = {
    cities : PropTypes.array.isRequired
}

export default CityList