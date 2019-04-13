export const styles = theme => ({
    root: {
        padding: "30px",
        maxWidth: "400px",
        borderRadius: "12px",
        margin: "auto"
    },
    fab: {
        position: "relative",
        left: "50%",
        top: "-30px",
        transform: "translateX(-50%)"
    },
    formInput: {
        width: "100%",
        margin: "0 0 15px 0"
    },
    submitButton: {
        minWidth: "100px",
        float: "right",
        width: "50%"
    },
    FBButtton: {
        marginTop: "35px",
        width: "100%",
        background: "#4265a4",
        color: "#fff",
        position: "relative",
        "&:hover": {
            background: "#4265a4",
            color: "#fff"
        }
    },
    GoogleButtton: {
        marginTop: "15px",
        width: "100%",
        background: "#e45f4f",
        color: "#fff",
        position: "relative",
        "&:hover": {
            background: "#e45f4f",
            color: "#fff"
        }
    },
    Icon: {
        position: "absolute",
        maxHeight: "100%",
        width: "auto",
        left: "0px",
        top: "0px"
    }
});
