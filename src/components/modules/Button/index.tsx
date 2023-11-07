"use client";
import React from "react";

//** Store */
import { useBearStore } from "@/store/useBearStore";

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
    //** Store */
    const increase = useBearStore(state => state.increase);
    const bears = useBearStore(state => state.bears);

    return (
        <>
            <ButtonComponent
                startIcon={<Delete />}
                onClick={() => increase(1)}
                value={`Button (${bears})`}
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
