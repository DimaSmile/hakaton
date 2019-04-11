import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import SingUp from "../../components/Forms/SingUp";

import { styles } from "./style";

class Registration extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.formWrapper}>
                    <SingUp />
                </div>
            </div>
        );
    }
}

Registration.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Registration);
