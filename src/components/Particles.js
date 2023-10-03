import React from "react";
// import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: "fixed",
    opacity: "0.1"
  },
}));

const Particles = () => {
  const classes = useStyles();

  return (
      <div></div>
    // <ReactParticles
    //   canvasClassName={classes.particlesCanvas}
    //   params={{
    //     particles: {
    //       number: {
    //         value: 25,
    //         density: {
    //           enable: true,
    //           value_area: 800,
    //         },
    //       },
    //       shape: {
    //         type: "circle",
    //         stroke: {
    //           width: 1,
    //           color: "tan",
    //         },
    //       },
    //       size: {
    //         value: 8,
    //         random: true,
    //         anim: {
    //           enable: false,
    //           speed: 4,
    //           size_min: 0,
    //           sync: false,
    //         },
    //       },
    //       opacity: {
    //         value: 0.5,
    //         random: true,
    //         anim: {
    //           enable: true,
    //           speed: 1,
    //           opacity_min: 0.1,
    //           sync: false,
    //         },
    //       },
    //     },
    //   }}
    // />
  );
};

export default Particles;
