import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
// core components
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import Card from "./card.jsx";
import CardBody from "./cardBody.jsx";
import Button from "./button.jsx";
import CustomInput from './customImput.jsx'


import sectionSubscribeLineStyle from "./styles/subscriberLineStyle";

const useStyles = makeStyles(sectionSubscribeLineStyle);

export default function SubscribeLine() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <h3 className={classes.title}>Recibe nuestros artículos en tu correo!</h3>
            <p className={classes.description}>
              Unete a nuestro newsletter y recibe siempre las ultimas actualizaciones de nuestros profesionales
            </p>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card plain className={classes.cardClasses}>
              <CardBody formHorizontal plain>
                <form>
                  <GridContainer>
                    <GridItem
                      xs={12}
                      sm={8}
                      md={8}
                      className={classes.alignItemsCenter}
                    >
                      <CustomInput
                        id="subscribe"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.formControl
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Mail className={classes.icon} />
                            </InputAdornment>
                          ),
                          placeholder: "Correo electrónico"
                        }}
                    />
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4}>
                      <Button round block color="primary">
                        Subscribirte
                      </Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
