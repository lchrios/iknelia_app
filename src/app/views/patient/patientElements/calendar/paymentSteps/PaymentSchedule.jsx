import 'date-fns';
import { Card, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import ScheduleSelector from 'react-schedule-selector'
import DateFnsUtils from '@date-io/date-fns';
// import NumericInput from 'react-numeric-input';
// import SaveIcon from '@material-ui/icons/Save';
import api from 'app/services/api';
import useAuth from 'app/hooks/useAuth';
import { Loading } from 'app/components/Loading/Loading';

const usestyles = makeStyles(({ palette, ...theme}) => ({
    hover: {
        color: palette.secondary.main
    }
}))

const PaymentSchedule = ({ setMessage, handleNext, state, setState, hasSched, setHasSched, back }) => {

    const classes = usestyles();

    const [loading, setLoading] = useState(!back)
    const { user } = useAuth() 
    const [options, setOptions] = useState({
        selectionScheme: 'linear',
        startDate: new Date(),
        numDays: 5,
        hourlyChunks: 1,
        minTime: 5, 
        maxTime: 23,
    }) 

    const handleChange = newSchedule => {
        
        var selected = state.schedule.filter(x => newSchedule.indexOf(x) === -1);
        if (selected.length === 1) {
            setState({
                ...state,
                date: selected[0].toISOString(),
            })
            handleNext();
        }
    }

    useEffect(() => {
        if (state?.date && !back) {
            handleNext();
        }
    }, [state, back, handleNext])

    useEffect(() => {
        if (!back) {
            api.get(`/u/${user.uid}/schedule`)
            .then( res => {
                if (res.status === 204) {
                    setMessage("El terapeuta aún no tiene un horario")
                } else {
                    var schedDate = res.data.schedule.map(sched => new Date(sched))
                    setHasSched(true)
                    setState({
                        ...state,
                        schedule: schedDate,
                    })
                    setOptions(res.data.options)
                }
                setLoading(false);
            })
            .catch( er => {
                console.error(er);
            })
        }
    }, [back, user.uid, setMessage, setHasSched, setState, state])
    
    const handleDate = date => {
        setOptions({
            ...options,
            startDate: date,
        })
    }

    return (<>
        { loading
        ?   <Loading className="p-4 m-5 align-self-center"/>
        :   <>{ hasSched 
            ?   <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                    className="mt-5"
                >
                    <Grid 
                        item
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                    >            
                        <Card elevation={6} className="p-4 h-full">
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid 
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    xs={12}
                                >
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            className="ml-4 mb-4"
                                            variant="inline"
                                            format="dd/MM/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Escpge la fecha"
                                            name="startDate"
                                            value={options.startDate}
                                            onChange={handleDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        
                        </Card>
                        
                    </Grid>
                    <Grid 
                        item
                        lg={12}
                        md={12}
                        sm={12}
                        xd={12}
                    >            
                        <Card className="p-4 h-full">
                            <p className="h5 text-primary">Selecciona uno de los horarios resaltados</p>
                            <ScheduleSelector
                                selection={state.schedule}
                                numDays={options.numDays}
                                minTime={options.minTime}
                                maxTime={options.maxTime}
                                hourlyChunks={options.hourlyChunks}
                                startDate={options.startDate}
                                hoveredColor={classes.hover.color}
                                dateFormat="D/MM"
                                selectionScheme={options.selectionScheme}
                                onChange={handleChange}
                                renderDataCell={(selected) => {
                                    return <p>{selected}</p>
                                }}
                            />
                        </Card>
                    </Grid>  
                </Grid>
            :   undefined
            }</>
        }
    </>
    )

}

export default PaymentSchedule