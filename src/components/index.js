import React from "react";
import Header from "./Header";
import Particles from "./Particles";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    background: {
        position: "fixed", // Fixed positioning
        top: 0,
        left: 0,
        width: "100%", // Full width
        height: "100%", // Full height
        backgroundColor: "rgba(1,20,10,0.7)", // Blue color with 20% opacity
        zIndex: -1, // Place it behind other content (z-index)
    },
    scrollableContainer: {
        maxHeight: '100vh',
        overflowY: 'auto'
    }
}));

const Home = () => {

    const classes = useStyles();

  return (
    <React.Fragment>
        <Container className={classes.scrollableContainer}>
            <Container>
                <Header />
            </Container>
            <Box className={classes.background}>
              <Particles />
            </Box>
            <Resume />
            <Portfolio />
            <Contact />
        </Container>
    </React.Fragment>
  );
};

export default Home;
