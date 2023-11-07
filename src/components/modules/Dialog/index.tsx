"use client";
import React, { useState } from "react";

//** Components */
import ButtonComponent from "@commonComponents/Button";
import DialogComponent from "@commonComponents/Dialog";

//** Constants */
import { BUTTON, TEXT } from "@/constants/text";

//** Type Props */
import { ButtonColor } from "@typeProps/buttonTypeProps";
import { DialogSize } from "@typeProps/dialogTypeProps";

//** Type Props */

export default function DialogModule() {
    //** States */
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    //** Functions */
    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };
    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <ButtonComponent
                sx={{ my: 1 }}
                onClick={handleDialogOpen}
                value="Show Dialog"
            />
            <DialogComponent
                open={isDialogOpen}
                size={DialogSize.sm}
                onClose={handleDialogClose}
                title={TEXT.DIALOG.TITLE}
                content={TEXT.DIALOG.CONTENT}
                closeIcon
                action={
                    <>
                        <ButtonComponent
                            color={ButtonColor.success}
                            onClick={() => {}}
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
