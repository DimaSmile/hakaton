const drawerWidth = 340;

export const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: "#fff",
        height: "64px",
        color: "#000",
        boxShadow: "1px 1px 10px #b9b6b6",
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36
    },
    hide: {
        background: "#fff",
        display: "none"
    }
});
