import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Loader from "../Loader";

import Avatar from "../../images/defaultAvatar.png";

import { styles } from "./style";

const localizer = Calendar.momentLocalizer(moment);

const BirthdayEvent = props => {
    return (
        <div className={"calendar_event"}>
            <img src={props.image ? props.image : Avatar} />
            <p>{props.name}</p>
        </div>
    );
};

class CalendarDefault extends Component {
    selectDay = () => {
        // console.log("1ddsds");
    };
    handleSlotSelection = ({ start, end, action }) => {
        // console.log(start, end);
    };
    render() {
        const { classes, birthdays, nextEvent } = this.props;
        if (birthdays) {
            const events = Object.keys(birthdays).map(function(key) {
                return {
                    start: new Date(this[key].current_birthday),
                    end: new Date(this[key].current_birthday),
                    title: (
                        <BirthdayEvent
                            name={this[key].user_name}
                            image={this[key].avatar}
                        />
                    )
                };
            }, birthdays);
            return (
                <div className={classes.root}>
                    <Calendar
                        header={{
                            left: "prev,next today",
                            center: "title",
                            right: ""
                        }}
                        localizer={localizer}
                        eventClick={this.selectDay}
                        defaultDate={new Date(nextEvent.current_birthday)}
                        defaultView="month"
                        selectable={true}
                        onSelectSlot={this.handleSlotSelection}
                        min={new Date(2018, 10, 0)}
                        max={new Date(2020, 10, 0)}
                        views={["month"]}
                        events={events}
                        style={{ height: "calc(100vh - 200px)" }}
                    />
                </div>
            );
        } else {
            return <Loader />;
        }
    }
}

CalendarDefault.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CalendarDefault);
