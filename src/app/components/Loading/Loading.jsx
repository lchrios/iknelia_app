import { CircularProgress, Grid } from '@material-ui/core'
import React from 'react'

export const Loading = ({ color, size }) => {


    return (
        <Grid container direction="column" alignItems="center"><Grid item><CircularProgress size={size || 48} color={color || "secondary"} /></Grid></Grid>
    )
}