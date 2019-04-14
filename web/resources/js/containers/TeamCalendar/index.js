import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AddEvent from "../../components/AddEvent";

import { styles } from "./style";

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

class TeamCalendar extends Component {
    state = {
        value: 0,
        user: [
            {
                name: "Alex",
                category: "vocation",
                description: "ddddddddddddddddddddddddddd",
                date: "01.05.2048"
            },
            {
                name: "Jim",
                category: "birthdays",
                description: "ddddddddddddddddddddddddddd",
                date: "01.05.2048"
            },
            {
                name: "Pam",
                category: "team_building",
                description: "ddddddddddddddddddddddddddd",
                date: "01.05.2048"
            },
            {
                name: "Pam",
                category: "team_building",
                description: "ddddddddddddddddddddddddddd",
                date: "01.05.2048"
            }
        ]
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value, user } = this.state;
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <AppBar
                        position="static"
                        color="default"
                        className={classes.bar}
                    >
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            scrollButtons="auto"
                        >
                            <Tab label="All" />
                            <Tab label="Vocations" />
                            <Tab label="Birthdays" />
                            <Tab label="Team Building" />
                        </Tabs>
                    </AppBar>
                    {value === 0 && (
                        <TabContainer>
                        <div className={classes.container} >
                            {user.map((item, index) => {
                                return (
                                    <AddEvent
                                        key={index}
                                        name={item.name}
                                        description={item.description}
                                        date={item.date}
                                    />
                                );
                            })}
                            </div>
                        </TabContainer>
                    )}
                    {value === 1 && (
                        <TabContainer >
                             <div className={classes.container} >
                            {user.map((item, index) => {
                                if (item.category == "vocation") {
                                    return (
                                        <AddEvent
                                            key={index}
                                            name={item.name}
                                            description={item.description}
                                            date={item.date}
                                        />
                                    );
                                }
                            })}
                            </div>
                        </TabContainer>
                    )}
                    {value === 2 && (
                        <TabContainer>
                            <div className={classes.container} >
                            {user.map((item, index) => {
                                if (item.category == "birthdays") {
                                    return (
                                        <AddEvent
                                            key={index}
                                            name={item.name}
                                            description={item.description}
                                            date={item.date}
                                        />
                                    );
                                }
                            })}
                            </div>
                        </TabContainer>
                    )}
                    {value === 3 && (
                        <TabContainer>
                             <div className={classes.container} >
                            {user.map((item, index) => {
                                if (item.category == "team_building") {
                                    return (
                                        <AddEvent
                                            key={index}
                                            name={item.name}
                                            description={item.description}
                                            date={item.date}
                                        />
                                    );
                                }
                            })}
                            </div>
                        </TabContainer>
                    )}
                </CardContent>
            </Card>
        );
    }
}

TeamCalendar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamCalendar);
