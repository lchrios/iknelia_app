import React, { Component, Fragment } from "react";
import { Breadcrumb, SimpleCard } from "app/components/index";
import { Card} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import SessionsHistory from './SessionsComponent'


class TherapistHistory extends Component {
    render() {
        return (
            <Fragment>
                <div className="m-sm-30">
                    <div className="mb-sm-30">
                        <Breadcrumb routeSegments={[{ name: "Mi historial de sesiones" }]} />
                    </div>
                    <div>
                        <Card>
                            <SimpleCard title="Historial de sesiones">
                                <SessionsHistory/>
                            </SimpleCard>
                        </Card>
                    </div>
                    
                        
                </div>
            </Fragment>
            
        )
    }
}

export default withStyles({}, { withTheme: true })(TherapistHistory);