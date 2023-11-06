"use client";

import React, { InputHTMLAttributes, useEffect, useState } from "react";

//** Components */
import InputComponent from ".";

//** MUI */
import {
    Autocomplete,
    AutocompleteRenderInputParams,
    Chip,
} from "@mui/material";

//** Type Props */
import { InputSize, InputVariant } from "@/constants/typeProps/inputTypeProps";

//** Interface */
interface AutoCompleteProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "size" | "defaultValue"
    > {
    options: any;
    label?: string;
    multiple?: boolean;
    disableCloseOnSelect?: boolean;
    getOptionLabel?: any;
    renderOption?: any;
    size?: InputSize;
    variant?: InputVariant;
    defaultValue?: {} | undefined;
}

const AutoCompleteComponent: React.FC<AutoCompleteProps> = ({
    id,
    options,
    label,
    multiple,
    disableCloseOnSelect,
    size = InputSize.small,
    variant = InputVariant.outlined,
    getOptionLabel,
    renderOption,
    defaultValue,
}) => {
    //** States */
    const [value, setValue] = useState<{} | undefined>([]);

    //** Functions */
    // Resolved warning console
    const renderTags = (tagValue: any, getTagProps: any) => {
        return tagValue.map((option: any, index: number) => (
            <Chip
                {...getTagProps({ index })}
                key={option?.label}
                label={option?.label}
            />
        ));
    };

    //** Hooks */
    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    return (
        <Autocomplete
            id={id}
            options={options}
            multiple={multiple}
            disablePortal
            disableCloseOnSelect={multiple || disableCloseOnSelect}
            // Multi Select with Checkbox
            getOptionLabel={multiple && getOptionLabel}
            renderOption={multiple && renderOption}
            renderTags={multiple ? renderTags : undefined}
            // Value and Change value
            value={multiple && value}
            onChange={(event: any, newValue: any) => {
                setValue(newValue);
            }}
            // Render Input
            renderInput={(
                params: Omit<AutocompleteRenderInputParams, "size">,
            ) => (
                <InputComponent
                    {...params}
                    size={size}
                    variant={variant}
                    label={label}
                />
            )}
        />
    );
};

export default AutoCompleteComponent;
