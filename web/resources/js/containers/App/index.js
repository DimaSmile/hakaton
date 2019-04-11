import React from "react";
import { withRouter, Switch, Route } from "react-router";

import * as path from "../../constants/routes";

import Layout from "../../components/Layout";
import Home from "../Home";

import Login from "../Login";
import Registration from "../Registration";
import Dashboard from "../Dashboard";

const App = props => (
    // <Layout>
    <Switch location={props.location}>
        <Route exact path={path.HOME} component={Dashboard} />
        <Route exact path={path.LOGIN} component={Login} />
        <Route exact path={path.REGISTRATION} component={Registration} />
        <Route exact path={path.DASHBOARD} component={Dashboard} />
    </Switch>
    // </Layout>
);
export default withRouter(App);
