import React from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Avatar from "../../images/defaultAvatar.png";

import { styles } from "./style";

const localizer = Calendar.momentLocalizer(moment);

const BirthdayEvent = props => {
    return (
        <div className={"calendar_event"}>
            <img src={Avatar} />
            <p>Dima Pasko</p>
        </div>
    );
};

const myEventsList = [
    {
        start: new Date(),
        end: new Date(),
        title: <BirthdayEvent />
    }
];

const CalendarDefault = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={myEventsList}
                style={{ height: "calc(100vh - 200px)" }}
            />
        </div>
    );
};

CalendarDefault.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CalendarDefault);
