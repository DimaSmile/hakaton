import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Switch from "@material-ui/core/Switch";
import { userInfoAction } from "../../actions/UserInfo";
import { ButtonActiveAction } from "../../actions/ButtonActive";

import {Val} from '../../helpers/auth-header';
import { styles } from "./style";

class SwitchOnline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedB: false
        };
    }
    componentDidMount() {
        // Pusher.logToConsole = true;
        var pusher = new Pusher("22228b2d68f08b618c6d", {
            cluster: "eu",
            forceTLS: true
        });

        this.channel = pusher.subscribe("dashboard");

        this.channel.bind("my_event", data => {
            this.props.dispatch(userInfoAction());
        });
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
        var baseUrl = window.location.origin;
        this.channel.bind(
            "pusher:subscription_succeeded",
            (function(members) {
                const token = tokenVal();
                fetch(
                    baseUrl + "/api/isOnline/?token=" +
                    token +
                        "&is_login=1"
                );
                console.log("1");
            })()
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
    userInfoAction: bindActionCreators(userInfoAction, dispatch),
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(withStyles(styles)(SwitchOnline));
