import React from "react";
import styles from "./NavigationDirectory.module.css";

export default function NavigationDirectory() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center',
                marginRight: '5vw'
            }}
        >
            <p>
                <a className={styles.navigationLink} href="#about">
                    About
                </a>
            </p>
            <p style={{ paddingTop: "50px" }}>
                <a className={styles.navigationLink} href="#projects">
                    Projects
                </a>
            </p>
            <p style={{ paddingTop: "50px" }}>
                <a className={styles.navigationLink} href="#contact">
                    Contact
                </a>
            </p>
        </div>
    );
}
