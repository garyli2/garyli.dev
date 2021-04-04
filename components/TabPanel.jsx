import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { TabScrollButton, withStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

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