import React from "react";
// import { signOut } from "next-auth/react";

//** MUI */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";

//** Configs */
import { PAGE } from "../router/page";

export const menuProfile = [
    {
        url: PAGE.EXAMPLE,
        label: "Profile",
        icon: (
            <AccountCircleIcon
                fontSize="small"
                color="primary"
                sx={{ paddingTop: "6px" }}
            />
        ),
    },
    {
        // url: PAGE.PROFILE,
        label: "Info",
        icon: (
            <InfoIcon
                fontSize="small"
                color="primary"
                sx={{ paddingTop: "6px" }}
            />
        ),
    },
    {
        // url: PAGE.LOG,
        label: "Logout",
        icon: (
            <LogoutIcon
                fontSize="small"
                color="primary"
                sx={{ paddingTop: "6px" }}
            />
        ),
    },
];
