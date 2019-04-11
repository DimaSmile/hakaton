const drawerWidth = 340;

export const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    paper: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    },
    drawerOpen: {
        width: drawerWidth,
        boxShadow: "10px 1px 15px #b9b6b6",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing.unit * 9 + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    UserName: {
        color: "#302f2f",
        textTransform: "capitalize"
    }
});
