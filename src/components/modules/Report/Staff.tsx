import React, { useEffect, useState } from "react";

//** Components */
import SelectComponent from "@commonComponents/Select";

//** Constants */
import { TEXT } from "@/constants/text";

//** Apis */
import { StaffData, WorkTime } from "@/apis/timeSheetData";
import { Box, Typography } from "@mui/material";

//** Interfaces */
interface ChangeDataProps {
    name?: string;
    checkIn?: string;
    checkOut?: string;
}
export default function StaffReport() {
    //** States */
    const [staff, setStaff] = useState<ChangeDataProps[]>([]);

    //** Functions */
    const handleStaffChange = (event: any, value: any) => {
        const { name } = event.target;
        setStaff({ ...staff, [name]: { ...staff[name], ...value } });
    };

    //** Hooks */
    useEffect(() => {
        console.log({ ...staff });
    }, [staff]);

    const renderContent = () => {
        return Array.from({ length: 3 }, (_, index) => {
            return (
                <Box key={index} sx={{ display: "flex", gap: 2 }}>
                    <SelectComponent
                        fullWidth
                        data={StaffData}
                        name={`form${index}`}
                        label={TEXT.STAFF_NAME}
                        required
                        onChange={(event, value) =>
                            handleStaffChange(event, { name: value })
                        }
                        sx={{ mb: 2 }}
                    />
                    <SelectComponent
                        fullWidth
                        data={WorkTime}
                        name={`form${index}`}
                        label={TEXT.CHECK_IN}
                        required
                        onChange={(event, value) =>
                            handleStaffChange(event, { checkIn: value })
                        }
                        sx={{ mb: 2 }}
                    />
                    <SelectComponent
                        fullWidth
                        data={WorkTime}
                        name={`form${index}`}
                        label={TEXT.CHECK_OUT}
                        required
                        onChange={(event, value) =>
                            handleStaffChange(event, { checkOut: value })
                        }
                        sx={{ mb: 2 }}
                    />
                </Box>
            );
        });
    };

    return (
        <>
            <Typography component={"h3"} variant={"h6"} sx={{ mb: 2 }}>
                {TEXT.STAFF_NAME}
            </Typography>
            {renderContent()}
        </>
    );
}
