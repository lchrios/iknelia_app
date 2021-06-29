import React from 'react';
import maintenance from '../../../../assets/images/maintenance/SESSION-MANTENIMIENTO.png'; 
import {makeStyles} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import history from '../../../../history'

const useStyles = makeStyles({
    root: {
        backgroundColor:'#e4cff5',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        height:'100vh',
        flexDirection:'column'
    },
    background: {
        display:'flex',
        justifyContent:'center',
    },
    title: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    img: {
        width:'100vh'
    },
    button: {
        display:'flex',
        justifyContent:'center',
        marginTop:'40px'
    }
}) 

export default function SessionMaintenanceView() {
const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={12} >
                <Grid item xs={3} sm={12} md={12} lg={12} xl={12}>
                    <h1 className={classes.title}>Estamos en proceso de mantenimiento para ofrecerte la mejor experiencia</h1>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className={classes.background}>
                        <img
                        className={classes.img} 
                        src={maintenance}
                        alt='mantenimiento'/>
                    </div>
                    <div className={classes.button}>
                        <Button 
                        variant="contained" 
                        color='secondary'
                        onClick={() => history.push('/home')}>Volver al inicio</Button>
                    </div>
                </Grid>
            </Grid>
    </div>

    )

}