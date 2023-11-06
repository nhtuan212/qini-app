"use client";
import React, { useEffect, useState } from "react";

//** MUI */
import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

//** Constants */
import { ERROR } from "@/constants/text";

//** Type Props */
import {
    CheckboxColor,
    CheckboxSize,
} from "@/constants/typeProps/checkboxTypeProps";

//** Interfaces */
interface CheckboxComponentProps extends CheckboxProps {
    label?: string | number;
}

const CheckboxComponent = ({
    id,
    label,
    defaultChecked,
    checked,
    size = CheckboxSize.small,
    color,
    icon,
    checkedIcon,
    disabled,
    required,
    onChange,
}: CheckboxComponentProps) => {
    //** States */
    const [errorCheckboxForm, setErrorCheckboxForm] = useState<boolean>(false);
    const [errorCheckbox, setErrorCheckbox] = useState<boolean>(false);

    //** Hooks */

    // Check invalid props when use kind of checkbox
    useEffect(() => {
        if (label && (color || icon || checkedIcon)) setErrorCheckboxForm(true);
        if (!label && required) setErrorCheckbox(true);
    }, [label, color, icon, checkedIcon, required]);

    useEffect(() => {
        errorCheckbox && console.error(ERROR.CHECKBOX);
        errorCheckboxForm && console.error(ERROR.CHECKBOX_FORM);
    }, [errorCheckboxForm, errorCheckbox]);

    const renderCheckbox = (label?: string | number) => {
        if (label) {
            return (
                <FormControlLabel
                    control={
                        <Checkbox
                            defaultChecked={defaultChecked}
                            checked={checked}
                            size={size}
                            onChange={onChange}
                        />
                    }
                    label={label}
                    disabled={disabled}
                    required={required}
                />
            );
        }
        return (
            <Checkbox
                id={id}
                defaultChecked={defaultChecked}
                checked={checked}
                size={size}
                color={color || CheckboxColor.primary}
                icon={icon}
                checkedIcon={checkedIcon}
                disabled={disabled}
                onChange={onChange}
            />
        );
    };

    return renderCheckbox(label);
};

export default CheckboxComponent;
