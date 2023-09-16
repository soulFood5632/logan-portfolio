import React, {useRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Download from "@material-ui/icons/ArrowDownward"
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  downloadButton: {

    color: "black",
    backgroundColor: "#f36e60"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "1rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();


  const handleDownloadClick = () => {
    const link = document.createElement("a")
    link.download = 'Tech_Resume-2.pdf'
    link.href = "../Tech_Resume-2.pdf"
    link.click()
  }
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h3" align="center" className={classes.heading}>
        Experience
      </Typography>

      <Box
          component="div"
          style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "7px 0px"}}
      >
        <Button
            variant={"contained"}
            className={classes.downloadButton}
            endIcon={<Download />}
            size={"large"}
            onClick={handleDownloadClick}>

            Full Resume

        </Button>

      </Box>

      <Box component="div" className={classes.timeLine}>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
          >
            Software Construction I
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            University of British Columbia
          </Typography>
          <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle1}
          >
            As part of this intensive course, I completed 3 coding projects in teams of
            3. One such project involved preforming a textual analysis of rate my prof reviews so you
            could predict the rating of a prof from a given textual input. All of the projects
            taught me critical lessons about documentation, testing, object oriented programming and so much more
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2023
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Data and Systems Intern
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Stantec Inc. Vancouver, BC
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Working with our key stake holder, Translink, I worked on an iOS application which help
            improve communication between operators and maintainers in the Yard Control System (YCS).
            The application interfaces with a rail signalling machine via UDP to collect up to date
            data from the field.

          </Typography>
        </Box>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
          >
            Engineering Physics Robotics Competition
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            University Of British Columbia
          </Typography>
          <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle1}
          >
            A tradition in Engineering physics is the 2nd year summer robot competition. In this years rendition
            teams were tasked to build an autonomous robot capable of traversing a mario cart style track against
            another teams robot. We were responsible for the design, planning, and the eventual construction. The
            project challenged my ability to stretch my abilities into multiple domains while also giving me a
            glimpse into the triumphs and pitfalls of working in a team.

          </Typography>
        </Box>


      </Box>
    </Box>
  );
};

export default Resume;
