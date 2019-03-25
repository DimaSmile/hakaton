import React from "react";
import { withRouter, Switch, Route } from "react-router";

import * as path from "../../constants/routes";

import Home from "../Home";

const App = props => (
    <Switch location={props.location}>
        <Route exact path={path.HOME} component={Home} />
    </Switch>
);
export default App;
