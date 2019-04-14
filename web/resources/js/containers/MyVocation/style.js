export const styles = theme => ({
    card: {
        boxShadow: "1px 10px 5px #e1dbdb"
    },
    cardContent: {
        borderRadius: 0
    },
    card: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        cursor: "all-scroll"
    },
    cardContent: {
        borderRadius: 0,
        textAlign: "center",
        width: "100%"
    },
    title: {
        color: "#ffffff"
    },
    error: {
        color: theme.error.main,
    },
    close: {
        position: "absolute",
        top: 5,
        right: 5,
        cursor: "pointer",
        color: theme.palette.primary.dark,
    },
    modal: {
        width: 300,
    },
    formInput: {
        width: "100%",
    },
    submitButton: {
        marginBottom: 20,
        float: "right",
    }
});
