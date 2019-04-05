import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import SeatchBar from "../SearchBar";
import Navigation from "../Navigation";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/Auth";

const Header = props => {
    const { classes } = props;
    console.log(props.login);
    return (
        <div className={classes.root}>
            <AppBar>
                <div className="wrapper">
                    <Toolbar>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            color="inherit"
                            noWrap
                        >
                            Laravel React Boilerplate
                        </Typography>
                        <SeatchBar />
                        <Navigation />
                    </Toolbar>
                    <button onClick={props.login}>Login Action Example</button>
                </div>
            </AppBar>
        </div>
    );
};

const styles = theme => ({
    root: {
        "& header": {
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        }
    }
});

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            login: actions.loginAction
        },
        dispatch
    );

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(withStyles(styles)(Header));
