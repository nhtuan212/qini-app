"use client";
import React from "react";

//** Components */
import InputComponent from "@commonComponents/Input";
import AutoCompleteComponent from "@commonComponents/Input/AutoComplete";

//** MUI */
import { Checkbox, InputAdornment } from "@mui/material";
import {
    AccountCircle,
    Check,
    CheckBoxOutlineBlank,
} from "@mui/icons-material";

//** Type Props */
import {
    InputColor,
    InputMargin,
    InputSize,
    InputVariant,
} from "@typeProps/inputTypeProps";

//** Apis */
import { top100Films } from "@/apis/top100Films";

export default function InputModule() {
    return (
        <>
            <InputComponent
                fullWidth
                label="Input"
                type="text"
                // value="Input Value"
                placeholder="Input Placeholder"
                margin={InputMargin.normal}
                variant={InputVariant.outlined}
                size={InputSize.small}
                color={InputColor.error}
                // required
                // disabled
                // error
                // multiline
                // focused
                startAdornment={
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                }
            />
            <AutoCompleteComponent
                options={top100Films}
                multiple
                disableCloseOnSelect
                size={InputSize.small}
                variant={InputVariant.outlined}
                //** Multi Select with Checkbox */
                getOptionLabel={(item: any) => item?.label}
                renderOption={(props: any, item: any, { selected }: any) => (
                    <li {...props} key={item.label}>
                        <Checkbox
                            key={item.label}
                            icon={<CheckBoxOutlineBlank />}
                            checkedIcon={<Check />}
                            checked={selected}
                        />
                        {item.label}
                    </li>
                )}
                defaultValue={[top100Films[0], top100Films[1], top100Films[2]]}
                label="Auto complete"
            />
        </>
    );
}
