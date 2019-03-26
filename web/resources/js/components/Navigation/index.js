import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { styles } from "./styles";
import Modal from "../Modal";
import Login from "../Forms/Login";
import SignUp from "../Forms/SingUp";

class Navigation extends Component {
    state = {
        loginOpen: false,
        signUpOpen: false
    };
    handleOpenModal = e => {
        this.setState({
            [e.currentTarget.value]: true
        });
    };
    handleCloseModal = id => {
        this.setState({
            [id]: false
        });
    };
    render() {
        const { classes } = this.props;
        const { loginOpen, signUpOpen } = this.state;
        return (
            <div className={classes.root}>
                <Button
                    color="inherit"
                    value={"loginOpen"}
                    variant="outlined"
                    onClick={this.handleOpenModal}
                >
                    Login
                </Button>
                <Button
                    color="inherit"
                    variant="outlined"
                    value={"signUpOpen"}
                    onClick={this.handleOpenModal}
                >
                    Sign Up
                </Button>
                <Modal
                    open={loginOpen}
                    handleClose={this.handleCloseModal}
                    id={"loginOpen"}
                >
                    <Login />
                </Modal>
                <Modal
                    open={signUpOpen}
                    handleClose={this.handleCloseModal}
                    id={"signUpOpen"}
                >
                    <SignUp />
                </Modal>
            </div>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);
