import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Typography from "@material-ui/core/Typography";
import { styles } from "./style";

class DatePickerField extends React.Component {
    state = {
        dateVal: this.props.field.value
    };
    handleChange = date => {
        this.setState({
            dateVal: date
        });
        this.props.changeDate(this.props.field.name, date);
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
        return (
            <div>
                <label className={classes.label}>{label}</label>
                <div className={classes.root}>
                    <DatePicker
                        selected={this.state.dateVal}
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
