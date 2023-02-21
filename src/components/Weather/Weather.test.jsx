import React from 'react'

import Weather from './Weather'
import { render } from '@testing-library/react'

test("Weather render", async()=> {
    // AAA Arange Act Assert

    const temperature = 10;

    const { findAllByRole } = render(<Weather temperature={temperature}/>)

    const WeatherComponent =  await findAllByRole("heading")

    expect(WeatherComponent[0]).toHaveTextContent(temperature)

})