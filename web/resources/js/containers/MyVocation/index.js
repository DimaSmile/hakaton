import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "@material-ui/core/Grid";
import { dashboardAction } from "../../actions/Dashboard";
import { styles } from "./style";
import CalendarWithSelect from "../../components/CalendarWithSelect";
import Modal from "../../components/Modal";

class MyVocation extends PureComponent {
    state = {
        showError: false,
        errorText: ""
    };
    handleShowError = error => {
        console.log("1");
        this.setState({
            showError: true,
            errorText: error
        });
    };
    componentDidMount() {
        this.props.dashboardAction();
    }
    closeErrorModal = () => {
        this.setState({
            showError: false
        });
    };
    render() {
        const { classes, data, user } = this.props;
        const { showError } = this.state;
        const startWorking =
            user && user.start_working ? user.start_working : false;
        const vacation_days = data ? data.vacation_days : "";
        return (
            <Grid container spacing={16}>
                <Grid item xs={10}>
                    <Card>
                        <CardContent>
                            <CalendarWithSelect
                                startWorking={startWorking}
                                handleShowError={this.handleShowError}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.title} variant="h2">
                                {vacation_days ? vacation_days : 0}
                            </Typography>
                            <Typography variant="h3" className={classes.title}>
                                {vacation_days == 1 || vacation_days == -1
                                    ? "day"
                                    : "days"}
                            </Typography>
                            <Typography variant="h5" className={classes.title}>
                                vacation
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Modal open={showError} handleClose={this.closeErrorModal}>
                    <Card>
                        <CardContent>
                            <div>{this.state.errorText}</div>
                        </CardContent>
                    </Card>
                </Modal>
            </Grid>
        );
    }
}

MyVocation.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        data: state.dashboard.dashboardData,
        user: state.user.user,
        error: state.dashboard.usersErrors
    };
};

const mapDispatchToProps = dispatch => ({
    dashboardAction: bindActionCreators(dashboardAction, dispatch),
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(withStyles(styles)(MyVocation));
