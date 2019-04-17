import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { history } from "../../helpers/history";
import * as path from "../../constants/routes";
import { verifyToken, LogOut } from "../../actions/Auth";

import Layout from "../../components/Layout";
import Loader from "../../components/Loader";

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
        const { isLoading, LogOut } = this.props;
        if (!isLoading) {
            const avatar =
                this.props.user && this.props.user.image
                    ? this.props.user.image
                    : false;
            return (
                <Layout
                    children={this.props.children}
                    user={this.props.user}
                    logOut={LogOut}
                    avatar={avatar}
                />
            );
        } else {
            return <Loader />;
        }
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.isAuth,
        user: state.user.user,
        isLoading: state.user.isLoading
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
