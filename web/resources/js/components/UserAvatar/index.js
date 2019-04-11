import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import { styles } from "./style";

const UserAvatar = props => {
    const { classes, image } = props;
    return <Avatar alt="avatar" src={image} className={classes.bigAvatar} />;
};

UserAvatar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserAvatar);
