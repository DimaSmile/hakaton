export const styles = theme => ({
    root: {
        width: "20%",
        display: "flex",
    },
    card: {
        textAlign: "center",
        margin: 10,
        position: "relative",
        cursor: "pointer",
        width: "100%",
    },
    avatar: {
        margin: "10px auto",
        width: 100,
        height: 100
    },
    label: {
        flexDirection: "column",
        margin: 0
    },
    message: {
        margin: "11px 0"
    },
    flex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    active: {
        cursor: "pointer",
        position: "absolute",
        bottom: 0,
        right: 0
    },
    modalContent: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: 30,
        width: 350,
        maxWidth: "100%",
        margin: 10
    },
    close: {
        position: "absolute",
        top: 5,
        right: 5,
        cursor: "pointer",
        color: theme.palette.primary.dark,
    },
    formInput: {
        width: "100%",
    }
});
