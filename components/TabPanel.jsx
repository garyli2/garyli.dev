import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

export function TabPanel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChange = (_, activeIndex) => setActiveIndex(activeIndex);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <div style={{ display: "flex", width: "80%" }}>
                <Tabs value={activeIndex} onChange={handleChange}>
                    <Tab label="frontend" />
                    <Tab label="backend" />
                </Tabs>

                {activeIndex === 0 && (
                    <TabContainer>
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Material-UI</li>
                            <li>JQuery</li>
                            <li>HTML5</li>
                        </ul>
                    </TabContainer>
                )}
                {activeIndex === 1 && (
                    <TabContainer>
                        <ul>
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>Hibernate</li>
                            <li>MySQL</li>
                            <li>Node.js</li>
                        </ul>
                    </TabContainer>
                )}
            </div>
        </div>
    );
}

function TabContainer(props) {
    return (
        <Typography component="div">
            {props.children}
        </Typography>
    );
}

export default TabPanel;
