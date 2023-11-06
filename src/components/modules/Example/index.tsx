"use client";
import React from "react";

//** Components */
import ButtonModule from "@moduleComponents/Button";
import InputModule from "@moduleComponents/Input";
import CheckboxModule from "@moduleComponents/Checkbox";
import AlertModule from "@moduleComponents/Alert";
import DialogModule from "@moduleComponents/Dialog";
import TableModule from "@moduleComponents/Table";

//** MUI */
import { Box, Typography } from "@mui/material";

export default function ExampleModule() {
    return (
        <>
            <Box component={"section"} sx={{ mb: 2, py: 1, px: 4 }}>
                <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                    Button
                </Typography>
                <ButtonModule />
            </Box>

            <Box component={"section"} sx={{ mb: 2, py: 1, px: 4 }}>
                <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                    Input
                </Typography>
                <InputModule />
            </Box>

            <Box component={"section"} sx={{ mb: 2, py: 1, px: 4 }}>
                <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                    Checkbox
                </Typography>
                <CheckboxModule />
            </Box>

            <Box component={"section"} sx={{ mb: 2, py: 1, px: 4 }}>
                <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                    Alert
                </Typography>
                <AlertModule />
            </Box>

            <Box component={"section"} sx={{ mb: 2, py: 1, px: 4 }}>
                <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                    Dialog
                </Typography>
                <DialogModule />
            </Box>

            <Box component={"section"} sx={{ mb: 2, py: 1, px: 4 }}>
                <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                    Table
                </Typography>
                <TableModule />
            </Box>
        </>
    );
}
