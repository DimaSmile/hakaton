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
import Button from "@material-ui/core/Button";
import DatePickerField from "../../components/FormElems/DatePicker";
import { Formik, Form, Field } from "formik";
// import TextInput from "../../FormElems/TextInput";
// import { UserSettingsSchema } from "./_validationSchema";

class MyVocation extends PureComponent {
    state = {
        showError: false,
        showConfirmation: false,
        errorText: "",
        startDate: null,
        endDate: null
    };
    handleShowError = error => {
        console.log("1");
        this.setState({
            showError: true,
            errorText: error
        });
    };
    handleshowConfirmation = (start, end) => {
        console.log("1");
        this.setState({
            showConfirmation: true,
            startDate: start,
            endDate: end
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
    closeConfirmation = () => {
        this.setState({
            showConfirmation: false
        });
    };
    render() {
        const { classes, data, user } = this.props;
        const { showError, showConfirmation } = this.state;
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
                                handleshowConfirmation={
                                    this.handleshowConfirmation
                                }
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
                <Modal
                    open={showConfirmation}
                    handleClose={this.closeConfirmation}
                >
                    <Card>
                        <CardContent>
                            <Formik
                                enableReinitialize={true}
                                initialValues={{
                                    id: user && user.id ? user.id : "",
                                    startDate: this.state.startDate
                                        ? this.state.startDate
                                        : "",
                                    endDate: this.state.endDate
                                        ? this.state.endDate
                                        : ""
                                }}
                                onSubmit={values => {
                                    console.log(values);
                                }}
                            >
                                {() => (
                                    <div
                                        className={"form-block " + classes.root}
                                    >
                                        <Form>
                                            <Field
                                                type="text"
                                                name="startDate"
                                                label="Start Vocation"
                                                component={DatePickerField}
                                                classProp={classes.formInput}
                                                disabled={true}
                                            />
                                            <Field
                                                type="text"
                                                name="endDate"
                                                label="End Vocation"
                                                component={DatePickerField}
                                                classProp={classes.formInput}
                                                disabled={true}
                                            />
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className={classes.submitButton}
                                                type="submit"
                                            >
                                                Submit
                                            </Button>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
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
