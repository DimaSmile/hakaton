import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalRectSeries,
    VerticalGridLines,
    HorizontalGridLines
} from "react-vis";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { dashboardAction } from "../../actions/Dashboard";

import Event from "../../components/Event";
import { styles } from "./style";

class DashboardHome extends Component {
    state = {
        days_vacation: 5,
        days_sick_leave: 1
    };

    componentDidMount() {
        this.props.dashboardAction();
    }

    render() {
        const { classes, data } = this.props;
        let datagraf = [];
        this.props.data && this.props.data.graphics_info
            ? Object.values(data.graphics_info).map((item, index, array) => {
                  let sindex = index + 1;
                  datagraf.push({ x0: index, x: sindex, y: item });
              })
            : null;
        const vacation_days = data ? data.vacation_days : "";
        const sick_days = data ? data.sick_days : "";
        const start_event_date = data ? data.start_event_date : "";
        const event_name = data ? data.event_name : "";
        const nextEvent = data
            ? {
                  user_name: data.event_name,
                  current_birthday: data.start_event_date
              }
            : null;
        return (
            <div>
                <div className={classes.flex}>
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
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h2" className={classes.title}>
                                {sick_days ? sick_days : 0}
                            </Typography>
                            <Typography variant="h3" className={classes.title}>
                                {sick_days == 1 || sick_days == -1
                                    ? "day"
                                    : "days"}
                            </Typography>
                            <Typography variant="h5" className={classes.title}>
                                sick leave
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className={classes.bottom_container}>
                    <Card className={classes.diagram}>
                        <Typography
                            variant="h4"
                            className={classes.title_diagram}
                        >
                            Week Activity
                        </Typography>
                        <XYPlot
                            width={800}
                            height={400}
                            className={classes.graf}
                            yDomain={[0, 12]}
                        >
                            <VerticalGridLines />
                            <HorizontalGridLines />

                            <YAxis />
                            <VerticalRectSeries
                                data={datagraf}
                                stroke="white"
                                colorType="literal"
                                className={classes.rect}
                            />
                        </XYPlot>
                    </Card>
                    <div className={classes.event}>
                        <Event nextEvent={nextEvent} />
                    </div>
                </div>
            </div>
        );
    }
}

DashboardHome.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        data: state.dashboard.dashboardData,
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

export default connector(withStyles(styles)(DashboardHome));
