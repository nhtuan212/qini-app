"use client";
import React from "react";

//** MUI */
import { Assessment, AssignmentInd } from "@mui/icons-material";

//** Constants */
import { PAGE } from "./page";
import { TEXT } from "@/constants/text";

export const pagesRouter = () => {
    return {
        pageRouters: [
            {
                url: PAGE.STAFF,
                label: TEXT.STAFF_NAME,
                icon: <AssignmentInd />,
            },
            {
                url: PAGE.REPORT,
                label: TEXT.MENU.REPORT,
                icon: <Assessment />,
            },
            {
                url: PAGE.EXAMPLE,
                label: TEXT.MENU.EXAMPLE,
                icon: <AssignmentInd />,
            },
            // {
            //     url: PAGE.EXAMPLE,
            //     label: TEXT.MENU.EXAMPLE,
            //     icon: <KeyboardAltOutlined />,
            // },
            // {
            //     url: PAGE.EXAMPLE,
            //     label: TEXT.MENU.EXAMPLE,
            //     icon: <AssignmentIndOutlined />,
            // },
        ],
    };
};
