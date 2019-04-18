import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Modal from "@material-ui/core/Modal";

import { Formik, Form, Field } from "formik";
import TextInput from "../FormElems/TextInput";
import { EditUserSchema } from "./_validation";
import UserAvatar from "../UserAvatar";
import DatePickerField from "../FormElems/DatePicker";
import Button from "@material-ui/core/Button";

import Close from "@material-ui/icons/Close";
import Offline from "../../images/icon_offline.png";
import Online from "../../images/icon_online.png";

import { styles } from "./style";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.birthday = new Date();
        this.start_working = new Date();
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const {
            classes,
            image,
            userName,
            position,
            birthday,
            start_working,
            saveProfileInfo,
            online
        } = this.props;
        return (
            <Formik
                initialValues={{
                    userName: userName,
                    birthday: birthday,
                    startWorking: start_working
                }}
                validationSchema={EditUserSchema}
                onSubmit={values => {
                    values.userName = this.userName;
                    values.birthday = this.birthday;
                    values.startWorking = this.startWorking;
                    saveProfileInfo(values);
                }}
            >
                {() => (
                    <div className={classes.root}>
                        <Card
                            className={classes.card}
                            onClick={this.handleOpen}
                        >
                            <CardContent>
                                <Avatar
                                    alt="avatar"
                                    src={image}
                                    className={classes.avatar}
                                />
                                <Typography
                                    className={classes.userName}
                                    variant="h5"
                                >
                                    {userName}
                                </Typography>
                                <Typography
                                    className={classes.userName}
                                    variant="subtitle1"
                                >
                                    {position}
                                </Typography>
                            </CardContent>
                            {!!online ? (
                                <img src={Online} className={classes.active} />
                            ) : (
                                <img src={Offline} className={classes.active} />
                            )}
                        </Card>

                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.state.open}
                            className={classes.modal}
                            onClose={this.handleClose}
                        >
                            <Card className={classes.modalContent}>
                                <Close
                                    onClick={this.handleClose}
                                    className={classes.close}
                                />

                                <Form>
                                    <UserAvatar image={image} />
                                    <Field
                                        type="text"
                                        name="userName"
                                        label="User Name"
                                        component={TextInput}
                                        classProp={classes.formInput}
                                    />
                                    <Field
                                        type="text"
                                        name="birthday"
                                        label="Birthday"
                                        component={DatePickerField}
                                        classProp={classes.formInput}
                                        changeDate={this.changeDate}
                                    />
                                    <Field
                                        type="text"
                                        name="startWorking"
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
                            </Card>
                        </Modal>
                    </div>
                )}
            </Formik>
        );
    }
}

User.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(User);
