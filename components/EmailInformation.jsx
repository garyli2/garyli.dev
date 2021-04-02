import React from "react";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function EmailInformation() {
    return (
        <div style={{ marginTop: "20px" }}>
            <Typography display="inline" variant="h5">
                <FontAwesomeIcon icon={faEnvelope} />
                <a
                    style={{ marginLeft: "10px" }}
                    href="mailto:gary.li1@uwaterloo.ca"
                >
                    gary.li1@uwaterloo.ca
                </a>
            </Typography>
        </div>
    );
}
