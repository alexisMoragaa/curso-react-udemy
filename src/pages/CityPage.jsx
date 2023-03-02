import React from 'react'
import { Grid } from '@mui/material'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import Forecast from './../components/Forecast'
import ForecastChart from './../components/ForecastChart'

export const CityPage = () => {

    const city = "Santiago"
    const country = "Chile"
    const state = "sunny"
    const temperature = 25
    const humidity = 26
    const wind = 14

    const data = [
        {
            "dayHour": "Jue 18",
            "min": 14,
            "max": 22,
        },
        {
            "dayHour": "Vie 06",
            "min": 18,
            "max": 27,
        },
        {
            "dayHour": "Vie 12",
            "min": 18,
            "max": 28,
        },
        {
            "dayHour": "Vie 18",
            "min": 18,
            "max": 25,
        },
        {
            "dayHour": "Sab 06",
            "min": 15,
            "max": 22,
        },
        {
            "dayHour": "Sab 12",
            "min": 12,
            "max": 19,
        },
        {
            "dayHour": "Sab 06",
            "min": 15,
            "max": 22,
        },
        {
            "dayHour": "Sab 12",
            "min": 12,
            "max": 19,
        }
    ]

    
const forecastItemList = [
    {weekDay:"Lunes", hour:10, state:"sunny", temperature:32},
    {weekDay:"Martes", hour:12, state:"cloudy", temperature:28},
    {weekDay:"Miercoles", hour:14, state:"cloud", temperature:24},
    {weekDay:"Jueves", hour:9, state:"rain", temperature:14},
    {weekDay:"Jueves", hour:12, state:"rain", temperature:19},
    {weekDay:"Jueves", hour:16, state:"rain", temperature:16},
]


  return (
    <Grid container justifyContent="center">

        <Grid item sm={12}> 
            <CityInfo city={city} country={country} /> 
        </Grid>

        <Grid container xs={12} justifyContent="center" alignItems="center">

            <Grid  item sm={8} >
                <Weather temperature={temperature} state={state} />
            </Grid>
            <Grid item sm={4} >
                <WeatherDetails humidity={humidity} wind={wind} />
            </Grid>

        </Grid>

        <Grid item xs={12}>
            <ForecastChart data={data} />
        </Grid>

        <Grid item xs={12} >
            <Forecast forecastItemList={forecastItemList}/>
        </Grid>
    </Grid>
  )
}
