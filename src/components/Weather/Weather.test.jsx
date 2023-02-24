import React from 'react'

import Weather from './Weather'
import { render } from '@testing-library/react'

test("Weather Rain", async()=> {
    // AAA Arange Act Assert

    const temperature = 10
    const state = "rain"

    const { findAllByRole } = render(<Weather temperature={temperature} state={state}/>)

    const WeatherComponent =  await findAllByRole("heading")

    expect(WeatherComponent[0]).toHaveTextContent(temperature)

})



test("Weather Cloud", async()=> {
    // AAA Arange Act Assert

    const temperature = 15
    const state = "cloud"

    const { findAllByRole } = render(<Weather temperature={temperature} state={state}/>)

    const WeatherComponent =  await findAllByRole("heading")

    expect(WeatherComponent[0]).toHaveTextContent(temperature)

})