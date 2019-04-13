import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./style";

import { Formik, Form, Field } from "formik";
import TextInput from "../../FormElems/TextInput";
// import { LoginSchema } from "./_validation";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Fab from "@material-ui/core/Fab";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/edit";
import DatePickerField from "../../FormElems/DatePicker";

import UserAvatar from "../../UserAvatar";
import DefaultAvatar from "../../../images/defaultAvatar.png";

class UserSettingsForm extends PureComponent {
    state = {
        rememberCheckbox: false
    };
    handleCheckboxChange = () => {
        this.setState({
            rememberCheckbox: !this.state.rememberCheckbox
        });
    };
    render() {
        const { classes, user } = this.props;
        console.log(user);
        return (
            <Formik
                enableReinitialize={true}
                initialValues={{
                    userName: user ? user.name : "Loading...",
                    password: "",
                    password2: ""
                }}
                // validationSchema={LoginSchema}
                // onSubmit={values => {
                //     login(values);
                // }}
            >
                {() => (
                    <div className={"form-block " + classes.root}>
                        <Form>
                            <UserAvatar image={DefaultAvatar} />
                            <Fab
                                color="secondary"
                                aria-label="Add"
                                className={classes.fab}
                            >
                                <EditIcon />
                            </Fab>
                            <Field
                                type="text"
                                name="userName"
                                label="User Name"
                                component={TextInput}
                                classProp={classes.formInput}
                            />
                            <Field
                                type="password"
                                name="password"
                                label="New Password"
                                component={TextInput}
                                classProp={classes.formInput}
                            />
                            <Field
                                type="password"
                                name="password2"
                                label="Confirm New Password"
                                component={TextInput}
                                classProp={classes.formInput}
                            />
                            <DatePickerField label={"Birthday day"} />
                            <DatePickerField label={"Start working"} />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.submitButton}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                    </div>
                )}
            </Formik>
        );
    }
}

UserSettingsForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserSettingsForm);
