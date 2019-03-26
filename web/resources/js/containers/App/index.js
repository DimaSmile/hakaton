import React from "react";
import { withRouter, Switch, Route } from "react-router";

import * as path from "../../constants/routes";

import Layout from "../../components/Layout";
import Home from "../Home";

const App = props => (
    <Layout>
        <Switch location={props.location}>
            <Route exact path={path.HOME} component={Home} />
        </Switch>
    </Layout>
);
export default withRouter(App);
