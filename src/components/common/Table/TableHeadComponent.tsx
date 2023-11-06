import React from "react";

//** Components */
import CheckboxComponent from "../Checkbox";
import TableSortComponent from "./TableSort";

//** MUI */
import { TableCell, TableHead, TableRow } from "@mui/material";

//** Type Props */
import { CheckboxColor } from "@/constants/typeProps/checkboxTypeProps";
import {
    HeadCell,
    TableOrderProps,
    sortTableProps,
} from "@/constants/typeProps/tableTypeProps";

//** Lodash */
import { isEmpty } from "lodash";

interface TableHeadComponentProps {
    columns: HeadCell[];
    isCheckedList: boolean;
    rowChecked: number;
    rowCount: number;
    handleAllChecked: (event: React.ChangeEvent<HTMLInputElement>) => {} | void;

    //** Sort Table */
    isSort?: boolean;
    order: TableOrderProps;
    orderBy: keyof HeadCell;
    handleSortTable?: ({ order, orderBy }: sortTableProps) => {} | void;
}

const TableHeadComponent: React.FC<TableHeadComponentProps> = ({
    columns,
    isCheckedList,
    rowCount,
    rowChecked,
    handleAllChecked,

    //** Sort Table */
    isSort,
    order,
    orderBy,
    handleSortTable,
}) => {
    //** Variables */
    const backgroundHead: string = "#efefef";
    const isAllChecked: boolean = rowChecked > 0 && rowChecked === rowCount;

    //** Functions */
    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof HeadCell,
    ) => {
        const isAsc = orderBy === property && order === TableOrderProps.ASC;

        typeof handleSortTable === "function" &&
            handleSortTable({
                order: isAsc ? TableOrderProps.DESC : TableOrderProps.ASC,
                orderBy: property,
            });
    };

    return (
        !isEmpty(columns) && (
            <TableHead>
                <TableRow>
                    {isCheckedList && (
                        <TableCell
                            padding="checkbox"
                            sx={{
                                background: backgroundHead,
                            }}
                        >
                            <CheckboxComponent
                                color={CheckboxColor.primary}
                                checked={isAllChecked}
                                onChange={handleAllChecked}
                            />
                        </TableCell>
                    )}
                    {columns.map(headItem => (
                        <TableCell
                            key={headItem.id}
                            sx={{
                                background: backgroundHead,
                                fontWeight: "bold",
                            }}
                        >
                            {isSort ? (
                                <TableSortComponent
                                    data={headItem}
                                    order={order}
                                    orderBy={orderBy}
                                    onRequestSort={handleRequestSort}
                                />
                            ) : (
                                headItem.label
                            )}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        )
    );
};

export default TableHeadComponent;
