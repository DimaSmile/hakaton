import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { styles } from "./style";

class Event extends Component {
    state = {
        event: 'Birthday Yurko',
        image: null,
        data: '01.04.19'
    }
    render() {
        const { classes, event_name, start_event_date } = this.props;
        return (
            <Card>
                <CardContent>
                    <Typography className={classes.next_event} variant="h5">
                        Next Event
                    </Typography>
                    {this.state.image ? <img src={this.state.image} className={classes.image}/> : ''}
                         
                    <Typography className={classes.title_event} variant="h3">
                        {event_name}
                    </Typography>
                    <Typography className={classes.title_event} variant="h4">
                        {start_event_date}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

Event.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Event);
