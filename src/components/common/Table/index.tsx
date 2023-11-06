"use client";

import React, { useEffect, useState } from "react";

//** Components */
import CheckboxComponent from "../Checkbox";
import TableHeadComponent from "./TableHeadComponent";

//** MUI */
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableOwnProps,
    TablePagination,
    TablePaginationOwnProps,
    TableRow,
} from "@mui/material";

//** Type props */
import {
    DataCell,
    HeadCell,
    TableOrderProps,
    sortTableProps,
} from "@/constants/typeProps/tableTypeProps";
import { CheckboxColor } from "@/constants/typeProps/checkboxTypeProps";

//** Lodash */
import isEmpty from "lodash/isEmpty";

//** Custom Hooks */
import useSortTable from "@/customHooks/table/useSortTable";

//** Interface */
interface TableProps
    extends Omit<TableOwnProps, "classes">,
        Partial<TablePaginationOwnProps> {
    columns: HeadCell[];
    rows: DataCell[];

    //** Checked Table */
    isCheckedList: boolean;

    //** Sort Table */
    isSort: boolean;

    //** Table Pagination */
    rowsLimitPerPage?: DataCell[];
}

const TableComponent = ({
    size,
    rows,
    columns,
    stickyHeader = true,

    //** Checked Table */
    isCheckedList,

    //** Sort Table */
    isSort,

    //** Table Pagination */
    count = 0,
    page = 0,
    rowsPerPage = 0,
    rowsLimitPerPage,
    rowsPerPageOptions,
    onPageChange,
    onRowsPerPageChange,
    ActionsComponent,
}: TableProps) => {
    //** State */
    const [data, setData] = useState<DataCell[]>([]);
    // Checked State
    const [checked, setCheckedList] = useState<readonly number[]>([]);
    // Sort State
    const [order, setOrder] = useState<TableOrderProps>(TableOrderProps.ASC);
    const [orderBy, setOrderBy] = useState<keyof HeadCell>("id");

    //** Variables */
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 && rowsPerPage > 0
            ? Math.max(0, (1 + page) * rowsPerPage - rows.length)
            : 0;

    //** Custom Hooks */
    const { sortTableRows } = useSortTable({
        rows,
        rowsPerPage,
        order,
        orderBy,
        page,
    });

    //** Functions */
    // Change page
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        typeof onPageChange === "function" && onPageChange(event, newPage);
    };

    // Change Row per page
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        typeof onRowsPerPageChange === "function" && onRowsPerPageChange(event);
    };

    // Checked Table
    const isChecked = (id: number) => checked.indexOf(id) !== -1;

    const handleAllChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newChecked = rows.map(n => n.id);
            return setCheckedList(newChecked);
        }
        setCheckedList([]);
    };

    const handleChecked = (id: number) => {
        const idChecked = checked.indexOf(id);
        let newChecked: readonly number[] = [];

        if (idChecked === -1) {
            //** idChecked not contain in newChecked */
            newChecked = newChecked.concat(checked, id);
        } else if (idChecked === 0) {
            //** unchecked last idChecked has contain in newChecked */
            newChecked = newChecked.concat(checked.slice(1));
        } else if (idChecked === checked.length - 1) {
            //** unchecked last idChecked has contain in newChecked when full length */
            newChecked = newChecked.concat(checked.slice(0, -1));
        } else if (idChecked > 0) {
            //** unchecked idChecked any where has contain in newChecked */
            newChecked = newChecked.concat(
                checked.slice(0, idChecked),
                checked.slice(idChecked + 1),
            );
        }

        setCheckedList(newChecked);
    };

    // Sort Table
    const handleSortTable = ({ order, orderBy }: sortTableProps) => {
        setOrder(order);
        setOrderBy(orderBy);
    };

    //** Hooks */
    // Data Table
    useEffect(() => {
        if (isSort) return setData(sortTableRows);
        if (rowsLimitPerPage) return setData(rowsLimitPerPage);
        setData(rows);
    }, [isSort, rows, rowsLimitPerPage, sortTableRows]);

    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ height: 350 }}>
                <Table size={size} stickyHeader={stickyHeader}>
                    <TableHeadComponent
                        columns={columns}
                        isCheckedList={isCheckedList}
                        rowCount={rows.length}
                        rowChecked={checked.length}
                        handleAllChecked={handleAllChecked}
                        //** Sort */
                        isSort={isSort}
                        order={order}
                        orderBy={orderBy}
                        handleSortTable={handleSortTable}
                    />

                    {!isEmpty(data) && (
                        <TableBody>
                            {data.map(rowItem => {
                                return (
                                    <TableRow key={rowItem?.id}>
                                        {isCheckedList && (
                                            <TableCell padding="checkbox">
                                                <CheckboxComponent
                                                    color={
                                                        CheckboxColor.primary
                                                    }
                                                    checked={isChecked(
                                                        rowItem.id,
                                                    )}
                                                    onChange={() =>
                                                        handleChecked(
                                                            rowItem?.id,
                                                        )
                                                    }
                                                />
                                            </TableCell>
                                        )}
                                        <TableCell>{rowItem?.id}</TableCell>
                                        <TableCell>{rowItem?.name}</TableCell>
                                        <TableCell>{rowItem?.fat}</TableCell>
                                    </TableRow>
                                );
                            })}

                            {emptyRows > 0 && (
                                <TableRow sx={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={columns.length} />
                                </TableRow>
                            )}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>

            {rowsPerPage > 0 && (
                <TablePagination
                    rowsPerPageOptions={rowsPerPageOptions}
                    component="div"
                    count={count}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    // Customize Pagination - Handle arrow firstPage and lastPage
                    ActionsComponent={ActionsComponent}
                />
            )}
        </Paper>
    );
};

export default TableComponent;
