import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./style";

import { Formik, Form, Field } from "formik";
import TextInput from "../../FormElems/TextInput";
import { UserSettingsSchema } from "./_validationSchema";

import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DatePickerField from "../../FormElems/DatePicker";

import UserAvatar from "../../UserAvatar";
import DefaultAvatar from "../../../images/defaultAvatar.png";

class UserSettingsForm extends PureComponent {
    constructor() {
        super();
        this.state = {
            image: null,
            imageData: null
        };
        this.birthdayDate = new Date();
        this.startDate = new Date();
    }
    handleShowImage = event => {
        this.setState({
            image: URL.createObjectURL(event.target.files[0]),
            imageData: event.target.files[0]
        });
    };
    changeDate = (field, value) => {
        this[field] = value;
    };
    render() {
        const { classes, user, saveProfileInfo } = this.props;
        const avatar = this.state.image ? this.state.image : DefaultAvatar;
        if (user) {
            return (
                <Formik
                    initialValues={{
                        userName: user.name,
                        password: "",
                        password2: "",
                        birthdayDate: this.birthdayDate,
                        startDate: this.startDate
                    }}
                    validationSchema={UserSettingsSchema}
                    onSubmit={values => {
                        values.birthdayDate = this.birthdayDate;
                        values.startDate = this.startDate;
                        values.avatar = this.state.imageData;
                        saveProfileInfo(values);
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
                                    changeDate={this.changeDate}
                                />
                                <Field
                                    type="text"
                                    name="startDate"
                                    label="Start Working Date"
                                    component={DatePickerField}
                                    classProp={classes.formInput}
                                    changeDate={this.changeDate}
                                />
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
        } else {
            return <div>Loading</div>;
        }
    }
}

UserSettingsForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserSettingsForm);
