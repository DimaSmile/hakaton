import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { styles } from "./style";

class SwitchOnline extends Component {
    state = {
        checkedB: true
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Switch
                    classes={{
                        switchBase: classes.iOSSwitchBase,
                        bar: classes.iOSBar,
                        icon: classes.iOSIcon,
                        iconChecked: classes.iOSIconChecked,
                        checked: classes.iOSChecked
                    }}
                    disableRipple
                    checked={this.state.checkedB}
                    onChange={this.handleChange("checkedB")}
                    value="checkedB"
                />
            </div>
        );
    }
}

SwitchOnline.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SwitchOnline);
