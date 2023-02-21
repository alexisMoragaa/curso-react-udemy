import React, {Component} from 'react'
import Weather from './Weather'


export default {
    title: 'WeatherComponent',
    component: Weather
}

export const WeatherExample = () => <Weather temperature={15}/>
