import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Loader from "../Loader";
import Avatar from "../../images/defaultAvatar.png";

import { styles } from "./style";

const localizer = Calendar.momentLocalizer(moment);

function formatDate(date) {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let month = monthNames[date.getMonth()];
    var yy = date.getFullYear();

    return month + " " + yy;
}

class CalendarWithSelect extends Component {
    handleSlotSelection = ({ start, end, action }) => {
        let startAvaliable = this.startDate.getMonth();
        let startChecked = start.getMonth();
        if (startAvaliable > startChecked) {
            let message =
                "Not evaliable date! You can select from " +
                formatDate(this.startDate);
            this.props.handleShowError(message);
        } else {
            this.props.handleshowConfirmation(start, end);
        }
    };
    render() {
        const { classes, startWorking, vocation } = this.props;
        let startDate;
        if (startWorking && vocation) {
            var D = new Date(startWorking);
            D.setMonth(D.getMonth() + 6);
            startDate = D;
            let now = new Date();
            if (startDate < now) {
                startDate = now;
            }
            this.startDate = startDate;
            const usersVacations = vocation.vacations.map(item => {
                return {
                    start: new Date(item.start),
                    end: new Date(item.end),
                    title: item.id
                };
            });
            console.log(usersVacations);
            return (
                <div className={classes.root}>
                    <Typography className={classes.title} variant="h4">
                        Avaliable month : {formatDate(startDate)}
                    </Typography>
                    <Calendar
                        header={{
                            left: "prev,next today",
                            center: "title",
                            right: ""
                        }}
                        localizer={localizer}
                        eventClick={this.selectDay}
                        defaultDate={startDate}
                        defaultView="month"
                        selectable={true}
                        onSelectSlot={this.handleSlotSelection}
                        views={["month"]}
                        events={usersVacations}
                        style={{ height: "calc(100vh - 200px)" }}
                    />
                </div>
            );
        } else {
            return <Loader />;
        }
    }
}

CalendarWithSelect.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CalendarWithSelect);
