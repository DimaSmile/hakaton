import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import User from "../../components/User";

import { styles } from "./style";

class Team extends Component {
    componentDidMount() {
        // this.props.usersListAction();
        // Echo.channel('user1')
        // .listen('CheckUser', (e) => {
        //     console.log(55544444455)
        // });

    // if (userId != 'null') {
    //     Echo.join('Online')
    //         .here((users) => {
    //             this.onlineUsers = users;
    //         })
    //         .joining((user) => {
    //             this.onlineUsers.push(user);
    //         })
    //         .leaving((user) => {
    //             this.onlineUsers = this.onlineUsers.filter((u) => {u != user});
    //         });
    // }
        Echo.join('counter')
            .here(users => this.count = users.length)
            .joining(user => this.count++)
            .leaving(user => this.count--);
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography className={classes.title} variant="h5">
                    Managers
                </Typography>
                <User
                    userName="Ivan Petrov"
                    vocation="developer"
                    image="../../images/defaultAvatar.png"
                />
                <Typography className={classes.title} variant="h5">
                    Developers
                </Typography>
                <div className={classes.flex}>
                    <User
                        userName="Ivan Petrov"
                        vocation="developer"
                        image="../../images/defaultAvatar.png"
                    />
                    <User
                        userName="Ivan Petrov"
                        vocation="developer"
                        image="../../images/defaultAvatar.png"
                    />
                    <User
                        userName="Ivan Petrov"
                        vocation="developer"
                        image="../../images/defaultAvatar.png"
                    />
                    <User
                        userName="Ivan Petrov"
                        vocation="developer"
                        image="../../images/defaultAvatar.png"
                    />
                    <User
                        userName="Ivan Petrov"
                        vocation="developer"
                        image="../../images/defaultAvatar.png"
                    />
                    <User
                        userName="Ivan Petrov"
                        vocation="developer"
                        image="../../images/defaultAvatar.png"
                    />
                    <User
                        userName="Ivan Petrov"
                        vocation="developer"
                        image="../../images/defaultAvatar.png"
                    />
                </div>
            </div>
        );
    }
}

Team.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Team);
