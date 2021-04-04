import React from "react";
import LinkedinInformation from "./LinkedinInformation.jsx";
import EmailInformation from "./EmailInformation.jsx";

export default function ContactInformation() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "80%"

            }}
        >
            <LinkedinInformation />
            <EmailInformation />
        </div>
    );
}
