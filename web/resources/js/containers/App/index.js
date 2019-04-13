import React from "react";
import { withRouter, Switch, Route } from "react-router";

import * as path from "../../constants/routes";

import Login from "../Login";
import Registration from "../Registration";
import Dashboard from "../Dashboard";
import SimplePage1 from "../SimplePage1";
import UserSettings from "../UserSettings";

const App = props => (
    <Switch location={props.location}>
        <Route exact path={path.HOME} component={Dashboard} />
        <Route exact path={path.LOGIN} component={Login} />
        <Route exact path={path.REGISTRATION} component={Registration} />
        <Dashboard>
            <Switch>
                <Route exact path={path.DASHBOARD} component={SimplePage1} />
                <Route
                    exact
                    path={path.SIMPLE_PAGE_1}
                    component={SimplePage1}
                />
                <Route
                    exact
                    path={path.USER_SETTINGS}
                    component={UserSettings}
                />
            </Switch>
        </Dashboard>
    </Switch>
);

export default withRouter(App);
