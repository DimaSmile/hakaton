import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Loader from "../Loader";
import DefaultAvater from "../../images/defaultAvatar.png";
import UserAvatar from "../UserAvatar";

import { styles } from "./style";

class Event extends Component {
    render() {
        const { classes, nextEvent } = this.props;
        if (nextEvent) {
            return (
                <Card className={classes.nextEvent}>
                    <Typography className={classes.next_event} variant="h5">
                        Next Event
                    </Typography>
                    {nextEvent.avatar ? (
                        <UserAvatar image={nextEvent.avatar} />
                    ) : (
                        <UserAvatar image={DefaultAvater} />
                    )}

                    <Typography className={classes.title_event} variant="h3">
                        {nextEvent.user_name}
                    </Typography>
                    <Typography className={classes.title_event} variant="h4">
                        {nextEvent.current_birthday}
                    </Typography>
                </Card>
            );
        } else {
            return <Loader />;
        }
    }
}

Event.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Event);
