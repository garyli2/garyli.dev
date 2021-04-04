import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

class TabPanel extends React.PureComponent {
    state = { activeIndex: 0 };

    handleChange = (_, activeIndex) => this.setState({ activeIndex });
    render() {
        const { activeIndex } = this.state;
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <div style={{ display: "flex", width: "80%" }}>
                    <Tabs value={activeIndex} onChange={this.handleChange}>
                        <Tab label="frontend" />
                        <Tab label="backend" />
                    </Tabs>

                    {activeIndex === 0 && (
                        <TabContainer>
                            <ul>
                                <li>ReactJS</li>
                                <li>Material-UI</li>
                                <li>Bootstrap</li>
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
}

function TabContainer(props) {
    return (
        <Typography component="div">
            {props.children}
        </Typography>
    );
}

export default TabPanel;
