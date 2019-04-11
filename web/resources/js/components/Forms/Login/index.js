import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as path from "../../../constants/routes";

import { login } from "../../../actions/Auth";

import { styles } from "./styles";

import { Formik, Form, Field } from "formik";
import TextInput from "../../FormElems/TextInput";
import { LoginSchema } from "./_validation";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// import IconFB from "../../../../img/icons/iconFB.svg";
// import iconGoogle from "../../../../img/icons/iconGoogle.png";

class LoginForm extends PureComponent {
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
                    email: "",
                    password: ""
                }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                    login(values);
                }}
            >
                {() => (
                    <div className={"form-block " + classes.root}>
                        <Typography
                            component="h1"
                            variant="h3"
                            gutterBottom
                            color={"secondary"}
                            align="center"
                        >
                            Login
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            align="center"
                        >
                            <Link to={path.REGISTRATION}> or Register</Link>
                        </Typography>

                        <Form>
                            <Field
                                type="text"
                                name="email"
                                label="Email"
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
                        {/* <Button
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
                        </Button> */}
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            align="center"
                        >
                            <Link to={path.REGISTRATION}>Forgot Password</Link>
                        </Typography>
                    </div>
                )}
            </Formik>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        user: state.user.user,
        error: state.user.error
    };
};

const mapDispatchToProps = dispatch => ({
    login: bindActionCreators(login, dispatch),
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(withStyles(styles)(LoginForm));
