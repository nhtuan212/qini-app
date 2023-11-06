"use client";
import React, { useEffect, useState } from "react";

//* Components */
import TableComponent from "@commonComponents/Table";

//** Type Props */
import { DataCell, TableSize } from "@typeProps/tableTypeProps";

//** Custom Hooks */
import UseTablePaginationActions from "@/customHooks/table/UseTablePaginationActions";

//** Apis */
import { headCells, tableData } from "@/apis/tableData";

export default function TableModule() {
    //** States */
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rowsLimitPerPage, setRowLimitPerPage] = useState<DataCell[]>([]);

    //** Functions */
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    //** Hooks */
    // Limit table data per page
    useEffect(() => {
        const handleLimitPerPage =
            rowsPerPage > 0
                ? tableData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                  )
                : tableData;

        setRowLimitPerPage(handleLimitPerPage);
    }, [page, rowsPerPage]);

    return (
        <TableComponent
            size={TableSize.medium}
            columns={headCells}
            rows={tableData}
            //** Checked Table */
            isCheckedList
            //** Sort Table */
            isSort
            //** Pagination Table options */
            page={page}
            rowsPerPage={rowsPerPage}
            rowsLimitPerPage={rowsLimitPerPage}
            rowsPerPageOptions={[5, 10, 15]}
            count={tableData?.length}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            // Customize Pagination - Handle arrow firstPage and lastPage
            ActionsComponent={UseTablePaginationActions}
        />
    );
}
