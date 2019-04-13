import React, { Component, Fragment } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import "react-datepicker/dist/react-datepicker.css";
import { styles } from "./style";

class DatePickerField extends Component {
    state = {
        startDate: new Date()
    };
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render() {
        const { classes, label } = this.props;
        return (
            <Fragment>
                <label className={classes.label}>{label}</label>
                <div className={classes.root}>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                </div>
            </Fragment>
        );
    }
}

DatePickerField.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DatePickerField);
