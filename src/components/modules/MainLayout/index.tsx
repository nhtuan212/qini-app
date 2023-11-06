"use client";
import React, { useState } from "react";

//** Components */
import HeaderComponent from "@commonComponents/Header";
import FooterComponent from "@commonComponents/Footer";
import NavBarComponent from "@commonComponents/NavBar";

//** MUI */
import { Box } from "@mui/material";

//** Interfaces */
interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    //** States */
    const [isNavBarOpen, setIsNavBarOpen] = useState(true);

    //** Variables */
    const navBarWidth: string = "15rem";

    //** Functions */
    const handleNavBar = () => {
        setIsNavBarOpen(!isNavBarOpen);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <HeaderComponent
                isNavBarOpen={isNavBarOpen}
                navBarWidth={navBarWidth}
            />
            <NavBarComponent
                open={isNavBarOpen}
                navBarWidth={navBarWidth}
                handleNavBar={handleNavBar}
            />
            <Box sx={{ width: "100%" }}>
                <Box
                    component={"main"}
                    sx={{ minHeight: "120vh", flexGrow: 1 }}
                >
                    <Box sx={{ height: "78px" }} />
                    {children}
                </Box>
                <FooterComponent />
            </Box>
        </Box>
    );
}
