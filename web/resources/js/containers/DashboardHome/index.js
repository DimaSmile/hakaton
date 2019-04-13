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
        const { classes } = this.props;

        const DATA = [
            { x0: 0, x: 1, y: 40 },
            { x0: 1, x: 2, y: 20 },
            { x0: 2, x: 3, y: 80 },
            { x0: 3, x: 4, y: 60 },
            { x0: 4, x: 5, y: 50 },
            { x0: 5, x: 6, y: 30 },
            { x0: 6, x: 7, y: 10 }
        ];

        return (
            <div>
                <div className={classes.flex}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.title} variant="h2">
                                {this.state.days_vacation}
                            </Typography>
                            <Typography variant="h3" className={classes.title}>
                                {this.state.days_vacation == 1 ||
                                this.state.days_vacation == -1
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
                                {this.state.days_sick_leave}
                            </Typography>
                            <Typography variant="h3" className={classes.title}>
                                {this.state.days_sick_leave == 1 ||
                                this.state.days_sick_leave == -1
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
                            yDomain={[0, 100]}
                            
                        >
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            
                            <YAxis />
                            <VerticalRectSeries
                                data={DATA}
                                stroke="white"
                                colorType="literal"
                                className={classes.rect}
                            />
                        </XYPlot>
                    </Card>
                    <div className={classes.event}>
                        <Event />
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
        users: state.dashboard.data,
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
