import React from "react";
import PersonalInformation from "../components/PersonalInformation.jsx";
import RightSideNavigation from "../components/RightSideNavigation.jsx";
import Grid from "@material-ui/core/Grid";

export default function IndexPage() {
    return (
        <div
            style={{
                margin: "auto",
                backgroundColor: "rgb(236 236 236)",
                height: "100%",
                width: "100%",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            {/* Personal information display*/}
            <Grid
                container
                direction="row"
                alignItems="center"
                style={{ height: "100%" }}
            >
                <Grid
                    item
                    style={{
                        width: "65vw",
                    }}
                >
                    <PersonalInformation />
                </Grid>
                {/* Right side bar navigation */}
                <Grid item style={{ width: "35vw", height: "100%" }}>
                    <RightSideNavigation />
                </Grid>
            </Grid>
        </div>
    );
}
