import React from "react";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LinkedinInformation() {
    return (
        <Typography display="inline" variant="h5">
            <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                style={{ width: "24px" }}
            />
            <a
                style={{ marginLeft: "10px" }}
                href="https://www.linkedin.com/in/gary-li-dev/"
            >
                in/gary-li-dev
            </a>
        </Typography>
    );
}
