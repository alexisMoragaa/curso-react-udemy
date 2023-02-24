import React , { Component } from 'react'
import CityList from './CityList'



export default  {
    title : 'City List',
    Component : CityList
}


const ejemplo = [

    {city: "Santiago", country: "Chile", temperature: 33, state:"sunny" },
    {city: "New York", country: "Usa", temperature: 6, state:"fog" },
    {city: "Buenos Aires", country: "Argentina", temperature: 31, state:"cloud"},
    {city: "Ciudad de Mexico", country: "México", temperature: 36, state:"rain" },

]


export const ListExample = () => <CityList cities={ejemplo}/>