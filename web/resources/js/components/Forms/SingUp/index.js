import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import * as path from "../../../constants/routes";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { registration } from "../../../actions/Auth";

import { Formik, Form, Field } from "formik";
import { SignupSchema } from "./_validation";
import TextInput from "../../FormElems/TextInput";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// import IconFB from "../../../../img/icons/iconFB.svg";
// import iconGoogle from "../../../../img/icons/iconGoogle.png";

import { styles } from "./styles";

const SignUp = props => {
    const { registration, classes, error } = props;
    return (
        <Formik
            initialValues={{
                email: "",
                name: "",
                password: "",
                password2: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={values => registration(values)}
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
                        Sign up
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom align="center">
                        <Link to={path.LOGIN}> or Login</Link>
                    </Typography>
                    {error}
                    <Form>
                        <Field
                            type="text"
                            name="name"
                            label="Name"
                            component={TextInput}
                            classProp={classes.formInput}
                        />
                        <Field
                            type="email"
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
                        <Field
                            type="password"
                            name="password2"
                            label="Confirm password"
                            component={TextInput}
                            classProp={classes.formInput}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                            type="submit"
                        >
                            Confirm
                        </Button>
                    </Form>
                    <Typography
                        className={classes.policy}
                        variant="subtitle1"
                        gutterBottom
                        align="center"
                    >
                        <Link to={path.REGISTRATION}> or Policy</Link>
                    </Typography>
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
                        Sign Up with FaceBook
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
                        Sign Up with Google
                    </Button> */}
                </div>
            )}
        </Formik>
    );
};

const mapStateToProps = state => {
    return {
        user: state
    };
};

const mapDispatchToProps = dispatch => ({
    registration: bindActionCreators(registration, dispatch),
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(withStyles(styles)(SignUp));
