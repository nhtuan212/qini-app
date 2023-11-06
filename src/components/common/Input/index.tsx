"use client";

import React from "react";

//** MUI */
import { BaseTextFieldProps, TextField } from "@mui/material";

//** Type Props */
import {
    InputColor,
    InputMargin,
    InputSize,
    InputType,
    InputVariant,
} from "@/constants/typeProps/inputTypeProps";

//** Interface */
interface InputComponentProps extends BaseTextFieldProps {
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
}

const InputComponent = ({
    id,
    fullWidth,
    required = false,
    disabled = false,
    error = false,
    multiline = false,
    focused = false,
    type = InputType.text,
    margin = InputMargin.normal,
    variant = InputVariant.outlined,
    size = InputSize.small,
    color = InputColor.primary,
    label,
    defaultValue,
    placeholder,
    startAdornment,
    endAdornment,
    ...restProps
}: InputComponentProps) => {
    return (
        <TextField
            id={id}
            fullWidth={fullWidth}
            type={type}
            margin={margin}
            variant={variant}
            size={size}
            color={color}
            required={required}
            disabled={disabled}
            error={error}
            multiline={multiline}
            focused={focused}
            label={label}
            defaultValue={defaultValue}
            placeholder={placeholder}
            // Icons and position Input
            InputProps={{
                startAdornment,
                endAdornment,
            }}
            {...restProps}
        />
    );
};

export default InputComponent;
