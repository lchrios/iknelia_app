import React, {
    useContext,
    useEffect,
    useState,
} from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import AppContext from "app/contexts/AppContext";
import useAuth from 'app/hooks/useAuth'

/**
 * ? Segúun tengo entendido, el pedo que hay es que user.role no está asignado y 
 * ? que por eso no puede leer la propiedad includes, pero en, sí debería existir el role. xddd
 * ? k era el error xddddddddd como se arregló porque ya no me lo da
 */

 /**
  * !aquí la función getUserRoleAuthStatus tenía la propiedad user, pero daba error, le ando cambiando arre creo ue es suficiente de comment adios
  */
 
const getUserRoleAuthStatus = (pathname,user,routes) => {
    

    if (!user){
        return false
    }

    const matched = routes.find((r) => r.path?.split("/")[2] === pathname.split("/")[2]);

    const authenticated = 
        matched && matched.auth && matched.auth.length
        ? matched.auth.includes(user.role)
        : true;

    return authenticated;
};

const AuthGuard = ({ children }) => {
    const {
        isAuthenticated,
        user
    } = useAuth()

    /** 
     * * La constante mSwitch es un acrónimo de maintenance switch, al cambiar a true, será redireccionado el usuario a una pantalla de mantenimiento siempre que inicie sesión
     */
    const mSwitch = false;
    const [maintenance, setMaintenance] = useState(false)
    const [previouseRoute, setPreviousRoute] = useState(null)
    const { pathname } = useLocation()

    const { routes } = useContext(AppContext);
    const [isUserRoleAuthenticated, setIsUserRoleAuthenticated] = useState(getUserRoleAuthStatus(pathname, user, routes));
    let authenticated = isAuthenticated && isUserRoleAuthenticated;


    // IF YOU NEED ROLE BASED AUTHENTICATION,
    // UNCOMMENT ABOVE TWO LINES, getUserRoleAuthStatus METHOD AND user VARIABLE
    // AND COMMENT OUT BELOW LINE
    // let authenticated = isAuthenticated

    useEffect(() => {
        if (mSwitch) {
            setMaintenance(true)
       } else {
           console.log('Switch de mantenimiento apagado')
       }
    },[mSwitch])

    useEffect(() => {
        if (previouseRoute !== null) setPreviousRoute(pathname)
    },[pathname, previouseRoute] )

    useEffect(() => {
        console.log({msg: "Usuario actualizado", user})
        setIsUserRoleAuthenticated(getUserRoleAuthStatus(pathname, user, routes));
    }, [pathname, routes, user])

    if(maintenance) {
        return (
            <Redirect
                to={{
                    pathname: '/session/maintenance',
                    state: { redirectUrl: previouseRoute },
                }}
            />
        )
    }
    else if (authenticated) return <>{children}</> 
    else {
        return (
            <Redirect
                to={{
                    pathname: '/session/404',
                    state: { redirectUrl: previouseRoute },
                }}
            />
        )
    }
}

export default AuthGuard
