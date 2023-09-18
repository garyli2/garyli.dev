import React from "react";
import PersonalInformation from "../PersonalInformation.jsx";
import RightSideNavigation from "../RightSideNavigation.jsx";
import Grid from "@material-ui/core/Grid";

export default function IndexPage() {
    return <Grid container direction="row" alignItems="center"
        style={{
            backgroundColor: "rgb(236 236 236)",
            height: "100vh",
            width: "100%",
        }}>
        <Grid item style={{ width: "65vw" }}>
            <PersonalInformation />
        </Grid>
        {/* Right side bar navigation */}
        <Grid item style={{ width: "35vw", height: "100%" }}>
            <RightSideNavigation />
        </Grid>
    </Grid>
}
