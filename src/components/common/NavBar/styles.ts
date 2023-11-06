//** MUI */
import { colors } from "@/themes/color";

export const NavBarStyles = {
    Drawer: {
        transition: "all .5s",
        overflow: "unset",
    },

    Toggle: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
        borderBottom: `1px solid ${colors.primary}`,

        " a": {
            fontSize: "2rem",
            color: colors.primary,
            textDecoration: "none",
        },

        Active: {
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
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
