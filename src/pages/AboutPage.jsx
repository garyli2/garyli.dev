import React from "react";
import certification from "../assets/O_Java-SE-8-OCA-clr.gif";
import PersonalInformation from "../components/PersonalInformation.jsx";
import RightSideNavigation from "../components/RightSideNavigation.jsx";
import { Typography, Grid, Button, Paper, Box } from "@material-ui/core/";
import Container from "@material-ui/core/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

import bike_portrait from "../assets/bike_ride.jpg";

import { motion } from "framer-motion";

import "../styles.css";
import TabPanel from "../components/TabPanel";

export default function AboutPage(props) {
  console.log("Received props :");
  console.log(props.helloThereControl)
  return (
    <div
      style={{
        backgroundColor: "rgb(245 245 245)",
        width: "100%",
        height: "100%"
      }}
    >
      <Container maxWidth="lg" style={{height: '100vh'}}>
        <Grid container justify="space-between">
          {/* "About" headline */}
          <Grid item xs={12} >
            <h1>
              <span>About</span>
            </h1>
          </Grid>

          {/* Image of myself */}
          <Grid item xs={3} spacing={12} >
            <Paper outlined round elevation={4}>
              <Box p={2}>
                <img
                  src={bike_portrait}
                  style={{
                    width: "100%"
                  }}
                  alt="Gary's happy face"
                />
                <TabPanel />
                <center>
                  <Button variant="contained" color="primary" style={{ marginTop: "0%" }} href="Gary Li Resume.pdf" download="Gary Li Resume.pdf">
                    <FontAwesomeIcon icon={faFileDownload} style={{ display: 'inline', marginRight: "5px" }} />
                Download My Resume
              </Button>
                </center>
              </Box>
            </Paper>
          </Grid>

          {/* Personal description */}
          <Grid item xs={8}>
            <motion.h2 animate={props.helloThereControl} style={{ textAlign: 'center', fontSize: '3rem', marginBlockStart: '0' }}>
              <Typography variant="h3" style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "60px",
                lineHeight: "28px",

              }}>Hello there!</Typography>
            </motion.h2>

            <Paper outlined round elevation={4}>
              <Box p={3}>
                <Typography variant="h6" style={{marginBlockEnd: "1.25em", fontWeight: "400"}}>
                  I am a full stack developer studying Computer Engineering at the University of Waterloo. My skills include developing frontend and backend applications with languages and frameworks such as Java, Spring Boot and React.
            </Typography>

                <Typography variant="h6" style={{fontWeight: "400"}}>
                  I believe an important aspect of programming is how it can benefit those around us and make a positive impact. In my free time, I enjoy biking and building fun projects to try out frameworks and languages.
            </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
