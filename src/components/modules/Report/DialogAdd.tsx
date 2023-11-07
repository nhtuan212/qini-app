"use client";
import React, { useState } from "react";

//** Components */
import ButtonComponent from "@commonComponents/Button";
import DialogComponent from "@commonComponents/Dialog";

//** MUI */
import { Add } from "@mui/icons-material";

//** Constants */
import { BUTTON, TEXT } from "@/constants/text";

//** TypeProps */
import { ButtonColor } from "@typeProps/buttonTypeProps";
import { DialogSize } from "@typeProps/dialogTypeProps";

//** Apis */
import { Typography } from "@mui/material";
import StaffReport from "./Staff";

export default function DialogAddReport() {
    //** States */
    const [error, setError] = useState<string>("");
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    //** Functions */
    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };

    const handleDialogSubmit = () => {
        // const { name, checkIn, checkOut } = staff;
        // const checkInFormatted = parseInt(checkIn as string);
        // const checkOutFormatted = parseInt(checkOut as string);
        // const hours = checkOutFormatted - checkInFormatted;

        // if (!name || !checkIn || !checkOut) {
        //     return setError(TEXT.DIALOG.ENTER_FIELDS);
        // }
        // if (checkInFormatted > checkOutFormatted) {
        //     return setError(TEXT.DIALOG.ERROR_TIME_SHEET);
        // }

        // setResult({ ...staff, hours });
        handleDialogClose();
    };
    const handleDialogClose = () => {
        setError("");
        setIsDialogOpen(false);
    };
    // Render Content
    const renderContent = () => {
        return (
            isDialogOpen && (
                <>
                    <StaffReport />
                    {error && <Typography color="error">** {error}</Typography>}
                </>
            )
        );
    };

    return (
        <>
            <ButtonComponent
                startIcon={<Add />}
                value={TEXT.ADD}
                onClick={handleDialogOpen}
                sx={{ my: 1 }}
            />
            <DialogComponent
                open={isDialogOpen}
                size={DialogSize.lg}
                onClose={handleDialogClose}
                title={TEXT.MENU.REPORT}
                content={renderContent()}
                closeIcon
                action={
                    <>
                        <ButtonComponent
                            color={ButtonColor.success}
                            onClick={() => handleDialogSubmit()}
                            value={BUTTON.SUBMIT}
                        />
                        <ButtonComponent
                            onClick={() => handleDialogClose()}
                            value={BUTTON.CLOSE}
                        />
                    </>
                }
            />
        </>
    );
}
