import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import UserSettingsForm from "../../components/Forms/UserSettingsForm";
import { login } from "../../actions/Auth";

import { styles } from "./style";

class UserSettings extends Component {
    render() {
        const { classes, user } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <UserSettingsForm user={user} />
                </CardContent>
            </Card>
        );
    }
}

UserSettings.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        user: state.user.user
    };
};

const mapDispatchToProps = dispatch => ({
    login: bindActionCreators(login, dispatch),
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(withStyles(styles)(UserSettings));
