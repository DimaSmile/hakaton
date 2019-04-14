import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { styles } from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ButtonActiveAction } from "../../actions/ButtonActive";

class SwitchOnline extends Component {
    state = {
        checkedB: true
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
        const id =
            this.props.user && this.props.user.id ? this.props.user.id : null;
        const status = this.state.checkedB;
        this.props.ButtonActiveAction(id, status);
    };

    render() {
        const { classes, data } = this.props;
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

const mapStateToProps = state => {
    return {
        user: state.user.user
        // error: state.user.usersErrors
    };
};

const mapDispatchToProps = dispatch => ({
    ButtonActiveAction: bindActionCreators(ButtonActiveAction, dispatch),
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(withStyles(styles)(SwitchOnline));
