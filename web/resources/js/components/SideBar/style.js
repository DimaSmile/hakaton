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
    },
    iOSSwitchBase: {
        "&$iOSChecked": {
            color: theme.palette.common.white,
            "& + $iOSBar": {
                backgroundColor: "#52d869"
            }
        },
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.sharp
        })
    },
    iOSChecked: {
        transform: "translateX(15px)",
        "& + $iOSBar": {
            opacity: 1,
            border: "none"
        }
    },
    iOSBar: {
        borderRadius: 13,
        width: 42,
        height: 26,
        marginTop: -13,
        marginLeft: -21,
        border: "solid 1px",
        borderColor: theme.palette.grey[400],
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(["background-color", "border"])
    },
    iOSIcon: {
        width: 24,
        height: 24
    },
    iOSIconChecked: {
        boxShadow: theme.shadows[1]
    }
});
