"use client";

import React, { DialogHTMLAttributes, SyntheticEvent } from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import {
    AlertColor,
    AlertHorizontal,
    AlertSeverity,
    AlertVariant,
    AlertVertical,
} from "@/constants/typeProps/alertTypeProps";

interface AlertProps extends DialogHTMLAttributes<HTMLElement> {
    color?: AlertColor;
    icon?: React.ReactNode;
    severity?: AlertSeverity;
    variant?: AlertVariant;
    message: string | number;

    //** Type with duration */
    duration?: number;
    onClose?: () => {} | void;
    vertical?: AlertVertical;
    horizontal?: AlertHorizontal;
}

const AlertComponent = ({
    color = AlertColor.success,
    icon,
    severity = AlertSeverity.success,
    variant = AlertVariant.standard,
    title,
    message,

    //** Type with duration */
    duration,
    open,
    onClose,

    //** Position */
    vertical = AlertVertical.bottom,
    horizontal = AlertHorizontal.right,
}: AlertProps) => {
    //** Functions */

    // Handle onClose prevent click away to close alert
    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        typeof onClose === "function" && onClose();
    };

    // Render alert
    const renderAlert = () => {
        if (duration) {
            return (
                <Snackbar
                    anchorOrigin={{
                        vertical: vertical,
                        horizontal: horizontal,
                    }}
                    open={open}
                    autoHideDuration={duration}
                    onClose={handleClose}
                >
                    <Alert
                        color={color}
                        icon={icon}
                        severity={severity}
                        variant={variant}
                        onClose={handleClose}
                    >
                        {title && <AlertTitle>{title}</AlertTitle>}
                        {message}
                    </Alert>
                </Snackbar>
            );
        }

        return (
            <Alert
                color={color}
                icon={icon}
                severity={severity}
                variant={variant}
            >
                {title && <AlertTitle>{title}</AlertTitle>}
                {message}
            </Alert>
        );
    };

    return renderAlert();
};

export default AlertComponent;
