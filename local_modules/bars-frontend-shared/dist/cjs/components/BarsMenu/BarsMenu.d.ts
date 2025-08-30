import { Dispatch, CSSProperties } from 'react';
export type BarsMenuProps = {
    anchorElement: null | HTMLElement;
    setAnchorElement: Dispatch<React.SetStateAction<HTMLElement | null>>;
    items?: BarsMenuItemProps[] | null;
    style?: CSSProperties | undefined;
    children?: any;
};
export type BarsMenuItemProps = {
    /**
    * @deprecated Устаревший параметр. Используйте поле {@link BarsMenuItemProps.label}.
    */
    lablel?: string;
    label: string;
    style?: CSSProperties;
    onClick?: ((e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | ((e: React.MouseEvent<HTMLLIElement, MouseEvent>) => Promise<any>);
};
export declare function BarsMenu({ anchorElement, setAnchorElement, items, style, children }: BarsMenuProps): import("react/jsx-runtime").JSX.Element;
export default BarsMenu;
