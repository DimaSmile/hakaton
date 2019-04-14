import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Close from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import CalendarDefault from "../Calendar";


import { styles } from "./style";

class AddEvent extends Component {
    state = {
        open: false,
      };
    
      handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

    render() {
        const { classes, name, description, date } = this.props;
        return (
            <div className={classes.card}>
                <Card onClick={this.handleOpen}>
                    <CardHeader
                        // avatar={
                        //     <Avatar
                        //         aria-label="Recipe"
                        //         className={classes.avatar}
                        //     >
                        //         R
                        //     </Avatar>
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
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <Card className={classes.modal}>
                        <Close
                            onClick={this.handleClose}
                            className={classes.close}
                        />
                        <CardContent>
                            <Typography className={classes.title} paragraph>
                                {name}
                            </Typography>
                            <Typography className={classes.title} paragraph>
                                {date}
                            </Typography>
                            <CalendarDefault
                            className={classes.calendar}
                                // birthdays={users}
                                // nextEvent={nextEvent}
                            />
                        </CardContent>
                    </Card>
                </Modal>
            </div>
        );
    }
}

AddEvent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddEvent);
