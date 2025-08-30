import { SxProps, Theme } from "@mui/material";
import { type MRT_ColumnDef, type MRT_RowData, type MRT_TableInstance, MRT_Row, MRT_RowSelectionState, MRT_VisibilityState } from 'material-react-table';
type BarsTableProps<TData extends MRT_RowData> = {
    /** * Массив колонок */
    columns: MRT_ColumnDef<TData>[];
    /** * Массив строк */
    data: TData[];
    /** * Событие при выделении строки */
    onRowSelectionChange?: any;
    /** * Объект для хранения идентификаторов выделенных строк */
    rowSelection?: MRT_RowSelectionState | undefined;
    /** * Включить возможность выделения строк */
    enableRowSelection?: boolean | ((row: MRT_Row<TData>) => boolean) | undefined;
    /** * Добавление своего элемента вверху таблицы */
    topCustomElements?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => React.ReactNode) | undefined;
    /** * Свой футер таблицы */
    bottomCustomElements?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => React.ReactNode) | undefined;
    /** * Свой футер таблицы при выборе строк */
    bottomCustomElementsByRowSelection?: React.ReactNode | ((props: {
        table: MRT_TableInstance<TData>;
    }) => React.ReactNode);
    /** * Стили */
    style?: SxProps<Theme>;
    headAlign?: 'left' | 'right' | 'center';
    bodyAlign?: 'flex-start' | 'flex-end' | 'center';
    /** * Текст при отсуствии строк */
    noRecordsLabel?: string;
    /** * Отображение скелета загрузки */
    isLoading?: boolean | undefined;
    /** * Отображение линейного индикатора загрузки */
    showProgressBars?: boolean | undefined;
    /** * Отображение разделителей столбцов */
    columnSeparator?: boolean | undefined;
    enableDensityToggle?: boolean | undefined;
    /** * Включить редактирование полей в строках */
    enableEditing?: boolean | undefined;
    enableStickyHeader?: boolean | undefined;
    /** * Включить возмодность закрепления строк */
    enableColumnPinning?: boolean | undefined;
    /** * Количество строк на странице */
    enableExpanding?: boolean | undefined;
    getSubRows?: ((originalRow: TData, index: number) => TData[] | undefined) | undefined;
    /** * Для отображения определенных колонок */
    columnVisibility?: MRT_VisibilityState | undefined;
    /** * Событие для изменения отображения колонок */
    onColumnVisibilityChange?: any;
    /** * Элемент отображаемый в центре футера таблицы при выборе строк */
    elementBottomToolbarCenter?: JSX.Element | undefined;
    /** * Элемент отображаемый в правом углу футера таблицы при выборе строк */
    elementBottomToolbarRigth?: JSX.Element | undefined;
    /** * Включить элемент навигации по страницам таблицы */
    enablePagination?: boolean | undefined;
    maxHeight?: string | undefined;
};
export default function BarsTable<TData extends MRT_RowData>({ columns, data, onRowSelectionChange, rowSelection, enableRowSelection, bodyAlign, headAlign, topCustomElements, bottomCustomElementsByRowSelection, style, noRecordsLabel, isLoading, showProgressBars, columnSeparator, enableDensityToggle, enableEditing, enableStickyHeader, enableColumnPinning, enableExpanding, getSubRows, columnVisibility, onColumnVisibilityChange, elementBottomToolbarCenter, elementBottomToolbarRigth, enablePagination, bottomCustomElements, maxHeight }: BarsTableProps<TData>): import("react/jsx-runtime").JSX.Element;
export {};
