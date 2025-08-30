import React from "react";
import { AdditionalMenuSection } from "../../../shared/types/MenuItem";
export type AdditionalMenuProps = {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    items?: AdditionalMenuSection[];
};
export declare function AdditionalMenu({ isVisible, setIsVisible, items }: AdditionalMenuProps): import("react/jsx-runtime").JSX.Element | null;
