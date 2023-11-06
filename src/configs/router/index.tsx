import React from "react";

//** MUI */
import GroupIcon from "@mui/icons-material/Group";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BackupIcon from "@mui/icons-material/Backup";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";

//** Constants */
import { PAGE } from "./page";
import { useTranslations } from "next-intl";

export const pagesRouter = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const t = useTranslations();
    return {
        pageRouters: [
            {
                url: PAGE.firstPage,
                label: t("first-page"),
                icon: <GroupIcon />,
            },
            {
                url: PAGE.secondPage,
                label: t("second-page"),
                icon: <AssignmentIndIcon />,
            },
            {
                url: PAGE.thirdPage,
                label: t("third-page"),
                icon: <BackupIcon />,
            },
            {
                url: PAGE.fourthPage,
                label: t("fourth-page"),
                icon: <KeyboardAltOutlinedIcon />,
            },
            {
                url: PAGE.fifthPage,
                label: t("fifth-page"),
                icon: <AssignmentIndOutlinedIcon />,
            },
        ],
    };
};
