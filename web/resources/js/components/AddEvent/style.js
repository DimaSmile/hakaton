export const styles = theme => ({
    card: {
        width: "200px",
        margin: 10,
        cursor: "pointer"
    },
    modal: {
        width: 500,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    close: {
        position: "absolute",
        top: 5,
        right: 5,
        cursor: "pointer",
        color: theme.palette.primary.dark
    },
    calendar: {
        width: "100%"
    },
    header: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    }
});
