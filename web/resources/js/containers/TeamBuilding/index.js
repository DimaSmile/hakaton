import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { styles } from "./style";

class TeamBuilding extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography paragraph>
                        TEAM_BUILDING
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

TeamBuilding.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamBuilding);
