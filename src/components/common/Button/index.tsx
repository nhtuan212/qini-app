"use client";
import React, { ButtonHTMLAttributes } from "react";

//** MUI */
import { Button } from "@mui/material";

//** Constants */
import { BUTTON } from "@/constants/text";

//** Type Props */
import {
    ButtonColor,
    ButtonSize,
    ButtonVariant,
} from "@typeProps/buttonTypeProps";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: ButtonVariant;
    color?: ButtonColor;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    sx?: {};
}

const ButtonComponent = ({
    color = ButtonColor.primary,
    size = ButtonSize.medium,
    variant = ButtonVariant.contained,
    value,
    type,
    name,
    disabled,
    title = BUTTON.TITLE,
    startIcon,
    endIcon,
    sx,
    ...restProps
}: ButtonProps) => {
    return (
        <Button
            color={color}
            size={size}
            variant={variant}
            type={type}
            name={name}
            title={title}
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
            sx={sx}
            {...restProps}
        >
            {value && <span>{value}</span>}
        </Button>
    );
};

export default ButtonComponent;
