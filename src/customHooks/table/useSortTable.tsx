import React from "react";

//** Constants */
import {
    DataCell,
    HeadCell,
    TableOrderProps,
} from "@/constants/typeProps/tableTypeProps";

interface useSortTableProps {
    rows: DataCell[];
    rowsPerPage: number;
    order: TableOrderProps;
    orderBy: keyof HeadCell;
    page: number;
}

const useSortTable = ({
    rows,
    rowsPerPage = 0,
    order,
    orderBy,
    page = 0,
}: useSortTableProps) => {
    const stableSort = <T,>(
        array: DataCell[],
        comparator: (a: T, b: T) => number,
    ) => {
        const stabilizedThis = array.map(
            (el, index) => [el, index] as [T, number],
        );
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map(el => el[0]);
    };

    const descendingComparator = <T,>(a: T, b: T, orderBy: keyof T) => {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    };

    const getComparator = <Key extends keyof any>(
        order: TableOrderProps,
        orderBy: Key,
    ): ((
        a: { [key in Key]: number },
        b: { [key in Key]: number },
    ) => number) => {
        return order === TableOrderProps.DESC
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    };

    const sortTableRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),

        // remove warning dependencies
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [order, orderBy, page, rowsPerPage],
    );

    return {
        sortTableRows,
    };
};

export default useSortTable;
