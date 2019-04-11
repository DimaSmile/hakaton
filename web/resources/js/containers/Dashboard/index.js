import React, { Component } from "react";
import * as path from "../../constants/routes";
import { verifyToken } from "../../actions/Auth";
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
        return <Layout children={this.props.children} user={this.props.user} />;
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
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(Dashboard);
