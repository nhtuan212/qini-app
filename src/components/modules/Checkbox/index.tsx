"use client";
import React, { ChangeEvent, useState } from "react";

//** Components */
import CheckboxComponent from "@commonComponents/Checkbox";

//** MUI */
import { Bookmark, BookmarkBorder } from "@mui/icons-material";

//** Type Props */
import { CheckboxColor, CheckboxSize } from "@typeProps/checkboxTypeProps";

export default function CheckboxModule() {
    //** States */
    const [checked, setChecked] = useState<boolean>(true);

    //** Functions */
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <CheckboxComponent
                label="Checkbox"
                defaultChecked={checked}
                size={CheckboxSize.small}
                // color={CheckboxColor.primary}
                // disabled
                required
                onChange={onChange}
            />
            <CheckboxComponent
                defaultChecked={checked}
                size={CheckboxSize.small}
                color={CheckboxColor.primary}
                icon={<BookmarkBorder />}
                checkedIcon={<Bookmark />}
                // disabled
                // required
                onChange={onChange}
            />
        </>
    );
}
