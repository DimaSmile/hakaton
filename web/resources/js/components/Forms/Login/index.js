import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import { Formik, Form, Field } from "formik";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextInput from "../../FormElems/TextInput";

import { LoginSchema } from "./_validation";
import IconFB from "../../../../img/icons/iconFB.svg";
import iconGoogle from "../../../../img/icons/iconGoogle.png";
import { styles } from "./styles";

class Login extends React.Component {
    state = {
        rememberCheckbox: false
    };
    handleCheckboxChange = () => {
        this.setState({
            rememberCheckbox: !this.state.rememberCheckbox
        });
    };
    render() {
        const { login, classes } = this.props;
        return (
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                    values.rememberMe = this.state.rememberCheckbox;
                    return console.log(values);
                }}
            >
                {() => (
                    <div className={"form-block " + classes.root}>
                        <Typography
                            component="h1"
                            variant="h3"
                            gutterBottom
                            color={"primary"}
                            align="center"
                        >
                            Login
                        </Typography>
                        <Form>
                            <Field
                                type="text"
                                name="username"
                                label="User Name"
                                component={TextInput}
                                classProp={classes.formInput}
                            />
                            <Field
                                type="password"
                                name="password"
                                label="Password"
                                component={TextInput}
                                classProp={classes.formInput}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.rememberCheckbox}
                                        onChange={this.handleCheckboxChange}
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember Me"
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
                        <Button
                            ariant="contained"
                            href={"facebook"}
                            className={classNames(
                                classes.button,
                                classes.homepageButton,
                                classes.FBButtton
                            )}
                        >
                            <img
                                className={classes.Icon}
                                src={IconFB}
                                alt="facebook"
                            />
                            Login with FaceBook
                        </Button>
                        <Button
                            ariant="contained"
                            href={"facebook"}
                            className={classNames(
                                classes.button,
                                classes.homepageButton,
                                classes.GoogleButtton
                            )}
                        >
                            <img
                                className={classes.Icon}
                                src={iconGoogle}
                                alt="facebook"
                            />
                            Login with Google
                        </Button>
                    </div>
                )}
            </Formik>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
