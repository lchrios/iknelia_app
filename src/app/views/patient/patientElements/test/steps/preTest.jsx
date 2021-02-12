import React from 'react'
import history from 'history.js'
import { Card, Button } from '@material-ui/core'

const PreTest = () => {

    return (
        <Card className="m-sm-30 ">  
            <div className="max-w-600 mx-auto">
                <h3>Antes de comenzar, por favor selecciona un terapeuta</h3>
                <Button
                className="mt-2 mb-2 x-center" 
                variant="contained"
                color="secondary"
                onClick={() => history.push('/:pid/browse')}

                >
                    Seleccionar terapeuta
                </Button>
            </div>
        </Card>

    )
    
}

export default PreTest;