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
    Box,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core'
import { Home, Mail, Phone, DataUsage } from '@material-ui/icons'
import clsx from 'clsx'
import api from 'app/services/api'
import useAuth from 'app/hooks/useAuth'

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

const TherapistDataForm = ({ location }) => {
    const [loading, setLoading] = useState(false)
    const classes = useStyles()
    const steps = getSteps()
    const { user } = useAuth()
    const [activeStep, setActiveStep] = useState(0)
    const [content, setContent] = useState()
    const [message, setMessage] = useState("")
    const [state, setState] = useState(location.state)

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
        <Box className="m-sm-30">
            <div className="max-w-600 mx-auto">
                <h4>Bienvenido a Iknelia, tu consultorio online</h4>
                <p>
                    Por favor llena este formulario para aplicar a nuestra plataforma
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
                    <h3>¿Tienes un título que sea validado por una institución oficial?</h3>
                    {/**
                     * *TODO MANEJAR EL ERROR, CUANDO NO CONFIRMAN QUE SON PROFESIONALES. 
                     */}
                    <FormControlLabel
                        control = {
                            <Checkbox 
                                onChange={handleAgree} 
                                name="grade"/>
                            }
                            label="Confirmo que soy profesional"
                    />
                </div>
            </div>
        </Box>,
        <Box className="m-sm-30 p-6">
            <div className="max-w-600 mx-auto">
                <h4>Ahora, compártenos tus datos de contacto.</h4>
                <TextField
                    className="mb-4"
                    label="Correo electrónico"
                    value={state.email || ''}
                    fullWidth
                    name="email"
                    disabled={state.email ? true : false}
                    onChange={handleChange}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Mail/>
                        </InputAdornment>
                    )}}
                />
                <Divider className="mb-6" />
                <TextField
                    className="mb-4"
                    label="Dirección"
                    name="address"
                    fullWidth
                    value=""
                    placeholder="Dirección"
                    onChange={handleChange}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Home/>
                        </InputAdornment>
                    )}}
                />
                <Divider className="mb-8" />
                <TextField
                    className="mb-4"
                    label="Teléfono"
                    name="phone"
                    fullWidth
                    onChange={handleChange}
                    placeholder="(LADA)XXXXXXXXXX"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Phone/>
                        </InputAdornment>
                    )}}
                />
                <TextField
                    className="mb-4"
                    label="Cédula profesinal"
                    name="cedula"
                    fullWidth
                    onChange={handleChange}
                    placeholder="XXXXXXXXXX"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <DataUsage/>
                        </InputAdornment>
                    )}}
                />
            </div>
        </Box>, 
        <Box className="m-sm-30 p-3">
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
            <div className="max-w-600 mx-auto mt-4">
                <h4>Sube tu CV cómo documento PDF</h4>
                <Divider className="mb-8" />

                <input
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
        </Box> 
    ]
        
    useEffect(() => {
            setContent(views[activeStep])
        }, [activeStep])

    const handleNext = () => {
        if (activeStep == 0 && !state.grade) {
            // *TODO REDIRECCIONAR A PÁGINA DE FALLO (PORQUE NO SON PROFESIONALES)
        } else if (activeStep < 2 || (activeStep == 0 && state.grade)) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
            setMessage("")

        } else if (activeStep == 2) {
            api.post("auth/signuser", {

            })
            .then( res => {
                
            })
            .catch( error => {
                console.error(error);
            })
            // TODO: enviar informacion a la base de datos e iniciar sesión
            // TODO ESK: Crear página de registro exitoso
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
                            {message && ( // TODO:@esq Darle más formato a ese mensaje, muestra los errores que pueden ir ocurriendo
                                <p className="text-error">{message}</p>
                            )}          
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default TherapistDataForm