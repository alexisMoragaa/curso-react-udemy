import React from 'react'
import PropTypes from 'prop-types'
import ClimaApp from '../CityInfo/ClimaApp'
import Weather from './../Weather'
import { Grid, List, ListItem } from '@mui/material'


const renderClimaApp = (eventOnClickCity) => (data) => {
    
    const { city, country, temperature, state} = data

    return(
        <ListItem button key={city} onClick={eventOnClickCity}>
            <Grid container justifyContent="center" alignItems="center">
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
        </ListItem>

    ) 
}

const CityList = ({cities, onClickCity}) => {
  return (
    <ul >
        {
            cities.map( datos => renderClimaApp(onClickCity)(datos) )
        }
    </ul>
  )
}

CityList.propTypes = {
    cities : PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList