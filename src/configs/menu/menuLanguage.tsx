import React from "react";
import ReactCountryFlag from "react-country-flag";

//** Translation */
import useTranslations from "@/helpers/customHooks/useTranslations";

//** Custom Hooks */
import {
    usePathnameCustomHook,
    useRouterCustomHook,
} from "@/helpers/customHooks";
import { useParams } from "next/navigation";

//** Constants */
import { MenuLanguageProps } from "../../constants/typeProps/menuTypeProps";

const MenuLanguage = () => {
    //** Custom Hooks */
    const router = useRouterCustomHook();
    const { pathName } = usePathnameCustomHook();

    //** Variables */
    const params = useParams();
    const { t } = useTranslations();

    //** Functions */
    const redirectedPathName = (locale: MenuLanguageProps) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return [
        {
            onClick: () => {
                router.push(redirectedPathName(MenuLanguageProps.EN));
            },
            content: t.english,
            icon: (
                <ReactCountryFlag
                    className="country-flag"
                    countryCode="us"
                    svg
                />
            ),
            active: params?.lang === MenuLanguageProps.EN,
        },
        {
            onClick: () => {
                router.push(redirectedPathName(MenuLanguageProps.JP));
            },
            content: t.japanese,
            icon: (
                <ReactCountryFlag
                    className="country-flag"
                    countryCode="jp"
                    svg
                />
            ),
            active: params?.lang === MenuLanguageProps.JP,
        },
    ];
};

export default MenuLanguage;
