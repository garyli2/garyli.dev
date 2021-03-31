import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavigationDirectory from "./NavigationDirectory";

const useStyles = makeStyles({
    trapezoid: {
        width: "25vw",
        right: "0",
        height: "0px",
        bottom: "0",
        position: "fixed",
        borderBottom: "calc(100vh - 0px) solid #D6334B",
        borderLeft: "15vw solid transparent",
        borderRight: "0px solid transparent",
    },
    directory: {
        textAlign: "right",
        position: "absolute",
        right: "0",
        height: "100%",
    },
});

export default function RightSideNavigation() {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.trapezoid}></div>
            <div className={classes.directory}>
                <NavigationDirectory />
            </div>
        </Fragment>
    );
}
