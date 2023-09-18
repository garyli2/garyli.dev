import React from "react";
import { Typography, Grid, Button, Paper, Box } from "@material-ui/core/";
import Container from "@material-ui/core/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import TabPanel from "../TabPanel";

import Image from "next/legacy/image";

export default function AboutPage(props) {
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
                        <h1>
                            <span>About</span>
                        </h1>
                    </Grid>

                    {/* Image of myself */}
                    <Grid item xs={3}>
                        <Paper outlined={1} round={1} elevation={4} style={{ height: "100%" }}>
                            <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                                <div style={{ flex: 1 }}>
                                    <Image
                                        quality={10}
                                        src={'/bike_ride.jpg'}
                                        layout="responsive"
                                        width={110}
                                        height={130}
                                        alt="Gary riding a bicycle"
                                    />
                                </div>
                                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                                    <TabPanel />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        style={{ marginTop: "0%", borderRadius: "0 0 4px 4px" }}
                                        href="Gary Li Resume.pdf"
                                        download="Gary Li Resume.pdf"
                                    >
                                        <FontAwesomeIcon
                                            icon={faFileDownload}
                                            style={{
                                                maxHeight: '10px',
                                                display: "inline",
                                                marginRight: "5px",
                                            }}
                                        />
                                        Download My Resume
                                    </Button>
                                </div>
                            </div>
                        </Paper>
                    </Grid>

                    {/* Personal description */}
                    <Grid item xs={8}>
                        <h3
                            className={props.helloThereAnimationClassName}
                            style={{
                                textAlign: "center",
                                fontSize: "3rem",
                                marginBlockStart: "0",
                                marginBlockEnd: "1rem"
                            }}
                            onAnimationEnd={props.onHelloAnimationEnd}
                        >
                            Hello there!
                        </h3>

                        <Paper outlined={1} round={1} elevation={4}>
                            <Box p={3}>
                                <Typography
                                    variant="h6"
                                    style={{
                                        marginBlockEnd: "1.25em",
                                        fontWeight: "400",
                                    }}
                                >
                                    I am a full stack developer studying
                                    Computer Engineering at the University of
                                    Waterloo. My skills include developing
                                    frontend and backend applications with
                                    languages and frameworks such as Java,
                                    Spring Boot and React.
                                </Typography>

                                <Typography
                                    variant="h6"
                                    style={{ fontWeight: "400" }}
                                >
                                    I believe an important aspect of programming
                                    is how it can benefit those around us and
                                    make a positive impact. In my free time, I
                                    enjoy biking and building fun projects to
                                    try out frameworks and languages.
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
