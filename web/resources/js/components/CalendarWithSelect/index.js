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
        }
    };
    render() {
        const { classes, startWorking } = this.props;
        let startDate;
        if (startWorking) {
            var D = new Date(startWorking);
            D.setMonth(D.getMonth() + 6);
            startDate = D;
            this.startDate = startDate;
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
                        events={[]}
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
