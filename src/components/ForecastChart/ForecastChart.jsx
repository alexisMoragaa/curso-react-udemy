import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

import { AreaChart, Area, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend  } from 'recharts'

const ForecastChart = ( { data } ) => {
  return (
    <Grid container>
        <AreaChart 
        height={250}
        width={700}
        margin={{top:20, bottom:20, left:5, right:20}}
        data={data}
        >
            <XAxis dataKey="dayHour"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            {/* <CartesianGrid></CartesianGrid> */}
            <Area type="monotone" stroke='#FF0000' dataKey="max" fill="#FF0000"></Area>
            <Area type="monotone" stroke='#0000FF' dataKey="min" fill="#0000FF"></Area>
        </AreaChart>
    </Grid>
    
  )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired
        })
    ).isRequired
}

export default ForecastChart