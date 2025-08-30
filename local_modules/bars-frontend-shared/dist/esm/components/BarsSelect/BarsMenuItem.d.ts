import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
export type BarsSelectItemProps = {
    className?: string;
    id?: string;
    sx?: SxProps<Theme> | undefined;
    value?: string | number | readonly string[];
    defaultValue?: string | number | readonly string[];
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLLIElement>;
    children: any;
};
/**
* @deprecated Устаревший компонент. Используйте компонент {@link BarsSelectItem}.
*/
export default function BarsMenuItem(props: BarsSelectItemProps | any): import("react/jsx-runtime").JSX.Element;
export declare function BarsSelectItem(props: BarsSelectItemProps | any): import("react/jsx-runtime").JSX.Element;
