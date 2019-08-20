import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

import CalendarDefault from "../../components/Calendar";
import Event from "../../components/Event";
import { usersBirthdaysAction } from "../../actions/usersBirthdaysAction";

import { styles } from "./style";
import DataErrors from "../../components/DataErrors";

class Birthdays extends Component {
    componentDidMount() {
        this.props.usersBirthdaysAction();
    }
    componentWillReceiveProps(nextProps) {
        nextProps.user && !nextProps.usersBirthdays
            ? this.props.usersBirthdaysAction()
            : false;
    }
    render() {
        const { classes, usersBirthdays, error } = this.props;
        let nextEvent = usersBirthdays ? usersBirthdays.closest_birthday : null;
        if(error){
            return <DataErrors error={error}/>          
        }
        else
            return (
                <Grid container spacing={16}>
                    <Grid item xs={8}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <CalendarDefault
                                    birthdays={usersBirthdays}
                                    nextEvent={nextEvent}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.card}>
                            <Event nextEvent={nextEvent}/>
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
        user: state.user.user,
        usersBirthdays: state.usersBirthdaysList.users,
        error: state.usersBirthdaysList.usersErrors
    };
};

const mapDispatchToProps = dispatch => ({
    usersBirthdaysAction: bindActionCreators(usersBirthdaysAction, dispatch),
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(withStyles(styles)(Birthdays));
