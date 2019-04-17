import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { styles } from "./style";

const GradientCard = props => {
    const { classes, data, points } = props;
    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.title} variant="h2">
                    {data}
                </Typography>
                <Typography variant="h3" className={classes.title}>
                    {data == 1 || data == -1 ? "day" : "days"}
                </Typography>
                <Typography variant="h5" className={classes.title}>
                    {points}
                </Typography>
            </CardContent>
        </Card>
    );
};

GradientCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GradientCard);
