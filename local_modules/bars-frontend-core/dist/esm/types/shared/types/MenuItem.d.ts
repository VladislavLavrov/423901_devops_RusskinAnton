export type MenuSection = {
    Items: MenuItem[];
    Name: string;
};
export type MenuItem = {
    SvgSrc: string;
    SvgClass?: string | undefined;
    Name: string;
    OnClick?: () => any | undefined;
    Href?: string;
    ChangePage?: string;
    Children?: AdditionalMenuSection[] | undefined;
    /**
     * Кастомный эелемент, на который будет заменена строка в раскрытом состоянии меню
     */
    CustomElement?: React.FC;
    /**
     * Раскрывать меню при нажатии на этот элемент списка. Полезно в связке с CustomElement
     */
    ExpandOnClick?: boolean;
};
export type AdditionalMenuSection = {
    sectionName: string;
    items?: AdditionalMenuItem[];
};
export type AdditionalMenuItem = {
    label: string;
    href?: string;
    onClick?: (() => Promise<any>) | (() => void) | undefined;
};
