import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'






test("WeatherDetail Test", async() => {
    const { findAllByRole } = render (<WeatherDetails humidity={22} wind={55} />)

    const component = await findAllByRole("heading")

    expect(component[0]).toHaveTextContent(22)
    expect(component[1]).toHaveTextContent(55)
})


test("WeatherDetail Class", async() => {


    const { findByText } = render(<WeatherDetails humidity={22} wind={55} />)
    
    //Al usar / estamos indicando que es una expresion regular
    const wind = await findByText(/55/)
    const humidity = await findByText(/22/)

    expect(wind).toHaveTextContent("Viento 55 km/h")
    expect(humidity).toHaveTextContent("Humedad 22%")
})