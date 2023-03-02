import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

import { AreaChart, Area, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ForecastChart = ( { data } ) => {
  return (
    <Grid container>
        <ResponsiveContainer width="95%" height={300}>
            <AreaChart 
            height={250}
            // width={1300}
            margin={{top:20, bottom:20, left:5, right:5}}
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
        </ResponsiveContainer>
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