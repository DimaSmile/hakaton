import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Typography from "@material-ui/core/Typography";
import { styles } from "./style";

class DatePickerField extends React.Component {
    state = {
        startDate: new Date()
    };
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render() {
        const {
            classes,
            label,
            type,
            classProp,
            variant,
            field,
            form: { touched, errors },
            ...props
        } = this.props;
        console.log(this.props);
        return (
            <div>
                <label className={classes.label}>{label}</label>
                <div className={classes.root}>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                </div>
                {touched[field.name] && errors[field.name] && (
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        color={"error"}
                    >
                        {errors[field.name]}
                    </Typography>
                )}
            </div>
        );
    }
}

DatePickerField.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DatePickerField);
