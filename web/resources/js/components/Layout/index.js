import React, { Fragment } from "react";
import Header from "../Header";
import ItemsList from "../../containers/ItemsList";

const Layout = props => {
    const { classes, children } = props;
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    );
};

export default Layout;
