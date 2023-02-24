import React from 'react'
import PropTypes from 'prop-types'
import ClimaApp from '../CityInfo/ClimaApp'
import Weather from '../Weather/Weather'


const renderClimaApp = (data) => {
    
    const { city, country, temperature, state} = data

    return(
        <li key={city}>
            <ClimaApp city={city} country={country} />
            <Weather temperature={temperature} state={state}/>
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