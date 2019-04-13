import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./style";

import { Formik, Form, Field } from "formik";
import TextInput from "../../FormElems/TextInput";
import { UserSettingsSchema } from "./_validationSchema";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Fab from "@material-ui/core/Fab";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import DatePickerField from "../../FormElems/DatePicker";

import UserAvatar from "../../UserAvatar";
import DefaultAvatar from "../../../images/defaultAvatar.png";

class UserSettingsForm extends PureComponent {
    state = {
        image: null
    };
    handleShowImage = event => {
        this.setState({
            image: URL.createObjectURL(event.target.files[0])
        });
    };
    render() {
        const { classes, user } = this.props;
        const avatar = this.state.image ? this.state.image : DefaultAvatar;
        console.log(this.state);
        return (
            <Formik
                enableReinitialize={true}
                initialValues={{
                    userName: user ? user.name : "Loading...",
                    password: "",
                    password2: "",
                    startDate: new Date(),
                    birthdayDate: new Date()
                }}
                validationSchema={UserSettingsSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {() => (
                    <div className={"form-block " + classes.root}>
                        <Form>
                            <UserAvatar image={avatar} />
                            <Fab
                                color="secondary"
                                aria-label="Add"
                                className={classes.fab}
                            >
                                <EditIcon />
                                <input
                                    type="file"
                                    onChange={this.handleShowImage}
                                    className={classes.file}
                                />
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
                            <Field
                                type="text"
                                name="birthdayDate"
                                label="Birthday Date"
                                component={DatePickerField}
                                classProp={classes.formInput}
                            />
                            {/* <DatePickerField label={"Birthday day"} />
                            <DatePickerField label={"Start working"} /> */}
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
