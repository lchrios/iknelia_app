
import React, {useState, useEffect} from 'react';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink  } from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll } from 'react-scroll'
import history from '../../../../../history'
import useAuth from 'app/hooks/useAuth';
import firebase from 'firebase/app'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav ] =  useState(false)
    const { assignUserRole, user, isAuthenticated } = useAuth()
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }

    }
    
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    /**
     * *La propiedad scrollnav estaba siendo enviada al DOM, y para evitar eso se agrega el signo de dolar para convertirla en una propiedad transient de styled components
     */
    return (
        <>
            <Nav $scrollnav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo $scrollnav={scrollNav} to='/home'>Iknelia</NavLogo>
                    <MobileIcon onClick={toggleHome && toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem >
                            <NavLinks $scrollnav={scrollNav} to='/home' onClick={() => {history.push('/home')}}> Inicio </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks $scrollnav={scrollNav} to='/blogs' onClick={() => {history.push('/blogs')}}>Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks $scrollnav={scrollNav} to='/therapists' onClick={() => {history.push('/therapists')}}>Psicólogos</NavLinks>
                        </NavItem>
                        { !isAuthenticated ? <NavItem>
                            <NavLinks $scrollnav={scrollNav} to='/session/signup' onClick={() => {history.push('/session/signup')}}>Comienza ahora</NavLinks>
                        </NavItem> : null}
                        { user 
                        ?   <NavBtn to='/session/signin'>
                                <NavBtnLink to='/session/signin' onClick={() => {
                                    firebase.auth().currentUser.getIdTokenResult()
                                        .then( decodedToken => {
                                            switch (decodedToken.claims.role) {
                                                case "user":
                                                    history.push(`/${user.uid}/home`)
                                                    break;
                        
                                                case "therapist":
                                                    history.push(`/${user.uid}/dashboard`)
                                                    break;
                        
                                                case "admin":
                                                    history.push(`/${user.uid}/analytics`)
                                                    break;
                                        
                                                default:
                                                    console.error('No role was detected')
                                                    // TODO: if no role, set user role and redirect to home
                                                    assignUserRole(user.uid).then(() => {
                                                        history.push(`/${user.uid}/home`);
                                                        
                                                    });
                                                    break; 
                                                    
                                                    
                                            }
                                        })
                                        .catch( error => {
                                            console.error("Error al obtener el decodedToken del user", error)
                                        })
                                }}><p className="h4 mt-1 text-muted">{"¡Bienvenid@ " + user.name + "!"}</p></NavBtnLink>
                            </NavBtn>
                        :   <NavBtn to='/session/signin'>
                                <NavBtnLink to='/session/signin' onClick={() => history.push('/session/signin')}>Iniciar Sesión</NavBtnLink>
                            </NavBtn>
                        }
                  </NavMenu>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar;