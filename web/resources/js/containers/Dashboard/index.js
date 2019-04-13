import React, { Component } from "react";
import * as path from "../../constants/routes";
import { verifyToken, LogOut } from "../../actions/Auth";
import { history } from "../../helpers/history";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Layout from "../../components/Layout";

class Dashboard extends Component {
    componentWillMount() {
        const token = window.localStorage.getItem("auth_token");
        if (!this.props.isAuth) {
            if (!token) {
                history.push(path.LOGIN);
            } else {
                this.props.verifyToken(token);
            }
        }
    }
    render() {
        const { LogOut } = this.props;
        return (
            <Layout
                children={this.props.children}
                user={this.props.user}
                logOut={LogOut}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.isAuth,
        user: state.user.user
    };
};

const mapDispatchToProps = dispatch => ({
    verifyToken: bindActionCreators(verifyToken, dispatch),
    LogOut: bindActionCreators(LogOut, dispatch),
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(Dashboard);
