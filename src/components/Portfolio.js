import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/IMG_0989_Large.jpeg";
import project2 from "../images/IMG_0028.JPG";
import project3 from "../images/IMG_0028.JPG";
import project4 from "../images/IMG_0028.JPG";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: '90%',
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Mario Cart Robots",
    key_skills: "CAD, Circuits, Project Management, Embedded Systems, System Integration, C++, PlatformIO",
    description: `In groups of 4, we designed, prototyped, and built a robot capable \
    of traversing a mario cart style course. Our teams unique jumping strategy forced us to 
    innovate to meet our requirements. The project's rapid fire nature challenged forcing me to
    learn CAD, embedded systems programming, system integration, and most of all interpersonal skills`,
    image: project1,
    link: "https://www.project.com"
  },
  {
    name: "Golf iOS Application",
    key_skills: "iOS Development, Database, UI Design, State and Data Ownership, OOP, Swift",
    description: `Frustrated by the large cost associated to any golf stat keeping app containing\
    modern stats like strokes gained, I set out to build my own light-weight application. Treating\
    myself and other golfers as key stakeholders, I built the application to improve on the faults\ 
    of the more verbose applications. Along the way, I learned about asynchronous database calls, UI design\
    , Firebase, Data flow (state), and more. `,
    image: project2,
    link: "https://www.project.com"
  },
  {
    name: "Tic Tac Toe",
    key_skills: "Machine Learning, SVMs, AI, Java, Python, JS, React",
    description: `In an effort to get a better understanding of how computer models are made I set out to
     create my own tic tac toe model. Although trivial this modeling taught me a lot about how to optimize
     the training procedure to improve efficiency. To cap off the project, I made a small web UI that
     can be used to play against my tic tac toe computer`,
    image: project4,
    link: "https://www.project.com"
  },
  {
    name: "Workout Tracking iOS Application",
    key_skills: "iOS Development, State and Data Ownership, OOP, UI Design, Swift",
    description: `An iOS application that allows for gym goers to track their weight and collect insights
    about where they were and how they are trending. The project required me to build an object oriented data structure
    a simple backend to store user data, and functionality for insights and stats`,
    image: project3,
    link: "https://www.project.com"
  },


];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={5} key={i}>
            <Card variant="outlined" className={classes.cardContainer} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Robot Image"
                  height="200"
                  image={project.image}
                />
                <CardContent>

                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant={"body1"} color={"textPrimary"}>
                    {project.key_skills}
                  </Typography>


                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="smal" color="primary" target={"_blank"} href={project.link}>
                  More Info
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
