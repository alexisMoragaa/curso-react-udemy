import React from 'react'
import { Grid } from '@mui/material'
import {Link} from '@mui/material';
import {Typography} from '@mui/material';

export const NotFoundPages = () => {
  return (
    <Grid  
        display={"flex"}
        justifyContent={"center"}
        flexDirection="column"
        alignItems={"center"}
        height="80vh"
      
        
    >

        <Typography variant="h1">404</Typography>
        <Typography fontSize={"2em"}>Not Found</Typography>
        
    </Grid>

  )
}
