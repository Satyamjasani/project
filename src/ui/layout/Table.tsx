import React, { useEffect, useState } from "react";

// UI IMPORT
import { Icon, IconKey, Sorting } from "../icons";
import Input from "../forms/Input";
import Toggle from "../elements/Toggle";

export type TableFormType = "Input" | "Toggle";
export interface ColumnsType {
    name: string;
    title: string;
    Cell?: any;
    sortable?: boolean;
    form?: TableFormType;
    sort?: TableSortingTypes;
}

export type TableSortingTypes = "asc" | "desc";

interface TableProps {
    className?: string;
    id?: string;
    isLoading?: boolean;
    columns: ColumnsType[];
    items: any;
    headerClassName?: string;
    bodyClassName?: string;
    actionIcons?: IconKey[];
    onActionIconClick?: (icon: IconKey, item: any, index: number) => void;
    onFormsChange?: (
        form: TableFormType,
        name: string,
        { value, item, index }: { value?: any; item?: any; index?: number }
    ) => void;
}

/* ============================== TABLE ============================== */

const Table = (props: TableProps) => {
    const {
        className = "",
        id,
        isLoading,
        columns,
        items = [],
        headerClassName,
        bodyClassName,
        actionIcons,
        onActionIconClick,
        onFormsChange,
    } = props;

    const [tableData, setTableData] = useState<any[]>(items);
    const [columnData, setColumnData] = useState<ColumnsType[]>(columns);

    useEffect(() => {
        setTableData(items);
        setColumnData(columns);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, columns]);

    const sortingByVal = (name: string, index: number) => {
        const newTableData = [...tableData];
        const newColumnsData = [...columnData];
        const sort = newColumnsData[index]?.sort === "asc" ? "desc" : "asc";
        newColumnsData[index] = { ...newColumnsData[index], sort };
        sort === "asc"
            ? newTableData.sort((a, b) =>
                a[name]?.toLowerCase() < b[name]?.toLowerCase() ? -1 : 1
            )
            : newTableData
                .sort((a, b) =>
                    a[name]?.toLowerCase() < b[name]?.toLowerCase() ? -1 : 1
                )
                .reverse();
        setColumnData(newColumnsData);
        setTableData(newTableData);
    };

    return (
        <>
            <div id={id} className="relative bg-white rounded-lg drop-shadow-xl">
                <div
                    className={`${className} relative overflow-x-auto rounded-lg min-h-[calc(100vh-174px)] max-h-[calc(100vh-174px)]`}
                >
                    <table className="w-full text-left">
                        <thead
                            className={`${headerClassName} select-none z-20 items-center sticky top-0 text-white bg-primary rounded-md`}
                        >
                            <tr>
                                {columnData?.map((val: any, index: number) => {
                                    return (
                                        <>
                                            <td key={index} className="px-6 py-1.5 items-center">
                                                <div className="flex gap-3 items-center">
                                                    <span className="whitespace-nowrap text-sm">
                                                        {val?.title}
                                                    </span>
                                                    {val?.sortable && (
                                                        <Sorting
                                                            className="cursor-pointer"
                                                            fill={val?.sort === "asc" ? "#38bdf8" : "white"}
                                                            fill2={val?.sort === "desc" ? "#38bdf8" : "white"}
                                                            onClick={() => sortingByVal(val?.name, index)}
                                                        />
                                                    )}
                                                </div>
                                            </td>
                                        </>
                                    );
                                })}
                                {actionIcons?.length ? (
                                    <td className="py-1.5">
                                        <span className="whitespace-nowrap text-sm">Actions</span>
                                    </td>
                                ) : null}
                                <td className="px-6 py-1.5 items-center"></td>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                // <div className="absolute top-[50%] left-[45%]">
                                //     <Loader background="transparent" />
                                // </div>
                                <></>
                            ) : tableData?.length && !isLoading ? (
                                tableData?.map((item: any, index: number) => {
                                    return (
                                        <tr
                                            key={index}
                                            className={`${bodyClassName} bg-white border-b `}
                                        >
                                            {columnData?.map((column: ColumnsType, idx: number) => {
                                                const { Cell } = column;
                                                return (
                                                    <>
                                                        <td key={index * idx}>
                                                            <div className="gap-2 flex items-center px-6 py-1.5 text-txt-primary text-xs whitespace-nowrap">
                                                                {Cell ? (
                                                                    <div className="text-xs gap-2 flex">
                                                                        <Cell {...item} index={index} />
                                                                    </div>
                                                                ) : column.form ? (
                                                                    <>
                                                                        {column.form === "Input" ? (
                                                                            <Input
                                                                                name="input"
                                                                                value={item?.[column?.name]}
                                                                                onChange={(e: any) =>
                                                                                    onFormsChange?.(
                                                                                        "Input",
                                                                                        column.name,
                                                                                        {
                                                                                            value: e.target.value,
                                                                                            item,
                                                                                            index,
                                                                                        }
                                                                                    )
                                                                                }
                                                                            />
                                                                        ) : column.form === "Toggle" ? (
                                                                            <>
                                                                                <Toggle
                                                                                    value={item?.[column?.name]}
                                                                                    onChange={(value) => {
                                                                                        onFormsChange?.(
                                                                                            "Toggle",
                                                                                            column.name,
                                                                                            {
                                                                                                value,
                                                                                                item,
                                                                                                index,
                                                                                            }
                                                                                        );
                                                                                    }}
                                                                                />
                                                                            </>
                                                                        ) : null}
                                                                    </>
                                                                ) : (
                                                                    item?.[column?.name]?.toString()
                                                                )}
                                                            </div>
                                                        </td>
                                                    </>
                                                );
                                            })}
                                            <td>
                                                <div className="flex gap-5 py-1.5 items-center text-txt-primary text-xs whitespace-nowrap">
                                                    {actionIcons?.length &&
                                                        actionIcons?.map((icon: IconKey, idx: number) => (
                                                            <React.Fragment key={idx}>
                                                                <Icon
                                                                    name={icon}
                                                                    onClick={() =>
                                                                        onActionIconClick?.(icon, item, index)
                                                                    }
                                                                />
                                                            </React.Fragment>
                                                        ))}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                !className?.includes("min-h-") && (
                                    <div className="fixed w-[100%] h-[100%]">
                                        <div className="flex h-full items-center justify-center"></div>
                                    </div>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Table;
