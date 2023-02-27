import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'


const forecastItemList = [
    {weekDay:"Lunes", hour:10, state:"sunny", temperature:32},
    {weekDay:"Martes", hour:12, state:"cloudy", temperature:28},
    {weekDay:"Miercoles", hour:14, state:"cloud", temperature:24},
    {weekDay:"Jueves", hour:9, state:"rain", temperature:14},
    {weekDay:"Jueves", hour:12, state:"rain", temperature:19},
    {weekDay:"Jueves", hour:16, state:"rain", temperature:16},
]


test('Forecast render', async () => {
    const { findAllByTestId } = render (<Forecast forecastItemList={forecastItemList}/>)

    const forecastItem = await findAllByTestId("forecast-item-container")

    expect(forecastItem).toHaveLength(6);
})