import React from "react";
import { Card, Grid } from "@material-ui/core/";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "react-awesome-button/dist/themes/theme-c137.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

// interface ProjectCardProps {
//     avatarSrc: string;
//     title: string;
//     subHeader: string;
//     previewImageSrc: string;
//     previewImageTitle: string;
//     description: string;
// }

export default function ProjectCard(props) {
    // we check if the given prop is a string. If so, then we wanted to display an image
    // else, we display whatever we were given, which in current forms, is an avatar icon component
    let avatarElement;
    if (typeof props.avatarSrc === "string") {
        avatarElement = <Image
            src={props.avatarSrc}
            width={45}
            height={45}
            alt=""
        />
    } else {
        avatarElement = props.avatarSrc;
    }

    return (
        <Card className={styles.container}>
            <CardHeader
                avatar={avatarElement}
                titleTypographyProps={{ variant: "h5" }}
                title={props.title}
                subheader={props.subHeader}
            />
            <div style={{ position: "relative", width: "100%", maxHeight: "175px", height: "175px" }}>
                <Image
                    className={styles.previewImage}
                    layout="fill"
                    objectFit="scale-down"
                    src={props.previewImageSrc}
                    alt={props.previewImageDescription}
                />
            </div>
            <CardContent>
                <Typography variant="body1" color="textPrimary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Grid container spacing={2} style={{ marginLeft: "5px" }}>
                    {props.iconArray.map(icon => (
                        <Grid item key={icon[1]}>
                            <FontAwesomeIcon
                                size="3x"
                                className={styles.icon}
                                icon={icon}
                            />
                        </Grid>
                    ))}
                </Grid>
                <AwesomeButton
                    style={{
                        width: "65px",
                        height: "40px",
                        marginLeft: "auto",
                    }}
                    type="primary"
                    onPress={() =>
                        window.open(props.projectLink, "_blank")
                    }
                >
                    Visit
                </AwesomeButton>
            </CardActions>
        </Card>
    );
}
