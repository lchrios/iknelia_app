/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// core components
import GridContainer from "./components/GridContainer";
import GridItem from "./components/GridItem";
import Parallax from "./components/parallax";
// sections for this page
import SearchBox from './components/searchBoxStyle'
import SubscribeLine from "./components/subscribeLine";
import landingBlogStyles from "../landingBlog/landingBlogStyles/landingBlogStyles.js";
import LandingPsy from './components/landingPsySection'
import LandingPsySection from "./components/landingPsySection";




const useStyles = makeStyles(landingBlogStyles);

export default function landingPsy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Parallax image={require("assets/images/psychologists/session1.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                Buscar un profesional
              </h2>
              <SearchBox />
              {/*<SearchBoxBlog></SearchBoxBlog>*/}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <LandingPsySection/>
        </div>
        <SubscribeLine />
      </div>
    </div>
  );
}
