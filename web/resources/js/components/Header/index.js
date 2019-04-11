import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// import SeatchBar from "../SearchBar";
// import Navigation from "../Navigation";

import { styles } from "./style";

const Header = props => {
    const { classes } = props;
    return (
        <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
                [classes.appBarShift]: props.open
            })}
        >
            <Toolbar disableGutters={!props.open}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={props.handleDrawerOpen}
                    className={classNames(classes.menuButton, {
                        [classes.hide]: props.open
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                    RockLab Calendar
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
