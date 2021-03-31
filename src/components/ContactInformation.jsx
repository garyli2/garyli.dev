import React, { Fragment } from "react";
import LinkedinInformation from "./LinkedinInformation.jsx";
import EmailInformation from "./EmailInformation.jsx";
import certification from "../assets/O_Java-SE-8-OCA-clr.gif";

export default function ContactInformation() {
    return (
        <Fragment>
            <div
                style={{
                    marginTop: "40px",
                    display: "inline",
                }}
            >
                <LinkedinInformation />
                <br />
                <EmailInformation />
            </div>
        </Fragment>
    );
}
