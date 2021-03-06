import { CircularProgress, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

export const Loading = () => {


    return (
        <Grid container direction="column" alignItems="center"><Grid item><CircularProgress color="secondary" /></Grid></Grid>
    )
}