"use client";
import React from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogProps,
    DialogTitle,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { DialogSize } from "@/constants/typeProps/dialogTypeProps";

// interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
interface DialogComponentProps extends Omit<DialogProps, "content"> {
    // open: boolean;
    // fullScreen?: boolean;
    size?: DialogSize;
    content?: React.ReactNode;
    closeIcon?: React.ReactNode;
    action?: React.ReactNode;
    onClose?: () => {} | void;
}

const DialogComponent = ({
    open,
    fullScreen,
    fullWidth = true,
    size = DialogSize.md,
    title,
    content,
    closeIcon,
    action,
    onClose,
}: DialogComponentProps) => {
    return (
        <Dialog
            open={open}
            fullScreen={fullScreen}
            fullWidth={fullWidth}
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
                    {typeof content === "string" ? (
                        <DialogContentText>{content}</DialogContentText>
                    ) : (
                        content
                    )}
                </DialogContent>
            )}
            {action && <DialogActions>{action}</DialogActions>}
        </Dialog>
    );
};

export default DialogComponent;
