import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip"


export default function AndroidIcon() {
    return (
        <Tooltip title="Android" style={{marginBottom: '5px',marginLeft: '5px'}}>
            <FontAwesomeIcon size="3x" icon={["fab", "android"]} />
        </Tooltip>
    )
}