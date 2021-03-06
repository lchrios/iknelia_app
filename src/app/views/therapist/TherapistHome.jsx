import React, { useState, useEffect } from "react";
import { Icon, IconButton, Hidden, useMediaQuery} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { useTheme } from '@material-ui/core/styles'
import {
    MatxSidenavContainer,
    MatxSidenav,
    MatxSidenavContent,
} from 'app/components'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import TherapistHomeContent from './components/home/TherapistHomeContent'
import TherapistHomeSidenav from './components/home/TherapistHomeSidenav'
import useAuth from "app/hooks/useAuth";
import api from "app/services/api";



const usestyles = makeStyles(({ palette, ...theme }) => ({
    headerBG: {
        height: 345,
        '@media only screen and (max-width: 959px)': {
            height: 400,
        },
    },
}))



const TherapistHome = () => {
    
    const [open, setOpen] = useState(true)

    const { user } = useAuth();
    /**
     * * Es el estado de los valores details_submitted o charges enabled relativos a stirpe para validar renderizado de snackbar
     */
    const [stripe, setStripe] = useState()
    const [stripeId, setStripeId] = useState()
    const [stripeDetails, setStripeDetails] = useState()
    const [stripeCharges, setStripeCharges] = useState()
    const theme = useTheme()
    const classes = usestyles()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const [loading, setLoading] = useState(true)
    const [sessions, setSessions] = useState()
    const [users, setUsers] = useState()
    const [blogs, setBlogs] = useState()
    // const [therapist, setTherapist] = useState()
    const [url, setUrl] = useState();
    const [counter, setCounter] = useState(5); // * Numero de requests  que se hacen

    const toggleSidenav = () => {
        setOpen(!open)
    }

    const finishReq = () => {
        setCounter(cnt => cnt - 1);
    }

    useEffect(() => {
        if (isMobile) setOpen(false)
        else setOpen(true)
    }, [isMobile])

    useEffect(() => {
        console.log(counter)
        if (counter === 0) {
            setLoading(false);
        }
    }, [counter])

    useEffect(() => {

        api.get(`/t/${user.uid}/u`) 
        .then(resU => {
            console.log("OK: Usuarios obtenidos")
            setUsers(resU.data)
            finishReq()
        })

        api.get(`/t/${user.uid}/s/uncompleted`) 
        .then(resS => {
            console.log("OK: Sesiones obtenidas")
            setSessions(resS.data)
            finishReq();
        })

        api.get(`/t/${user.uid}/b`) 
        .then(resB => {
            console.log("OK: Blogs obtenidos")
            setBlogs(resB.data)
            finishReq()
        })

        api.get(`/t/${user.uid}/image`) 
        .then(resC => {
            console.log("OK: Imagen obtenida")
            setUrl(resC.data.url)
            finishReq()               
        })

        api.get(`/t/${user.uid}/reAuth`)
        .then(res => {
            console.log(res, 'reAuth')
            if (res.data === false) {
                // console.log('No existe una cuenta')
                setStripe(res.data)
                finishReq()
            } else if ((res.data.details_submitted === false) && (res.data.charges_enabled === false)) {
                // console.log('No se han completado los datos de registro en stripe, y por lo tanto no est??n disponibles los cargos')
                setStripeId(res.data.id)
                setStripeDetails(res.data.details_submitted);
                setStripeCharges(res.data.charges_enabled)
                setStripe(false)
                finishReq()
            } else if (res.data.charges_enabled && res.data.details_submitted) {
                // console.log('Cargos disponibles')
                setStripeId(res.data.id)
                setStripeDetails(res.data.details_submitted)
                setStripeCharges(res.data.charges_enabled)
                setStripe(true)
                finishReq()
            } 
        })
    }, [user.uid])



    

    return (
        <div className="relative">
            <MatxSidenavContainer>
                <MatxSidenav
                    width="300px"
                    open={open}
                    toggleSidenav={toggleSidenav}
                >
                    <div
                        className={clsx(
                            'bg-primary text-right',
                            classes.headerBG
                        )}
                    >
                        <Hidden smUp>
                            <IconButton onClick={toggleSidenav}>
                                <Icon className="text-white">clear</Icon>
                            </IconButton>
                        </Hidden>
                    </div>
                    <TherapistHomeSidenav details={stripeDetails} charges={stripeCharges} stripeId={stripeId} stripe={stripe} url={url} loading={loading} />
                </MatxSidenav>
                <MatxSidenavContent open={open}>
                    <div className={clsx('bg-primary', classes.headerBG)} />
                    <TherapistHomeContent details={stripeDetails} charges={stripeCharges} stripeId={stripeId} stripe={stripe} toggleSidenav={toggleSidenav}  loading={loading} users={users} blogs={blogs} sessions={sessions} />
                </MatxSidenavContent>
            </MatxSidenavContainer>
        </div>
    )
}

export default withStyles({}, { withTheme: true })(TherapistHome);