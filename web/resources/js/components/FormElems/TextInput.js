import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class TextInput extends React.Component {
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
                <TextField
                    label={label}
                    type={type}
                    className={classProp}
                    {...field}
                    {...props}
                    margin="normal"
                    variant={variant}
                    InputLabelProps={{
                        FormLabelClasses: {
                            root: classes.formLabelRoot,
                            focused: classes.formLabelFocused
                        }
                    }}
                />
                {touched[field.name] && errors[field.name] && (
                    <Typography
                        variant="caption"
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

const styles = theme => ({
    formLabelRoot: {
        "&$formLabelFocused": { color: theme.palette.primary.main }
    },
    formLabelFocused: { color: theme.palette.primary.main }
});

TextInput.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextInput);
