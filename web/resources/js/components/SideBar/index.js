import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

import UserAvatar from "../UserAvatar";

import { navigationLinks } from "../../constants/";
import DefaultAvatar from "../../images/defaultAvatar.png";
import { styles } from "./style";

const SideBar = props => {
    const { classes, open, handleDrawerClose, theme, user } = props;
    return (
        <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
            })}
            classes={{
                paper: classNames(
                    {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                    },
                    classes.paper
                )
            }}
            open={open}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </div>
            <Divider />
            <UserAvatar image={DefaultAvatar} />
            <Typography
                variant="h4"
                gutterBottom
                align="center"
                color="secondary"
            >
                <span className={classes.UserName}>
                    {user && user.name ? user.name : ""}
                </span>
            </Typography>
            <List>
                {navigationLinks.map((link, index) => (
                    <Link to={link.route} key={link.name}>
                        <ListItem button className={classes.nav}>
                            <ListItemIcon>{link.icon}</ListItemIcon>
                            <ListItemText primary={link.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text} className={classes.nav}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

SideBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
