export const styles = theme => ({
    root: {
        padding: "30px",
        minWidth: "400px",
        borderRadius: "12px",
        boxShadow: '0 8px 6px -6px rgba(0, 0, 0, 0.35)'
    },
    formInput: {
        width: "100%",
        margin: "15px 0 0 0"
    },
    submitButton: {
        minWidth: "100px",
        float: "right",
        width: "50%",
        marginTop: '15px'
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
    },
    formLogo: {
        textAlign: 'right',
        marginBottom: '15px',
        '& img': {
            maxWidth: '100px'
        }
    }
});
