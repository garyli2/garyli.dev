import React from "react";
import { Grid, Typography } from "@material-ui/core/";
import Container from "@material-ui/core/Container";

import ContactForm from "../components/ContactForm";

import "../styles.css";

export default function ContactPage() {
  return (
    <div
      style={{
        backgroundColor: "rgb(245 245 245)",
        width: "100%",
        height: "100%"
      }}
    >
      <Container maxWidth="lg">
        <Grid container justify="space-between">
          {/* "About" headline */}
          <Grid item xs={12}>
            <h1>
              <span>Contact</span>
            </h1>
          </Grid>

          <Grid item xs={12}>
            <Typography style={{ marginBottom: '1%' }} variant="h6">You can reach me via email or with the form below. Looking forward to hear from you!</Typography>
            <ContactForm />
          </Grid>
        </Grid>

      </Container>
    </div >
  );
}
