import React, { Fragment } from "react";
import LinkedinInformation from "./LinkedinInformation.jsx";
import EmailInformation from "./EmailInformation.jsx";

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
