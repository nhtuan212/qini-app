import React, { DialogHTMLAttributes } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { DialogSize } from "@/constants/typeProps/dialogTypeProps";

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
    open: boolean;
    fullScreen?: boolean;
    size?: DialogSize;
    closeIcon?: React.ReactNode;
    action?: React.ReactNode;
    onClose?: () => {} | void;
}

const DialogComponent = ({
    open,
    fullScreen,
    size = DialogSize.md,
    title,
    content,
    closeIcon,
    action,
    onClose,
}: DialogProps) => {
    return (
        <Dialog
            open={open}
            fullScreen={fullScreen}
            maxWidth={size}
            keepMounted
            onClose={onClose}
        >
            {title && (
                <DialogTitle
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {title}
                    {closeIcon && (
                        <Close className="cursor-pointer" onClick={onClose} />
                    )}
                </DialogTitle>
            )}
            {content && (
                <DialogContent dividers>
                    <DialogContentText>{content}</DialogContentText>
                </DialogContent>
            )}
            {action && <DialogActions>{action}</DialogActions>}
        </Dialog>
    );
};

export default DialogComponent;
