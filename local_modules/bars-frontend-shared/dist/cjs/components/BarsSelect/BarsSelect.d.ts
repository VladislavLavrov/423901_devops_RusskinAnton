import { SelectChangeEvent } from "@mui/material";
import { Theme, SxProps } from "@mui/material/styles";
import { ReactNode } from "react";
type BarsSelectProps = {
    /** Массив значений выбранных элементов */
    value?: string[] | number[];
    /** * Событие при выборе значения из выпадающего списка */
    onChange?: ((event: SelectChangeEvent<any>, child: React.ReactNode) => void) | undefined;
    /** * Событие при закрытии выпадающего списка */
    onClose?: (event: React.SyntheticEvent<Element, Event>) => void | undefined;
    /** * Настройка отображения выбранного из выпадающего списка значения */
    renderValue?: (() => ReactNode) | undefined;
    className?: string | undefined;
    id?: string | undefined;
    /** * Признак возможности множественного выбора */
    multiple?: boolean | undefined;
    /** * Стили выпадающего списка */
    styleSelect?: SxProps<Theme> | undefined;
    /** * Стили корневого блока */
    styleRootDiv?: SxProps<Theme> | undefined;
    /** * Название выпадающего поля */
    label?: string | undefined;
    displayEmpty?: boolean | undefined;
    children?: any;
    autoFocus?: boolean | undefined;
    /** * Максимальная высота выпадающего списка */
    maxHeightList?: string | undefined;
    /** * Отображение красной обводки и подписи (helperText) */
    error?: boolean | undefined;
    /** * Подпись под полем (работает с error) */
    helperText?: string | undefined;
};
export default function BarsSelect({ className, id, styleSelect, styleRootDiv, value, label, onChange, onClose, multiple, children, displayEmpty, autoFocus, maxHeightList, renderValue, error, helperText }: BarsSelectProps): import("react/jsx-runtime").JSX.Element;
export {};
