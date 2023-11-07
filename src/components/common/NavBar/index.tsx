"use client";
import React from "react";
import Link from "next/link";

//** MUI */
import {
    Box,
    CSSObject,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Theme,
    Tooltip,
} from "@mui/material";
import { ChevronLeft, Menu } from "@mui/icons-material";

//** Configs */
import { DEFAULT_PAGE } from "@/configs/router/page";
import { pagesRouter } from "@/configs/router";

//** Lodash */
import { isEmpty } from "lodash";

//** Styles */
import { NavBarStyles } from "./styles";

//** Themes */
import { theme } from "@/themes/globalThemes";
import { useRouterCustomHook } from "@/customHooks";

//** Interfaces */
interface NavBarComponentProps {
    open: boolean;
    navBarWidth: string;
    handleNavBar: () => {} | void;
}

export default function NavBarComponent({
    open,
    navBarWidth,
    handleNavBar,
}: NavBarComponentProps) {
    //** Custom Hooks */
    const router = useRouterCustomHook();

    //** Variables */
    const { pageRouters } = pagesRouter();

    //** Functions */
    const openedMixin = (): CSSObject => ({
        ...NavBarStyles.Drawer,
        width: navBarWidth,
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        ...NavBarStyles.Drawer,
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up("sm")]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    return (
        <Drawer
            variant="permanent"
            open={open}
            sx={{
                ...(open && {
                    ...openedMixin(),
                    "& .MuiDrawer-paper": openedMixin(),
                }),
                ...(!open && {
                    ...closedMixin(theme),
                    "& .MuiDrawer-paper": closedMixin(theme),
                }),
            }}
        >
            <Box sx={NavBarStyles.Toggle}>
                {open && <Link href={DEFAULT_PAGE}>QiNi</Link>}
                <IconButton
                    onClick={handleNavBar}
                    sx={{ ...(open && { ...NavBarStyles.Toggle.Active }) }}
                >
                    {open ? <ChevronLeft /> : <Menu />}
                </IconButton>
            </Box>
            {!isEmpty(pageRouters) && (
                <List
                    sx={{
                        p: 0,
                    }}
                >
                    {pageRouters.map(item => {
                        const { url, label, icon } = item;
                        return (
                            <ListItem
                                key={label}
                                disablePadding
                                onClick={() => {
                                    url && router.push(url);
                                }}
                                sx={{
                                    //** Active URL */
                                    ...(router.pathName === url && {
                                        ...NavBarStyles.Active,
                                    }),
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open
                                            ? "initial"
                                            : "center",
                                        px: 2.5,
                                    }}
                                >
                                    {icon && (
                                        <Tooltip
                                            title={label}
                                            arrow
                                            placement="right-start"
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: open ? 3 : "auto",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                        </Tooltip>
                                    )}
                                    <ListItemText
                                        primary={label}
                                        sx={{
                                            opacity: open ? 1 : 0,
                                            whiteSpace: "nowrap",
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            )}
        </Drawer>
    );
}
