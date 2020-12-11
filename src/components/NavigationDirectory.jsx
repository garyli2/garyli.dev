import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navigation: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "400%",
    lineHeight: "100%",
    color: "#F0F0F0",
    textDecoration: "none",
    borderBottom: "3px solid white",
    
  }
});

export default function NavigationDirectory() {
  const classes = useStyles();

  return (
    <div
      style={{
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        width: "40vw",
        textAlign: "right",
        marginRight: "3vw"
      }}
    >
      <p>
        <a className={classes.navigation} href="#about">
          About
        </a>
      </p>
      <br />
      <p style={{ paddingTop: "50px" }}>
        <a className={classes.navigation} href="#projects">
          Projects
        </a>
      </p>
      <br />
      <p style={{ paddingTop: "50px" }}>
        <a className={classes.navigation} href="#contact">
          Contact
        </a>
      </p>
    </div>
  );
}
