import React from "react";
import my_happy_face from "../assets/my_happy_face.svg";
import ContactInformation from "./ContactInformation";
import { Grid } from "@material-ui/core";
import certification from "../assets/O_Java-SE-8-OCA-clr.gif";


export default function PersonalInformation() {
  return (<Grid container direction="column">
    {/* My profile picture*/}
    <Grid item align="center">
      <img
        src={my_happy_face}
        style={{
          width: "300px",
          height: "300px"
        }}
        alt="Gary's happy face"
      />
    </Grid>

    {/* Name*/}
    <Grid item align="center">
      <h1
        style={{
          marginTop: "10px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "6rem",
          lineHeight: "84px",
          color: "#403536",
          marginBlockEnd: '10px',
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)"
        }}
      >
        Gary Li
    </h1>
    </Grid>

    {/* Current job*/}
    <Grid item align="center">
      <h1
        style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "30px",
          lineHeight: "28px",
          
          color: "#686060"
        }}
      >
        Full Stack Developer
    </h1>
    </Grid>

    {/* Contact information*/}
    <Grid item>
      <Grid container direction="row" justify="center">
        <Grid item>
          <ContactInformation />
        </Grid>
        <Grid item>
          <img src={certification} style={{width: "170px", marginLeft: "35px", marginTop: "-8px"}}></img>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  );
}
