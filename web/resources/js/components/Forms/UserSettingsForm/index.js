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
import Loader from "../../Loader";

class UserSettingsForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            imageData: null
        };
        this.birthdayDate = new Date();
        this.startDate = new Date();
    }
    handleShowImage = event => {
        this.setState({
            image: URL.createObjectURL(event.target.files[0])
        });
        this.createImage(event.target.files[0]);
    };
    changeDate = (field, value) => {
        this[field] = value;
    };
    createImage(file) {
        let reader = new FileReader();
        reader.onload = e => {
            this.setState({
                imageData: e.target.result
            });
        };
        reader.readAsDataURL(file);
    }
    render() {
        const { classes, user, saveProfileInfo } = this.props;
        let avatar;
        if (this.state.image) {
            avatar = this.state.image;
        } else {
            if (user && user.image) {
                avatar = user.image;
            } else {
                avatar = DefaultAvatar;
            }
        }
        if (user) {
            if (user.birthday) {
                this.birthdayDate = new Date(user.birthday);
            }
            if (user.start_working) {
                this.startDate = new Date(user.start_working);
            }
            const position = user.position ? user.position : "";
            return (
                <Formik
                    initialValues={{
                        id: user.id,
                        userName: user.name,
                        password: "",
                        password2: "",
                        position: position,
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
                                    type="text"
                                    name="position"
                                    label="Your position"
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
                                    label="Birthday"
                                    component={DatePickerField}
                                    classProp={classes.formInput}
                                    changeDate={this.changeDate}
                                />
                                {user.start_working ? (
                                    ""
                                ) : (
                                    <Field
                                        type="text"
                                        name="startDate"
                                        label="Start Working Date"
                                        component={DatePickerField}
                                        classProp={classes.formInput}
                                        changeDate={this.changeDate}
                                    />
                                )}

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
            return <Loader />;
        }
    }
}

UserSettingsForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserSettingsForm);
