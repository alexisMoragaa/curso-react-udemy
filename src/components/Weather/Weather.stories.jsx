import React, {Component} from 'react'
import Weather from './Weather'


export default {
    title: 'Weather',
    component: Weather
}

export const sunny = () => <Weather temperature={15} state={"sunny"}/>
export const cloudy = () => <Weather temperature={15} state={"cloudy"}/>
export const fog = () => <Weather temperature={15} state={"fog"}/>
export const cloud = () => <Weather temperature={15} state={"cloud"}/>
export const Rain = () => <Weather temperature={15} state={"rain"}/>
