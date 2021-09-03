import React from 'react'
import { useLocation } from 'react-router-dom'
import NotFoundView from './components/NotFoundView'

const NotFound = () => {
    console.log(useLocation().state);
    return ( 
        <NotFoundView />
    )
}

export default NotFound
