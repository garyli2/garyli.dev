import React from "react";
import NavigationDirectory from "./NavigationDirectory";
import styles from "./RightSideNavigation.module.css";

export default function RightSideNavigation() {
    return (
        <>
            <div className={styles.trapezoid} />
            <div className={styles.directory}>
                <NavigationDirectory />
            </div>
        </>
    );
}
