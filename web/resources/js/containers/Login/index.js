import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import LoginForm from "../../components/Forms/Login";

import { styles } from "./style";

class Login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.formWrapper}>
                    <LoginForm />
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
