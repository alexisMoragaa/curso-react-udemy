import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForecastItem",
    component: ForecastItem
}

export const LunesSoleado = () => (
    <ForecastItem  weekDay="lunes" hour={10} state="sunny" temperature={26} />
    )
