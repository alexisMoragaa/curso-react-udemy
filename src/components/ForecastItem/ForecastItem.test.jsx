import React from 'react'
import { render } from '@testing-library/react'

import ForecastItem from './ForecastItem'

const weekDayV="Lunes"
const hourV = 10
const temperatureV = 22
const stateV ="rain"

test('ForecastItem Render', async() => {
    const { findByText } = render (<ForecastItem weekDay={weekDayV} hour={hourV} temperature={temperatureV} state={stateV} />)

    const weekDay = await findByText(/Lunes/)
    const hour = await findByText(/10/)
    const temperature = await findByText(/22/)
    // const state = await findByText(/sunny/)
    

    expect(weekDay).toHaveTextContent(weekDayV)
    expect(hour).toHaveTextContent(hourV)
    expect(temperature).toHaveTextContent(temperatureV)
    // expect(state).toHaveTextContent(stateV)

})