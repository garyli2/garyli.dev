import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import ProjectCard from "../ProjectCard";
import { Avatar } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

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
                <Grid container>
                    <Grid item xs={12}>
                        <h1 style={{ marginBlockEnd: "0em" }}>
                            <span>Projects</span>
                        </h1>
                    </Grid>

                    <Grid item xs={12} style={{ marginTop: "5%" }}>
                        <Carousel arrows slidesPerPage={3}>
                            <ProjectCard
                                avatarSrc="https://semestershare.com/images/logo_letter.png"
                                title="SemesterShare"
                                subHeader="2018 - 2020"
                                previewImageSrc="/semestershare_preview.png"
                                previewImageDescription="SemesterShare Preview"
                                description="A web platform where students input timetable data, keep
                                track of their friends’ timetables and see live course
                                information."
                                iconArray={[["fab", "java"], ["fab", "js-square"], ["fab", "bootstrap"]]}
                                projectLink="https://semestershare.com"
                            />

                            <ProjectCard
                                avatarSrc="https://cdn.glitch.com/0125a06b-d48f-44f8-826f-276383ee0687%2Fprofile.png?v=1578347345108"
                                title="EquationSpace"
                                subHeader="2019"
                                previewImageSrc="/equationspace_preview.png"
                                previewImageDescription="EquationSpace Preview"
                                description="A graphing calculator extended from Desmos where users can
                                collaborate in real time to edit the graph."
                                iconArray={[["fab", "node"], ["fab", "js-square"], ["fab", "bootstrap"]]}
                                projectLink="https://equationspace.com"
                            />

                            <ProjectCard
                                avatarSrc="https://steps4news.web.app/static/images/icon.png"
                                title="Steps4News"
                                subHeader="2020"
                                previewImageSrc="/steps4news_preview.png"
                                previewImageDescription="Steps4News Preview"
                                description="An Android app to help you stay up to date with the latest
                                news while keeping track of your exercise."
                                iconArray={[["fab", "java"], ["fab", "android"]]}
                                projectLink="https://steps4news.web.app"
                            />

                            <ProjectCard
                                avatarSrc={<Avatar style={{ backgroundColor: "lightblue" }}>
                                    <WbSunnyIcon />
                                </Avatar>}
                                title="WeatherChecker"
                                subHeader="2019"
                                previewImageSrc="/weatherchecker_preview.jpg"
                                previewImageDescription="Weather Checker Preview"
                                description="A detailed weather checker that reports the latest
                                forecasts. Utilizes its own library for fetching
                                OpenWeatherMap JSON data."
                                iconArray={[["fab", "java"], ["fab", "android"]]}
                                projectLink="https://github.com/garyli2/WeatherChecker"
                            />
                        </Carousel>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}
