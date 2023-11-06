//** Interfaces */
export interface HeadCell {
    id: string | number;
    disablePadding: boolean;
    label: string;
}
export interface DataCell {
    id: number;
    name?: string;
    fat?: number;
}
export interface sortTableProps {
    order: TableOrderProps;
    orderBy: keyof HeadCell;
}

//** Enum */
export enum TableSize {
    small = "small",
    medium = "medium",
}

export enum TableOrderProps {
    ASC = "asc",
    DESC = "desc",
}
