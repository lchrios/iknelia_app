import React, { useState } from 'react'
import {
    Card,
    Checkbox,
    FormControlLabel,
    Grid,
    Button,
    CircularProgress,
} from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import useAuth from 'app/hooks/useAuth'
import history from '../../../../history'

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

const TherapistFirebaseRegister = () => {
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({agreement:false})
    const classes = useStyles()
    const [message, setMessage] = useState('')
    const { signInWithGoogle } = useAuth()

    const handleChange = (event) => {

        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }
    
    const handleGoogleRegister = (event) => {
        signInWithGoogle()
            .then( result => {
                var { credential, accessToken, user } = result;

                history.push({
                    pathname: '/therapist/info',
                    state: {
                        user: user,
                        email: state.email,
                        password: state.password,
                        withProvider: true,
                        credential: credential,
                        token: accessToken
                    }
                });
            })
            .catch( error => {
                console.error(error);
                setMessage(error.message)
                setLoading(false)
            })
    }

    const handleFormSubmit = () => {
        if (state.agreement)  {
            setLoading(true)
            history.push({
                pathname: '/therapist/info',
                state: {
                    email: state.email,
                    password: state.password,
                    withProvider: "false",
                }
            });
        } else {
            setLoading(false)
            setMessage('Debes aceptar los términos y condiciones para proceder con el registro.');
        }
    }


    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div className="p-8 mt-16 grid justify-center bg-light-gray items-center h-full">
                            <img
                                className="w-full"
                                src="/assets/images/illustrations/posting_photo.svg"
                                alt=""
                            />
                            <Button onClick={() => history.push('/home')} color="secondary" variant="contained" className="x-center" style={{"marginTop": 10}}>
                                VOLVER
                            </Button>
                            
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="px-8 pt-8">
                            <Button
                                onClick={handleGoogleRegister}
                                variant="contained"
                                className={classes.socialButton}
                            >
                                <img
                                    src="/assets/images/logos/google.svg"
                                    alt=""
                                />
                                Iniciar sesión con Google
                            </Button>
                        </div>
                        <p className="text-center mb-0">Ó</p>
                        <div className="p-8 h-full">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Correo"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    value={state.email || ''}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'este campo es obligatorio',
                                        'correo no válido',
                                    ]}
                                />
                                <TextValidator
                                    className="mb-4 w-full"
                                    label="Contraseña"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    value={state.password || ''}
                                    validators={['required']}
                                    errorMessages={['este campo es obligatorio']}
                                />
                                <FormControlLabel
                                    className="mb-4"
                                    name="agreement"
                                    onChange={(e) =>
                                        handleChange({
                                            target: {
                                                name: 'agreement',
                                                value: e.target.checked,
                                            },
                                        })
                                    }
                                    control={
                                        <Checkbox
                                            size="small"
                                            checked={state?.agreement}
                                        />
                                    }
                                    label={
                                        <>
                                            He leído y aceptado los{' '}
                                            <a
                                                href="/"
                                                className={classes.labelLink}
                                            >
                                                términos de servicio.
                                            </a>
                                        </>
                                    }
                                />
                                {message && (
                                    <p className="text-error">{message}</p>
                                )}
                                <div className="flex items-center">
                                    <div className="relative">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={loading || !state.agreement}
                                            type="submit"
                                            onClick={handleFormSubmit}
                                        >
                                            Registrarse
                                        </Button>
                                        {loading && (
                                            <CircularProgress
                                                size={24}
                                                className={
                                                    classes.buttonProgress
                                                }
                                            />
                                        )}
                                    </div>
                                    <span className="mx-2 ml-5">o</span>
                                    <Link to={{
                                        pathname: "/session/signin",
                                        state: {
                                            email: state.email,
                                            password: state.email,  
                                        } 
                                    }}>
                                        <Button className="capitalize">
                                            Iniciar sesión
                                        </Button>
                                    </Link>
                                </div>
                            </ValidatorForm>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default TherapistFirebaseRegister