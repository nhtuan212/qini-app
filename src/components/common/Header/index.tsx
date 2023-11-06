"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

//** MUI */
import { Box } from "@mui/material";

//** Styles */
import { HeaderStyles } from "./styles";

//** Configs */
import { DEFAULT_PAGE } from "@/configs/router/page";

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
            <Link href={DEFAULT_PAGE}>
                <Image src="/next.svg" alt="logo" width={200} height={30} />
            </Link>
        </Box>
    );
}
