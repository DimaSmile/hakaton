import React from "react";
import Dialog from "@material-ui/core/Dialog";

const Modal = props => {
    const { children, open, handleClose, id } = props;
    return (
        <Dialog
            open={open}
            onClose={() => handleClose(id)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {children}
        </Dialog>
    );
};

export default Modal;
