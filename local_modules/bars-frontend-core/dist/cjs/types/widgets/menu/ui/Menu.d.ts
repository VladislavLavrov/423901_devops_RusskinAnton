import { MenuSection } from "../../../shared/types/MenuItem";
export type MenuProps = {
    children: any;
    sections: MenuSection[];
};
export declare function Menu({ children, sections }: MenuProps): import("react/jsx-runtime").JSX.Element;
