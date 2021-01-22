import React from "react";
import history from '../../../../../history'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from 'classnames'
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "../eachComponent/components/Grid/GridContainer";
import GridItem from "../eachComponent/components/Grid/GridItem";
import Card from "../eachComponent/components/Card/Card";
import CardHeader from "../eachComponent/components/Card/CardHeader";
import CardBody from "../eachComponent/components/Card/CardBody";
import CardFooter from "../eachComponent/components/Card/CardFooter";
import Muted from "../eachComponent/components/Typography/Muted";
import Button from "../eachComponent/components/CustomButtons/Button";

import Violeta from "assets/images/psicólogos/Violeta.PNG";
import Sandra from "assets/images/psicólogos/Sandra.PNG";
import Ivonne from 'assets/images/psicólogos/Ivonne.jpg'
import fake1 from 'assets/images/faces/profile faces/card-profile5-square.jpg'

import teamsStyle from "../eachComponent/components/componentsStyle/componentsStyle/psySectionStyle";
import teamStyle from "../eachComponent/components/componentsStyle/psyStyle";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

const useStyles = makeStyles(style);

export default function PsySection() {
  const classes = useStyles();
  return (
  <div className={classNames(classes.main, classes.mainRaised)}>
    <div className={classes.section}>
      <h2 className={classes.title}> Terapeutas </h2>
      <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={Violeta} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${Violeta})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Violeta Détré</h4>
                      
                        <h6 className={classes.cardCategory}>Terapeuta familiar</h6>
                      
                      <p className={classes.description}>
                      15 años de experiencia profesional en el ámbito clínico y
                      empresarial.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button className="ml-2 x-center" color="twitter" onClick={() => history.push('/session/signin')}>
                          Comenzar
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={Sandra} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${Sandra})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Mtra. TFSR Sandra Jaramillo Martínez</h4>
                      
                        <h6 className={classes.cardCategory}>
                        Psicóloga y psicoterapeuta familiar sistémica,
                        </h6>
                      
                      <p className={classes.description}>
                      11 años de experiencia en terapia psicológica.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                    <Button className="ml-2 x-center" color="twitter" onClick={() => history.push('/session/signin')}>
                          Comenzar
                    </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={fake1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${fake1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Maria Ana Magdalena Quiroz Pecina</h4>
                      
                        <h6 className={classes.cardCategory}>Jefatura de Ciencias de la Salud</h6>
                      
                      <p className={classes.description}>
                      5 años de experiencia en terapia psicológica y  
                      maestría en psicoanálisis.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                    <Button className="ml-2 x-center" color="twitter" onClick={() => history.push('/session/signin')}>
                          Comenzar
                    </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={Ivonne} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${Ivonne})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Sandra Jaramillo Martínez</h4>
                      
                        <h6 className={classes.cardCategory}>Psicólogo</h6>
                      
                      <p className={classes.description}>
                      7 años de experiencia en terapia familiar y de pareja.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                    <Button className="ml-2 x-center" color="twitter" onClick={() => history.push('/session/signin')}>
                          Comenzar
                    </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
      </div>
    </div>
  </div>
  );
}