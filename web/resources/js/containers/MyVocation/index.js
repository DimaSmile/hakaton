import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "@material-ui/core/Grid";
import { sendVocationAction, getAllVacation } from "../../actions/vocation";
import { styles } from "./style";
import CalendarWithSelect from "../../components/CalendarWithSelect";
import Modal from "../../components/Modal";
import Button from "@material-ui/core/Button";
import DatePickerField from "../../components/FormElems/DatePicker";
import { Formik, Form, Field } from "formik";
import Close from "@material-ui/icons/Close";

class MyVocation extends PureComponent {
    state = {
        showError: false,
        showConfirmation: false,
        errorText: "",
        startDate: null,
        endDate: null
    };
    componentDidMount() {
        if (this.user && this.user.id && this.vocation === null) {
            this.props.getAllVacation(this.user.id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (
            nextProps.user &&
            nextProps.user.id &&
            nextProps.vocation === null
        ) {
            console.log(nextProps);
            this.props.getAllVacation(nextProps.user.id);
        }
    }
    handleShowError = error => {
        this.setState({
            showError: true,
            errorText: error
        });
    };
    handleshowConfirmation = (start, end) => {
        this.setState({
            showConfirmation: true,
            startDate: start,
            endDate: end
        });
    };
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
        const {
            classes,
            data,
            user,
            sendVocationAction,
            vocation
        } = this.props;
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
                                vocation={vocation}
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
                        <Close
                            onClick={this.closeErrorModal}
                            className={classes.close}
                        />
                        <CardContent>
                            <Typography variant="h5" className={classes.error}>
                                Error
                            </Typography>
                            <div>{this.state.errorText}</div>
                        </CardContent>
                    </Card>
                </Modal>
                <Modal
                    open={showConfirmation}
                    handleClose={this.closeConfirmation}
                >
                    <Card className={classes.modal}>
                        <CardContent>
                            <Formik
                                enableReinitialize={true}
                                initialValues={{
                                    id: user && user.id ? user.id : "",
                                    start: this.state.startDate
                                        ? this.state.startDate
                                        : "",
                                    end: this.state.endDate
                                        ? this.state.endDate
                                        : ""
                                }}
                                onSubmit={values => {
                                    sendVocationAction(values);
                                }}
                            >
                                {() => (
                                    <div
                                        className={"form-block " + classes.root}
                                    >
                                        <Form>
                                            <Field
                                                type="text"
                                                name="start"
                                                label="Start Vocation"
                                                component={DatePickerField}
                                                classProp={classes.formInput}
                                                disabled={true}
                                            />
                                            <Field
                                                type="text"
                                                name="end"
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
        error: state.dashboard.usersErrors,
        vocation: state.vocation.vacationData
    };
};

const mapDispatchToProps = dispatch => ({
    sendVocationAction: bindActionCreators(sendVocationAction, dispatch),
    getAllVacation: bindActionCreators(getAllVacation, dispatch),
    dispatch
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(withStyles(styles)(MyVocation));
