"use client";
import React from "react";

//** Components */
import ButtonComponent from "@commonComponents/Button";

//** MUI */
import { Delete } from "@mui/icons-material";

//** Type Props */
import {
    ButtonColor,
    ButtonSize,
    ButtonVariant,
} from "@typeProps/buttonTypeProps";

export default function ButtonModule() {
    return (
        <>
            <ButtonComponent
                startIcon={<Delete />}
                onClick={() => {}}
                value="Button"
            />
            <ButtonComponent
                sx={{ mx: 1 }}
                endIcon={<Delete />}
                size={ButtonSize.small}
                variant={ButtonVariant.outlined}
                color={ButtonColor.error}
                onClick={() => {}}
                value="Button"
            />
        </>
    );
}
