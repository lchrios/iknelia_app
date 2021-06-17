import {
    cardTitle,
    title,
    grayColor
  } from "../../eachComponent/components/componentsStyle/componentsStyle/assets";
  import imagesStyle from "../../eachComponent/components/componentsStyle/componentsStyle/imageStyles";
  
  const psyCardStyle = {
    section: {
      padding: "80px 0",
      display:"grid",
      textAlign: "center",
      marginLeft:"40px",
      marginRight:"40px"
    },
    title: {
      ...title,
      marginBottom: "1rem",
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none"
    },
    ...imagesStyle,
    itemGrid: {
      marginLeft: "auto",
      marginRight: "auto"
    },
    cardTitle,
    smallTitle: {
      color: grayColor[7]
    },
    description: {
      color: grayColor[0]
    },
    justifyCenter: {
      justifyContent: "center !important"
    },
    socials: {
      marginTop: "0",
      width: "100%",
      transform: "none",
      left: "0",
      top: "0",
      height: "100%",
      lineHeight: "41px",
      fontSize: "20px",
      color: grayColor[0]
    },
    margin5: {
      margin: "5px"
    },
    card3: {
      textAlign: "center"
    }
  };
  
  export default psyCardStyle;
  