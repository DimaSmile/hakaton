import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent";

import { styles } from "./style";

class AddEvent extends Component {
    render() {
        const { classes, name, description, date } = this.props;
        return (
                <Card className={classes.card}>
                    <CardHeader
                        // avatar={
                        //     <Avatar
                        //         aria-label="Recipe"
                        //         className={classes.avatar}
                        //     >
                        //         R
                        //     </Avatar>
                        // }
                        // action={
                        //     <IconButton>
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title={name}
                    />
                    <CardContent>
                        <Typography className={classes.title} paragraph>
                            {description}
                        </Typography>
                        <Typography className={classes.title} paragraph>
                            {date}
                        </Typography>
                    </CardContent>
                </Card>
        );
    }
}

AddEvent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddEvent);
