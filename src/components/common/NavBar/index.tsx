"use client";
import React from "react";
import Image from "next/image";

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

//** Styles */
import { DrawerStyles } from "./styles";

//** Themes */
import { theme } from "@/themes/globalThemes";

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
    //** Functions */
    const openedMixin = (): CSSObject => ({
        ...DrawerStyles,
        width: navBarWidth,
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        ...DrawerStyles,
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
                <Image src="/next.svg" alt="logo" width={200} height={30} />
            </Box>
            <IconButton onClick={handleNavBar} sx={DrawerStyles.Toggle}>
                {open ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                            sx={{ display: "block" }}
                            onClick={() => {
                                // router.push(url);
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
                                    primary={text}
                                    sx={{
                                        opacity: open ? 1 : 0,
                                        whiteSpace: "nowrap",
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ),
                )}
            </List>
        </Drawer>
    );
}
