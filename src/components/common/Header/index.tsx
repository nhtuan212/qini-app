"use client";
import React from "react";

//** MUI */
import { Box } from "@mui/material";

//** Styles */
import { HeaderStyles } from "./styles";
import Image from "next/image";

//** Interfaces */
interface HeaderComponentProps {
    isNavBarOpen: boolean;
    navBarWidth: string;
}

export default function HeaderComponent({
    isNavBarOpen,
    navBarWidth,
}: HeaderComponentProps) {
    return (
        <Box
            component={"header"}
            sx={{
                ...HeaderStyles.Container,

                //** Apply css open menu */
                ...(isNavBarOpen && {
                    marginLeft: navBarWidth,
                    width: `calc(100% - ${navBarWidth})`,
                }),
            }}
        >
            <Image src="/next.svg" alt="logo" width={200} height={30} />
        </Box>
    );
}
