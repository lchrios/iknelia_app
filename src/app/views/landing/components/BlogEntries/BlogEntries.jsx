import React, {useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Card from "../../landingBlog/components/card";
import CardBody from "../../landingBlog/components/cardBody";
import CardHeader from "../../landingBlog/components/cardHeader";
import terapia from "../../../../../assets/images/blog/terapia1.jpg";
import terapia1 from "../../../../../assets/images/blog/terapia2.jpg";
import terapia2 from "../../../../../assets/images/blog/terapia3.jpg";
import parse from "html-react-parser";
import {
    title,
    cardTitle,
    coloredShadow,
    grayColor
  } from "../../landingBlog/landingBlogStyles/assets";
// import useAuth from "app/hooks/useAuth";
import { Loading } from "app/components/Loading/Loading";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    title,
    cardTitle,
    coloredShadow,
    textCenter: {
      textAlign: "center"
    },
    section: {
      backgroundPosition: "50%",
      backgroundSize: "cover",
      padding: "20px 0"
    },
    description: {
      color: grayColor[0]
    }
  });

export default function BlogEntriesCards({blogs, loading}) {
    const classes = useStyles();
    // const [render, setRender] = useState(<p className="m-5 text-primart">No hay entradas de blog disponibles</p>)
    const images = [terapia, terapia1, terapia2];

    useEffect(() =>{
        console.log(blogs)
    }, [blogs])

    return (
        <div className={classes.section}>
            { loading
                ? <Loading color="primary" />
                :
            <>
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                        spacing={3}
                    >
                    {   blogs.data.length >= 3
                        ? 
                        <>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Card plain blog  className="mr-10">
                                    <CardHeader image plain>
                                        <a href={`/blog/${blogs.id[0]}`}>
                                            <img src={images[0]} alt="..." />
                                        </a>
                                        <div
                                            className={classes.coloredShadow}
                                            style={{
                                                backgroundImage: "url(" + images[0] + ")",
                                                opacity: "1"
                                            }}
                                        />
                                    </CardHeader>
                                    <CardBody plain>
                                        <h6>DUDAS</h6>
                                    
                                        <h4 className={classes.cardTitle}>
                                            <a href={`/blog/${blogs.id[0]}`}>
                                            {blogs.data[0].title}
                                            </a>
                                        </h4>
                                        <p className={classes.description}>
                                            {parse(blogs.data[0].content)}
                                            <br />
                                            <br />
                                            <a href={`/blog/${blogs.id[0]}`}> Leer artículo </a>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Card plain blog>
                                    <CardHeader plain image>
                                        <a href={`/blog/${blogs.id[1]}`}>
                                            <img src={images[1]} alt="..." />
                                        </a>
                                        <div
                                            className={classes.coloredShadow}
                                            style={{
                                                backgroundImage: "url(" + images[1] + ")",
                                                opacity: "1"
                                            }}
                                        />
                                    </CardHeader>
                                    <CardBody plain>
                                        <h6>DUDAS</h6>
                                        
                                        <h4 className={classes.cardTitle}>
                                            <a href={`/blog/${blogs.id[1]}`}>
                                            {blogs.data[1].title}
                                            </a>
                                        </h4>
                                        <p className={classes.description}>
                                            {parse(blogs.data[1].content)}
                                            <br />
                                            <br />
                                            <a href={`/blog/${blogs.id[1]}`}> Leer artículo </a>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Card plain blog>
                                    <CardHeader plain image>
                                    <a href={`/blog/${blogs.id[2]}`}>
                                        <img src={images[2]} alt="..." />
                                    </a>
                                    <div
                                        className={classes.coloredShadow}
                                        style={{
                                        backgroundImage: "url(" + images[2] + ")",
                                        opacity: "1"
                                        }}
                                    />
                                    </CardHeader>
                                    <CardBody plain>
                                    
                                    <h6>DUDAS</h6>
                                    
                                    <h4 className={classes.cardTitle}>
                                        <a href={`/blog/${blogs.id[2]}`}>
                                        {blogs.data[2].title}
                                        </a>
                                    </h4>
                                    <p className={classes.description}>
                                        {parse(blogs.data[2].content)}
                                        <br />
                                        <br />
                                        <a href={`/blog/${blogs.id[2]}`}> Leer artículo </a>
                                    </p>
                                    </CardBody>
                                </Card>
                            </Grid>  
                        </>
                        : <h1>Por el momento no hay blogs</h1>
                    }
                    </Grid>
            </>
        }
        </div>
    );
}
