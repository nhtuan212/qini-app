import React from "react";
import { signOut } from "next-auth/react";

//** MUI */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";

export const menuProfile = [
    {
        onClick: () => {},
        content: "Profile",
        icon: (
            <AccountCircleIcon
                fontSize="small"
                color="primary"
                sx={{ paddingTop: "6px" }}
            />
        ),
    },
    {
        onClick: () => {},
        content: "Info",
        icon: (
            <InfoIcon
                fontSize="small"
                color="primary"
                sx={{ paddingTop: "6px" }}
            />
        ),
    },
    {
        onClick: () => signOut(),
        content: "Logout",
        icon: (
            <LogoutIcon
                fontSize="small"
                color="primary"
                sx={{ paddingTop: "6px" }}
            />
        ),
    },
];
