import React from "react";
import { withRouter, Switch, Route } from "react-router";

import * as path from "../../constants/routes";

import Login from "../Login";
import Registration from "../Registration";
import Dashboard from "../Dashboard";
import DashboardHome from "../DashboardHome";
import Team from "../Team";
import MyVocation from "../MyVocation";
import Birthdays from "../Birthdays";
import TeamBuilding from "../TeamBuilding";
import TeamCalendar from "../TeamCalendar";
import UserSettings from "../UserSettings";

const App = props => (
    <Switch location={props.location}>
        <Route exact path={path.HOME} component={Dashboard} />
        <Route exact path={path.LOGIN} component={Login} />
        <Route exact path={path.REGISTRATION} component={Registration} />
        <Dashboard>
            <Switch {...props}>
                <Route path={path.DASHBOARD_HOME} component={DashboardHome} />
                <Route exact path={path.TEAM} component={Team} />
                <Route exact path={path.MY_VOCATION} component={MyVocation} />
                <Route exact path={path.BIRTHDAYS} component={Birthdays} />
                <Route
                    exact
                    path={path.TEAM_BUILDING}
                    component={TeamBuilding}
                />
                <Route
                    exact
                    path={path.TEAM_CALENDAR}
                    component={TeamCalendar}
                />
                <Route exact path={path.TEAM} component={Team} />
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
