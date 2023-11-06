"use client";
import React, { useState } from "react";

//* Components */
import AlertComponent from "@commonComponents/Alert";
import ButtonComponent from "@commonComponents/Button";

//** MUI */
import { Check } from "@mui/icons-material";

//** Type Props */
import {
    AlertColor,
    AlertHorizontal,
    AlertSeverity,
    AlertVariant,
    AlertVertical,
} from "@typeProps/alertTypeProps";

export default function AlertModule() {
    //** States */
    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

    //** Functions */
    // Handle Alert
    const handleAlert = () => {
        setIsAlertOpen(true);
    };
    const handleCloseAlert = () => {
        setIsAlertOpen(false);
    };

    return (
        <>
            <AlertComponent
                // duration={2000}
                color={AlertColor.success}
                // icon={<Check fontSize="inherit" />}
                severity={AlertSeverity.success}
                variant={AlertVariant.filled}
                // title='Title'
                message="This is a success alert — check it out!"
            />

            <ButtonComponent
                sx={{ my: 1 }}
                onClick={handleAlert}
                value="Show alert"
            />
            <AlertComponent
                duration={2000}
                open={isAlertOpen}
                onClose={handleCloseAlert}
                vertical={AlertVertical.bottom}
                horizontal={AlertHorizontal.right}
                color={AlertColor.success}
                icon={<Check fontSize="inherit" />}
                severity={AlertSeverity.success}
                variant={AlertVariant.filled}
                title="Title"
                message="This is a success alert — check it out!"
            />
        </>
    );
}
