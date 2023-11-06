import React from "react";

//** MUI */
import { TableSortLabel } from "@mui/material";

//** Constants */
import {
    HeadCell,
    TableOrderProps,
} from "@/constants/typeProps/tableTypeProps";

interface TableSortProps {
    data: HeadCell;

    //** Sort Table */
    order: TableOrderProps;
    orderBy: keyof HeadCell;
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof HeadCell,
    ) => void;
}

const TableSortComponent: React.FC<TableSortProps> = ({
    data,
    order,
    orderBy,
    onRequestSort,
}) => {
    //** variables */
    const { id, label } = data;

    //** Functions */
    const createSortHandler =
        (property: keyof HeadCell) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableSortLabel
            active={orderBy === id}
            direction={order}
            onClick={createSortHandler(id as keyof HeadCell)}
        >
            {label}
        </TableSortLabel>
    );
};

export default TableSortComponent;
