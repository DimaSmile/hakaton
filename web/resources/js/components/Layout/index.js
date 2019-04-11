import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import Header from "../Header";
import SideBar from "../SideBar";

import { styles } from "./style";

class Layout extends React.Component {
    state = {
        open: true
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme, children, user } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header open={open} handleDrawerOpen={this.handleDrawerOpen} />
                <SideBar
                    open={open}
                    handleDrawerClose={this.handleDrawerClose}
                    theme={theme}
                    user={user}
                />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Layout);
