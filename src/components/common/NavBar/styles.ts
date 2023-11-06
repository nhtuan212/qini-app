//** MUI */
import { colors } from "@/themes/color";

export const NavBarStyles = {
    Drawer: {
        transition: "all .5s",
        overflow: "unset",
    },

    Toggle: {
        position: "absolute",
        top: "50%",
        right: "-20px",
        backgroundColor: colors.white,
        border: `1px solid ${colors.gray}`,
        transForm: "translate(-50%, -50%)",

        "&:hover": {
            backgroundColor: colors.white,
        },
    },

    Active: {
        background: colors.primary,
        color: colors.white,

        svg: {
            color: colors.white,
        },
    },
};
