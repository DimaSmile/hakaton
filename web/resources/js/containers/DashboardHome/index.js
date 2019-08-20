import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { dashboardAction } from "../../actions/Dashboard";

import Event from "../../components/Event";
import { styles } from "./style";

import WeekActivityChart from "../../components/Charts/WeekActivityChart";
import GradienCard from "../../components/Cards/GradienCard";
import Loader from "../../components/Loader";
import DataErrors from "../../components/DataErrors";

class DashboardHome extends PureComponent {
    componentDidMount() {
        this.props.user ? this.props.dashboardAction() : false;
    }
    componentWillReceiveProps(nextProps) {
        nextProps.user && !nextProps.data
            ? this.props.dashboardAction()
            : false;
    }
    render() {
        const { classes, data, dataError } = this.props;

        const vacation_days = data ? data.vacation_days : "0";
        const sick_days = data ? data.sick_days : "0";
        const nextEvent = data
            ? {
                  user_name: data.event_name,
                  current_birthday: data.start_event_date
              }
            : null;
        if (data) {
            return (
                <div>
                    <div className={classes.flex}>
                        <GradienCard data={vacation_days} points={"vacation"} />
                        <GradienCard data={sick_days} points={"sick"} />
                    </div>
                    <div className={classes.bottom_container}>
                        <Card className={classes.diagram}>
                            <Typography
                                variant="h4"
                                className={classes.title_diagram}
                            >
                                Week Activity
                            </Typography>
                            <WeekActivityChart
                                graphics_info={data.graphics_info}
                            />
                        </Card>
                        <div className={classes.event}>
                            <Event nextEvent={nextEvent} />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            if (dataError){
                return <DataErrors error={dataError}/>
            } else {
                return <Loader />;
            }
        } 
    }
}

DashboardHome.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps =  state => {
    return {
        user: state.user.user,
        data: state.dashboard.dashboardData,
        error: state.dashboard.usersErrors,
        dataError: state.dashboard.dataError
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

export default connector(withStyles(styles)(DashboardHome));
