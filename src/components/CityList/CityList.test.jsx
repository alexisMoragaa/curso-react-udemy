import React from 'react'

import CityList from './CityList'
import { render } from '@testing-library/react'


test("City List Render", async () => {

    const ejemplo = [

        {city: "Santiago", country: "Chile", temperature: 33, state:"sunny" },
        {city: "New York", country: "Usa", temperature: 6, state:"fog" },
        {city: "Buenos Aires", country: "Argentina", temperature: 31, state:"cloud"},
        {city: "Ciudad de Mexico", country: "México", temperature: 36, state:"rain" },
    
    ]

    const { findAllByRole } = render (<CityList cities={ejemplo} />)

    const CityListComponent = await findAllByRole("listitem")

    expect(CityListComponent).toHaveLength(4)

})