export type BarsRadioGroupProps = {
    items: BarsRadioItem[];
    value?: string | number;
    defaultValue?: string | number;
    className?: string;
    radioClassName?: string;
    labelClassName?: string;
    row?: boolean;
    groupName?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
};
export type BarsRadioItem = {
    value: string | number;
    label: string;
};
export default function BarsRadioGroup({ items, onChange, value, defaultValue, className, labelClassName, radioClassName, row, groupName }: BarsRadioGroupProps): import("react/jsx-runtime").JSX.Element;
