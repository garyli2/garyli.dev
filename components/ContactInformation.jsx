import React, { Fragment } from "react";
import LinkedinInformation from "./LinkedinInformation.jsx";
import EmailInformation from "./EmailInformation.jsx";

export default function ContactInformation() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
        >
            <LinkedinInformation />
            <EmailInformation />
        </div>
    );
}
