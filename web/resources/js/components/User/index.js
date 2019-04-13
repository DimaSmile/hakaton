import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import MessageIcon from "@material-ui/icons/Email";


import { styles } from "./style";

class User extends Component {
    state={
        active: true
    }
    render() {
        const { classes, image, userName, vocation } = this.props;
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Avatar
                        alt="avatar"
                        src={image}
                        className={classes.avatar}
                    />
                    <Typography className={classes.userName} variant="h5">
                        {userName}
                    </Typography>
                    <Typography className={classes.userName} variant="h6">
                        {vocation}
                    </Typography>
                </CardContent>
                <span className={classes.active}></span>
            </Card>
        );
    }
}

User.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(User);
