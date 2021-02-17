import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Grid,
    Button,
    CircularProgress,
    Stepper,
    Step,
    StepLabel,
    Input, 
    InputLabel, 
    InputAdornment, 
    FormControl,
    Icon,
    TextField,
    Divider,
    MenuItem,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core'
import { Mail } from '@material-ui/icons'
import UserData from './infoForms/UserData.jsx'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import history from 'history.js'
import UserProfileForm from './infoForms/UserProfileForm'
import UserPreInfo from './infoForms/PreInfo'

const getSteps = () =>{
    return ['Bienvenido', 'Contacto', 'Perfil']   
} 

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 650,
        borderRadius: 12,
        margin: '1rem',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    socialButton: {
        width: '100%',
        '& img': {
            margin: '0 8px',
        },
    },
    labelLink: {
        color: palette.primary.main,
        textDecoration: 'underline',
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

const UserDataForm = ({ location }) => {
    const [loading, setLoading] = useState(false)
    const classes = useStyles()
    const steps = getSteps()
    const [activeStep, setActiveStep] = useState(0)
    const [content, setContent] = useState()
    const [state, setState] = useState(location.state)
    console.log(location.state)

    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleAgree = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const views = [
        <Card className="m-sm-30">
            <div className="max-w-600 mx-auto">
                <h4>Bienvenido a Iknelia, tu plataforma de soporte psicológico en línea</h4>
                <p>
                    Por favor responde con honestidad
                </p>
                <Divider className="mb-8" />

                <TextField
                    className="mb-4"
                    label="Nombre"
                    size="small"
                    name="name"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    className="mb-4"
                    label="Apellidos"
                    size="small"
                    name="lastname"
                    fullWidth
                    onChange={handleChange}
                >
                </TextField>
                <div>
                    <h3>¿Eres mayor de edad?</h3>
                    <FormControlLabel
                        control = {
                            <Checkbox 
                                onChange={handleAgree} 
                                name="age"/>
                        }
                        label="Confirmo que soy mayor de edad"
                    />
                </div>
            </div>
        </Card>,
        <Card className="m-sm-30 p-6">
            <div className="max-w-600 mx-auto">
                <TextField
                    id="input-with-icon-textfield"
                    label="Correo electrónico"
                    value={state.email || ''}
                    disabled={state.email ? true : false}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Mail/>
                        </InputAdornment>
                    ),
                    }}
                />
                <Divider className="mb-6" />
                <FormControl>
                    <InputLabel htmlFor="input-with-icon-adornment">Dirección</InputLabel>
                    <Input
                        onChange={handleChange}
                        fullWidth
                        id="input-with-icon-adornment"
                        name="address"
                        startAdornment={
                            <InputAdornment position="start">
                                <Icon>home</Icon>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Divider className="mb-8" />
                <FormControl>
                    <InputLabel htmlFor="input-with-icon-adornment">Teléfono</InputLabel>
                    <Input
                    name="phone"
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <Icon>phone</Icon>
                        </InputAdornment>
                    }
                    />
                </FormControl>
                <Divider className="mb-8" />
                
            </div>
        </Card>, 
        <Card className="m-sm-30 p-6">
            <div className="max-w-600 mx-auto">
                <h4>Selecciona una fotografía para tu perfil</h4>
                <Divider className="mb-8" />

                <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    className={classes.input}
                />
                
                    <label  htmlFor="contained-button-file">
                        <Button className="x-center" variant="contained" color="primary" component="span">
                                Subir 
                        </Button>
                    </label>
                </div>
        </Card> 
    ]
        
    useEffect(() => {
            setContent(views[activeStep])
        }, [activeStep])

    const handleNext = () => {
        console.log(state)
        if(activeStep != 2) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1)

        } else {
            // TODO: enviar informacion a la base de datos e iniciar sesión
            console.log(state)        
        }

    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    return(
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    
                </div>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div className="p-8 h-full">
                            <div>
                                {activeStep === steps.length ? (
                                    <div className="flex items-center">
                                        <div className="flex items-center mb-4">
                                            <Icon>done</Icon> <span className="ml-2">Tus respuestas han sido enviadas :D</span>
                                        </div>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={handleReset}
                                        >
                                            Reset
                                        </Button>
                                    </div>
                                ) : (
                                    <div className=" flex-column items-center">
                                        <Card>
                                            {content}
                                        </Card>
                                        <div className="flex mt-3">
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    onClick={handleNext}
                                                >
                                                    {activeStep == steps.length - 1
                                                    ? 'Enviar respuestas' : 'Siguiente'}
                                                </Button>
                                                {loading && (
                                                    <CircularProgress
                                                        size={24}
                                                        className={
                                                            classes.buttonProgress
                                                        }
                                                    />
                                                )}
                                                <span className="mx-2 ml-5">ó</span>
                                                    <Button className="capitalize"
                                                        variant={activeStep === 0 ? 'text' : 'contained'}
                                                        color={activeStep === 0 ? 'primary' : 'secondary'}
                                                        disabled={activeStep === 0}
                                                        onClick={handleBack}
                                                    >
                                                        Volver
                                                    </Button>
                                        </div>
                                    </div>
                                )}
                            </div>          
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default UserDataForm