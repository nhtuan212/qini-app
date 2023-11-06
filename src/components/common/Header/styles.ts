//** Theme */
import { colors } from "@/themes/color";
import { theme } from "@/themes/globalThemes";

export const HeaderStyles = {
    Container: {
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.primary,
        p: 3,
        color: colors.white,
        zIndex: theme.zIndex.drawer + 1,
        transition: "all .5s",
    },
};
