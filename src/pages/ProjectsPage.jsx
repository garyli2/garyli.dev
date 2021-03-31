import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import "../styles.css";
import SemesterShareCard from "../components/projects/SemesterShareCard";
import EquationSpaceCard from "../components/projects/EquationSpaceCard";
import Steps4NewsCard from "../components/projects/Steps4NewsCard";
import WeatherCheckerCard from "../components/projects/WeatherCheckerCard";

export default function ProjectsPage() {
    return (
        <div
            style={{
                backgroundColor: "rgb(236 236 236)",
                width: "100%",
                height: "100%",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <h1 style={{ marginBlockEnd: "0em" }}>
                            <span>Projects</span>
                        </h1>
                    </Grid>

                    <Grid item xs={12}>
                        <Carousel arrows slidesPerPage={3}>
                            <SemesterShareCard />
                            <EquationSpaceCard />
                            <Steps4NewsCard />
                            <WeatherCheckerCard />
                        </Carousel>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
