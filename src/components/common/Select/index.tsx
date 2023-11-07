"use client";
import React, { useState } from "react";

//** MUI */
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    SelectProps,
} from "@mui/material";

//** Lodash */
import { isEmpty } from "lodash";

//** TypeProps */
import { SelectSize } from "@typeProps/selectTypeProps";

//** Interfaces */
interface StaffDataProps {
    id: number;
    name: string;
}

// interface SelectComponentProps extends Omit<SelectProps, "onChange"> {
interface SelectComponentProps extends SelectProps {
    data: StaffDataProps[];
    value?: string;
    // onChange?: (value: string) => {} | void;
}

export default function SelectComponent({
    fullWidth = false,
    data,
    size = SelectSize.small,
    label,
    name,
    required = false,
    disabled = false,
    sx,
    onChange,
}: SelectComponentProps) {
    //** States */
    const [selectValue, setSelectValue] = useState("");

    //** Functions */
    const handleChange = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value as string);

        typeof onChange === "function" &&
            onChange(event, event?.target?.value as string);
    };

    return (
        <FormControl
            fullWidth={fullWidth}
            size={size}
            disabled={disabled}
            required={required}
            sx={{ minWidth: 200, ...sx }}
        >
            {label && <InputLabel>{label}</InputLabel>}
            <Select
                label={label && label}
                value={selectValue}
                name={name}
                onChange={handleChange}
            >
                {!isEmpty(data) &&
                    data.map(item => (
                        <MenuItem key={item?.id} value={item?.name}>
                            {item?.name}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    );
}
