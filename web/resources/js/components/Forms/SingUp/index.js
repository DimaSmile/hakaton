import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import Typography from "@material-ui/core/Typography";
import TextInput from "../../FormElems/TextInput";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import IconFB from "../../../../img/icons/iconFB.svg";
import iconGoogle from "../../../../img/icons/iconGoogle.png";
import { SignupSchema } from "./_validation";
import { styles } from "./styles";

const SignUp = props => {
    const { register, classes, error } = props;

    return (
        <Formik
            initialValues={{
                email: "",
                password1: "",
                password2: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={values => console.log(values)}
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
                    {error}
                    <Form>
                        <Field
                            type="email"
                            name="email"
                            label="Email"
                            component={TextInput}
                            classProp={classes.formInput}
                        />
                        <Field
                            type="password"
                            name="password1"
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
                    </Button>
                    <div className={classes.bottoLinks}>
                        <Link
                            href={"/privacy"}
                            className={classNames(
                                classes.link,
                                classes.linkCustom
                            )}
                        >
                            Privacy
                        </Link>
                    </div>
                </div>
            )}
        </Formik>
    );
};

export default withStyles(styles)(SignUp);
