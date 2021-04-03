import React from "react";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function EmailInformation() {
    return (
        <Typography display="inline" variant="h5">
            <FontAwesomeIcon icon={faEnvelope} style={{ width: "24px" }} />
            <a
                style={{ marginLeft: "10px" }}
                href="mailto:gary.li1@uwaterloo.ca"
            >
                gary.li1@uwaterloo.ca
                </a>
        </Typography>
    );
}
