import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CalendarDefault from "../../components/Calendar";
import Event from "../../components/Event";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { usersListAction } from "../../actions/UsersList";

import { styles } from "./style";

class Birthdays extends Component {
    // componentDidMount() {
    //     this.props.usersListAction();
    // }
    render() {
        const { classes, users } = this.props;
        console.log(this.props);
        return (
            <Grid container spacing={16}>
                <Grid item xs={8}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <CalendarDefault birthdays={users} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Event />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

Birthdays.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        users: state.usersList.users,
        error: state.usersList.usersErrors
    };
};

const mapDispatchToProps = dispatch => ({
    usersListAction: bindActionCreators(usersListAction, dispatch),
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(withStyles(styles)(Birthdays));
