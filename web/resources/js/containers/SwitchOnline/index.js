import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { styles } from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ButtonActiveAction } from "../../actions/ButtonActive";

class SwitchOnline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedB: false
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.user.tracker_status) {
            this.setState({
                checkedB: !!nextProps.user.tracker_status
            });
        }
    }
    handleChange = name => event => {
        const id =
            this.props.user && this.props.user.id ? this.props.user.id : null;
        this.setState(
            { [name]: event.target.checked },
            this.props.ButtonActiveAction(id, event.target.checked)
        );
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

const mapStateToProps = state => {
    return {
        user: state.user.user
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
