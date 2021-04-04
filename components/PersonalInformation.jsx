import React from "react";
import ContactInformation from "./ContactInformation";
import { Grid } from "@material-ui/core";
import Image from 'next/image'

export default function PersonalInformation() {
    return (
        <Grid container direction="column">
            {/* My profile picture*/}
            <Grid item align="center">
                <Image
                    src={"/my_happy_face.svg"}
                    width={300}
                    height={300}
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
                        marginBlockEnd: "10px",
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)",
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

                        color: "#686060",
                    }}
                >
                    Full Stack Developer
                </h1>
            </Grid>

            {/* Contact information*/}
            <Grid item style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40%" }}>
                    <div style={{ flex: 1, height: "100%", display: "flex", alignItems: "center" }}>
                        <ContactInformation />
                    </div>

                    <Image
                        src={"/O_Java-SE-8-OCA-clr.gif"}
                        width={160}
                        height={100}
                        alt="Oracle Java SE 8 Certification Logo"
                    />

                </div>
            </Grid>
        </Grid>
    );
}
