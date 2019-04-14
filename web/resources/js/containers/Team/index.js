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
