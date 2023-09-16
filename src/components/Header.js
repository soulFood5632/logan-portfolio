import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import Button from "@material-ui/core/Button";
import { LinkedIn, GitHub } from "@material-ui/icons";
import {Container} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#a82121",
      fontSize: "90px"
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
    subtitle2: {
      color: "gray"
    },

  typedContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    minHeight: "85vh",
    width: "100%",
    textAlign: "center",
      padding: "2rem"
  },

    iconGridOuter: {
      padding: '5px'
    },

    iconGrid: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: 'fit-content',
        alignContent: 'center',
        justifyContent: 'center',
        padding: '1px 0',
        backgroundColor: 'tan',
        margin: 'zero auto'


    }
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      {/*<Grid container justify="center">*/}
      {/*  <Avatar className={classes.avatar} src={avatar} alt="Logan Underwood" />*/}
      {/*</Grid>*/}
      <Typography className={classes.title} variant="h4">
        Logan Underwood
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
          Interdisciplinary Engineer
      </Typography>

      <Typography className={classes.subtitle2} variant="h5">
          Engineering Physics UBC
      </Typography>

        <Container className={classes.iconGridOuter}>
            <Container className={classes.iconGrid}>
                <Button size={'large'} target={"_blank"} href={"https://github.com/soulFood5632"}>
                    <GitHub/>
                </Button>
                <Button size={'large'} target={"_blank"} href={"https://www.linkedin.com/in/logan-underwood-ubc-engphys/"}>
                    <LinkedIn/>
                </Button>
            </Container>
        </Container>
    </Box>
  );
}

export default Header;
