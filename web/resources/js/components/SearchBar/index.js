import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

class SearchBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                    }}
                />
            </div>
        );
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
