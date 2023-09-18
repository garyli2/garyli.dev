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
                            <li>TypeScript</li>
                            <li>MUI</li>
                            <li>React Native</li>
                        </ul>
                    </TabContainer>
                )}
                {activeIndex === 1 && (
                    <TabContainer>
                        <ul>
                            <li>Java</li>
                            <li>Node.js</li>
                            <li>Spring Boot</li>
                            <li>Express</li>
                            <li>SQL</li>
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
