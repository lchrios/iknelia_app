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
import firebase from 'firebase/app'
import 'firebase/firestore'
import { Link } from 'react-router-dom'
import useAuth from 'app/hooks/useAuth'
import history from 'history.js'
import {NavLogo} from '../../landing/components/Navbar_sc/NavbarElements'
import axios from 'axios'



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

const FirebaseRegister = () => {
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({})
    const classes = useStyles()
    const [message, setMessage] = useState('')
    const { createUserWithEmailAndPassword, signInWithGoogle } = useAuth()

    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state,
            [name]: value,
        })
    }
    const handleGoogleRegister = async (event) => {
        try {
            await signInWithGoogle()

            let user = firebase.auth().currentUser

            const user_data = {
                email: user.email,
                name: user.name || user.email,
                age: 18,
                phone: "3314895548",
                img: '',
                therapist: null,
                sessions: [],
                payment_met: [],
                location: ["Guadalajara", "Jalisco", "Mexico"],
                blogs: []
            }

            var db = firebase.firestore()

            await db.collection("users").doc(user.uid).set(user_data)
            await db.collection("therapists").doc(user.uid).set({blogs: []});
            await db.collection('roles').doc(user.uid).set({role: "patients"})

            history.push('/'+user.uid+'/dashboard')
        } catch (e) {
            setMessage(e.message)
            setLoading(false)
            console.log(e)
        }
    }

    const handleFormSubmit = async () => {
        try {
            setLoading(true)

            const user_data = {
                email: state.email,
                name: state.email,
                age: 18,
                phone: "+5213114895548",
                img: "https://firebasestorage.googleapis.com/v0/b/iknelia-3cd8e.appspot.com/o/usuarios/memerevflash.png?alt=media&token=46df4dfe-edc4-4b11-9b8a-33a74dae4535",
                therapist: null,
                sessions: [],
                payment_met: [],
                location: ["Guadalajara", "Jalisco", "Mexico"],
                answered: false,
                blogs: [],
            }

            console.log({ 
                email: state.email, 
                password: state.password, 
                userdata: {...user_data} 
            })
           
            axios.post('http://localhost:9999/iknelia-3cd8e/us-central1/api/auth/signuser', 
                { 
                    email: state.email, 
                    password: state.password, 
                    userdata: {...user_data} 
                })
                .then( () => {

                    firebase.auth().signInWithEmailAndPassword(state.email, state.password)
                        .then( user => {
                            history.push('/'+user.uid+'/dashboard');
                        })
                        .catch( error => {
                            console.error('Error iniciando sesion');
                            setLoading(false)
                            console.error(error);
                            setMessage(error.message)
                        })
                    
                })
                .catch( error => {
                    setLoading(false)
                    console.error(error);
                    setMessage(error.message)
                })


        } catch (e) {
            setLoading(false)
            console.log(e)
            setMessage(e.message)
        }
    }

    let { email, password, agreement } = state

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
                            <Button onClick={() => history.push('/home')} color="secondary" variant="contained" className="x-center">
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
                                    value={email || ''}
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
                                    value={password || ''}
                                    validators={['required']}
                                    errorMessages={['este campo es obligatorio']}
                                />
                                <FormControlLabel
                                    className="mb-4"
                                    name="agreement"
                                    validators={['required']}
                                    errorMessages={['Este campo es obligatorio']}
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
                                            checked={agreement || false}
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
                                    <Link to='/session/dataform'>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={loading}
                                            type="submit"
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
                                    </Link>
                                    </div>
                                    <span className="mx-2 ml-5">o</span>
                                    <Link to="/session/signin">
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

export default FirebaseRegister
