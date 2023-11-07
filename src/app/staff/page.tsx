"use client";
import React from "react";

//** Components */
import TableModule from "@moduleComponents/Table";
import DialogAddReport from "@moduleComponents/Report/DialogAdd";

//** MUI */
import { Box, Typography } from "@mui/material";

//** Constants */
import { TEXT } from "@/constants/text";

export default function StaffPage() {
    return (
        <Box component={"section"} sx={{ py: 1, px: 4 }}>
            <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                {TEXT.STAFF_MANAGER}
            </Typography>

            <Box sx={{ py: 1 }}>
                <DialogAddReport />
            </Box>

            <Box sx={{ py: 1 }}>
                <TableModule />
            </Box>
        </Box>
    );
}
