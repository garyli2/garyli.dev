import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import equationspace_preview from "../../assets/equationspace_preview.png";
import { Card, Button, Grid } from "@material-ui/core/";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "react-awesome-button/dist/themes/theme-c137.css";
import NodeIcon from "../icons/NodeIcon";
import JavaScriptIcon from "../icons/JavaScriptIcon";
import BootstrapIcon from "../icons/BootstrapIcon";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 10,
        paddingTop: "56.25%",
    },
}));

export default function EquationSpaceCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <img
                        src="https://cdn.glitch.com/0125a06b-d48f-44f8-826f-276383ee0687%2Fprofile.png?v=1578347345108"
                        style={{ width: "45px" }}
                    ></img>
                }
                titleTypographyProps={{ variant: "h5" }}
                title="EquationSpace"
                subheader="2019"
            />
            <CardMedia
                className={classes.media}
                image={equationspace_preview}
                title="EquationSpace Preview"
            />
            <CardContent>
                <Typography variant="body1" color="textPrimary" component="p">
                    A graphing calculator extended from Desmos where users can
                    collaborate in real time to edit the graph.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Grid container spacing={1}>
                    <Grid item>
                        <NodeIcon />
                    </Grid>
                    <Grid item>
                        <JavaScriptIcon />
                    </Grid>
                    <Grid item>
                        <BootstrapIcon />
                    </Grid>
                </Grid>
                <AwesomeButton
                    style={{
                        width: "65px",
                        height: "40px",
                        marginLeft: "auto",
                    }}
                    type="primary"
                    onPress={() =>
                        window.open("https://equationspace.com", "_blank")
                    }
                >
                    Visit
                </AwesomeButton>
            </CardActions>
        </Card>
    );
}
