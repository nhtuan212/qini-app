import React from "react";

//** MUI */
import { Box, Typography } from "@mui/material";

//** Styles */
import { FooterStyles } from "./styles";

export default function FooterComponent() {
    return (
        <Box component={"footer"} sx={FooterStyles.Container}>
            <Typography>
                Something here to give the footer a purpose!
            </Typography>
            <Typography>Copyright © Qini 2023.</Typography>
        </Box>
    );
}
