import React from "react";
import { Grid, Typography } from "@material-ui/core/";
import Container from "@material-ui/core/Container";

import ContactForm from "../ContactForm";

export default function ContactPage() {
    return (
        <div
            style={{
                backgroundColor: "rgb(245 245 245)",
                width: "100%",
                height: "100vh",
            }}
        >
            <Container maxWidth="lg">
                <Grid container justify="space-between">
                    {/* "About" headline */}
                    <Grid item xs={12}>
                        <h1 style={{ marginBlockEnd: "2rem" }}>
                            <span>Contact</span>
                        </h1>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography style={{ marginBottom: "1%" }} variant="h6">
                            You can reach me via email or with the form below.
                            Looking forward to hearing from you!
                        </Typography>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
