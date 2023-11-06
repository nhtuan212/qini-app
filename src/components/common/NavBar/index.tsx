"use client";
import React from "react";
import Image from "next/image";
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
} from "@mui/material";
import { ChevronLeft, ChevronRight, Inbox, Mail } from "@mui/icons-material";

//** Configs */
import { DEFAULT_PAGE } from "@/configs/router/page";
import { menuProfile } from "@/configs/menu/menuProfile";

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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "78px",
                }}
            >
                <Link href={DEFAULT_PAGE}>
                    <Image src="/next.svg" alt="logo" width={200} height={30} />
                </Link>
            </Box>
            <IconButton onClick={handleNavBar} sx={NavBarStyles.Toggle}>
                {open ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
            {!isEmpty(menuProfile) && (
                <List>
                    {menuProfile.map((item, index) => (
                        <ListItem
                            key={item?.label}
                            disablePadding
                            onClick={() => {
                                item?.url && router.push(item?.url);
                            }}
                            sx={{
                                //** Active URL */
                                ...(router.pathName === item?.url && {
                                    ...NavBarStyles.Active,
                                }),
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item?.label}
                                    sx={{
                                        opacity: open ? 1 : 0,
                                        whiteSpace: "nowrap",
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            )}
        </Drawer>
    );
}
