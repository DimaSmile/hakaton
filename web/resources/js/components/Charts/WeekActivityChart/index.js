import * as React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Chart } from "react-google-charts";
import Loader from "../../Loader";

import { styles } from "./style";

function formatData(date) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let Weekday = days[date.getDay()];
    let day = date.getDate();
    let year = date.getFullYear();
    let month =
        date.getMonth() < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
    return Weekday + " " + year + "-" + month + "-" + day;
}

function formatDataDefault(date) {
    let day = date.getDate();
    let year = date.getFullYear();
    let month =
        date.getMonth() < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
    return " " + year + "-" + month + "-" + day;
}

const WeekActivityChart = props => {
    const { classes, graphics_info } = props;
    if (graphics_info) {
        const chartData = [[" ", "Hours "]];
        let daysAmount = Object.keys(graphics_info).length;
        if (daysAmount === 0) {
            let today = new Date();
            today.setDate(today.getDate() + 1);
            graphics_info[formatDataDefault(today)] = 0;
            daysAmount = Object.keys(graphics_info).length;
        }
        Object.keys(graphics_info).forEach((elem, i) => {
            let day = new Date(elem).getDay();
            if (i === 0) {
                for (let i = 0; i < day; i++) {
                    let d = new Date(elem);
                    d.setDate(d.getDate() - (day - i));
                    chartData.push([formatData(d), 0]);
                }
            }
            chartData.push([formatData(new Date(elem)), graphics_info[elem]]);
            if (i === daysAmount - 1) {
                for (let i = 5; i >= day; i--) {
                    let d = new Date(elem);
                    d.setDate(d.getDate() + (6 - i));
                    chartData.push([formatData(d), 0]);
                }
            }
        });
        return (
            <div className={classes.chart}>
                <Chart
                    width={"800px"}
                    height={"500px"}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={chartData}
                    options={{
                        legend: { position: "none" }
                    }}
                />
            </div>
        );
    } else {
        return <Loader />;
    }
};

WeekActivityChart.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeekActivityChart);
