import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { XYPlot, XAxis, YAxis, VerticalRectSeries } from "react-vis";

import { styles } from "./style";

class DashboardHome extends Component {
    state = {
        days_vacation: 5,
        days_sick_leave: 1
    };

    render() {
        const { classes } = this.props;

        const DATA = [
            { x0: 0, x: 1, y: 1 },
            { x0: 1, x: 2, y: 2 },
            { x0: 2, x: 3, y: 10 },
            { x0: 3, x: 4, y: 6 },
            { x0: 4, x: 5, y: 5 },
            { x0: 5, x: 6, y: 3 },
            { x0: 6, x: 7, y: 1 }
        ];

        return (
            <div>
                <div className={classes.flex}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h2">
                                {this.state.days_vacation}
                            </Typography>
                            <Typography variant="h3">
                                {this.state.days_vacation == 1 ||
                                this.state.days_vacation == -1
                                    ? "day"
                                    : "days"}
                            </Typography>
                            <Typography variant="h5">
                                vacation
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h2">
                                {this.state.days_sick_leave}
                            </Typography>
                            <Typography variant="h3">
                                {this.state.days_sick_leave == 1 ||
                                this.state.days_sick_leave == -1
                                    ? "day"
                                    : "days"}
                            </Typography>
                            <Typography variant="h5">
                                sick leave
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className={classes.diagram}>
                    <Typography variant="h4">
                        Week Activity
                    </Typography>
                    <XYPlot width={500} height={300}>
                        <YAxis />
                        <VerticalRectSeries
                            data={DATA}
                            stroke="white"
                            colorType="literal"
                        />
                    </XYPlot>
                </div>
            </div>
        );
    }
}

DashboardHome.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardHome);
