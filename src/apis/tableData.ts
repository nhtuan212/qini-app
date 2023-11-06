type Sample = [string, number];
interface Data {
    id: number;
    name: string;
    fat: number;
}

const createHeadCells = (
    id: string,
    disablePadding: boolean,
    label: string,
) => ({
    id,
    disablePadding,
    label,
});
export const headCells = [
    createHeadCells("id", true, "Id"),
    createHeadCells("name", true, "Name"),
    createHeadCells("fat", true, "Fat"),
];

const sample: readonly Sample[] = [
    ["Frozen yoghurt", 159],
    ["Ice cream sandwich", 237],
    ["Eclair", 262],
    ["Cupcake", 305],
    ["Gingerbread", 356],
];

const createData = (id: number, name: string, fat: number) => ({
    id,
    name,
    fat,
});
export const tableData: Data[] = Array.from({ length: 11 }, (_, index) => {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    return createData(index, ...randomSelection);
});
