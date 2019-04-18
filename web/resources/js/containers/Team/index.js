import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import User from "../../components/User";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userInfoAction } from "../../actions/UserInfo";
import Loader from "../../components/Loader";

import { styles } from "./style";

class Team extends Component {
    componentDidMount() {
        this.props.userInfoAction();
        // Pusher.logToConsole = true;
        // Add API Key & cluster here to make the connection
        // var pusher = new Pusher("22228b2d68f08b618c6d", {
        //     cluster: "eu",
        //     forceTLS: true
        // });

        // var channel = pusher.subscribe("dashboard");
        // channel.bind("my_event", data => {
        //     // console.log(this.props);
        //     this.props.dispatch(userInfoAction());
        // });
        // // check if the user is subscribed to the above channel
        // channel.bind("pusher:subscription_succeeded", function(members) {
        //     fetch(
        //         "http://localhost:8080/api/isOnline/?token=" +
        //             window.localStorage.getItem("auth_token") +
        //             "&is_login=1"
        //     );
        //     // console.log("successfully subscribed!");
        // });
    }
    render() {
        const { classes, users } = this.props;
        if (users) {
            return (
                <div>
                    <Typography className={classes.title} variant="h5">
                        Managers
                    </Typography>
                    <div className={classes.flex}>
                        {users.map((item, index) => {
                            if (item.role_id == 2) {
                                return (
                                    <User
                                        key={index}
                                        userName={item.name}
                                        position={item.position}
                                        image={item.image}
                                        birthday={item.birthday}
                                        start_working={item.start_working}
                                        online={item.is_active}
                                    />
                                );
                            }
                        })}
                    </div>
                    <Typography className={classes.title} variant="h5">
                        Developers
                    </Typography>
                    <div className={classes.flex}>
                        {users.map((item, index) => {
                            if (item.role_id == 3) {
                                return (
                                    <User
                                        key={index}
                                        userName={item.name}
                                        position={item.position}
                                        image={item.image}
                                        birthday={item.birthday}
                                        start_working={item.start_working}
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
            );
        } else {
            return <Loader />;
        }
    }
}

Team.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        users: state.userInfo.userInfoData,
        error: state.userInfo.dataError
    };
};

const mapDispatchToProps = dispatch => ({
    userInfoAction: bindActionCreators(userInfoAction, dispatch),
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(withStyles(styles)(Team));
