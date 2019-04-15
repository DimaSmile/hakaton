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
import { connect } from "react-redux";
import Loader from "../../components/Loader";
import { history } from "../../helpers/history";
import * as path from "../../constants/routes";
import { teamCalendarAction } from "../../actions/TeamCalendar";
import { bindActionCreators } from "redux";

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
    };
    componentDidMount() {
        this.props.teamCalendarAction();
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { classes, dataUser, dataEvents } = this.props;
        const { value, user } = this.state;
        console.log(dataEvents);
        if (dataUser && dataUser.role_id && dataEvents) {
            if (dataUser.role_id === 3) {
                history.push(path.DASHBOARD_HOME);
            }
            const data = [];
            dataEvents.forEach(item => {
                let itemData = {};
                itemData.category = 'birthdays';
                itemData.name = item.name;
                itemData.description = 'birthday';
                itemData.date = item.birthday;
                data.push(itemData)
            });

            dataEvents.forEach(item => {
                if(item.event_start) {

                    let itemData = {};
                    itemData.category = 'team_building';
                    itemData.name = item.name;

                    itemData.description = <p>{item.event_name}  <br/> {item.event_description}</p>
                    itemData.date = item.event_start + '-' + item.event_end;
                    data.push(itemData)
                }
            });

            dataEvents.forEach(item => {
                if(item.vacation_start){
                    let itemData = {};
                    itemData.category = 'vocation';
                    itemData.name = item.name;
                    itemData.description = 'period of vacation';
                    itemData.date = item.vacation_start + '-' + item.vacation_end;
                    itemData.avatar = item.image;
                    data.push(itemData)
                }
            });

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
                                <div className={classes.container}>
                                    {data.map((item, index) => {
                                        return (
                                            <AddEvent
                                                key={index}
                                                name={item.name}
                                                description={item.description}
                                                date={item.date}
                                                avatar={item.avatar}
                                            />
                                        );
                                    })}
                                </div>
                            </TabContainer>
                        )}
                        {value === 1 && (
                            <TabContainer>
                                <div className={classes.container}>
                                    {data.map((item, index) => {
                                        if (item.category == "vocation") {
                                            return (
                                                <AddEvent
                                                    key={index}
                                                    name={item.name}
                                                    description={
                                                        item.description
                                                    }
                                                    date={item.date}
                                                    avatar={item.avatar}
                                                />
                                            );
                                        }
                                    })}
                                </div>
                            </TabContainer>
                        )}
                        {value === 2 && (
                            <TabContainer>
                                <div className={classes.container}>
                                    {data.map((item, index) => {
                                        if (item.category == "birthdays") {
                                            return (
                                                <AddEvent
                                                    key={index}
                                                    name={item.name}
                                                    description={
                                                        item.description
                                                    }
                                                    date={item.date}
                                                    avatar={item.avatar}
                                                />
                                            );
                                        }
                                    })}
                                </div>
                            </TabContainer>
                        )}
                        {value === 3 && (
                            <TabContainer>
                                <div className={classes.container}>
                                    {data.map((item, index) => {
                                        if (item.category == "team_building") {
                                            return (
                                                <AddEvent
                                                    key={index}
                                                    name={item.name}
                                                    description={
                                                        item.description
                                                    }
                                                    date={item.date}
                                                    avatar={item.avatar}
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
        } else {
            return <Loader />;
        }
    }
}

TeamCalendar.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        dataUser: state.user.user,
        dataEvents: state.teamCalendar.teamCalendarData
    };
};

const mapDispatchToProps = dispatch => ({
    teamCalendarAction: bindActionCreators(teamCalendarAction, dispatch),
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(withStyles(styles)(TeamCalendar));
