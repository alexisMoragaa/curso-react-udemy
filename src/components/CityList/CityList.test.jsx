import React from 'react'

import CityList from './CityList'
import { render,fireEvent } from '@testing-library/react'


const ejemplo = [

    {city: "Santiago", country: "Chile", temperature: 33, state:"sunny" },
    {city: "New York", country: "Usa", temperature: 6, state:"fog" },
    {city: "Buenos Aires", country: "Argentina", temperature: 31, state:"cloud"},
    {city: "Ciudad de Mexico", country: "México", temperature: 36, state:"rain" },

]



test("City List Render", async () => {

    const { findAllByRole } = render (<CityList cities={ejemplo} />)

    const CityListComponent = await findAllByRole("button")

    expect(CityListComponent).toHaveLength(4)

})


test('Click on CityList', async() => {

    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render (<CityList cities={ejemplo} onClickCity={fnClickOnItem}/>)

    const items = await findAllByRole("button")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)

})