type BarsTabsProps = {
    tabs: BarsTabInfo[];
    style?: React.CSSProperties;
    className?: string;
};
type BarsTabInfo = {
    label: string;
    children: any;
};
export default function BarsTabs({ tabs, style, className }: BarsTabsProps): import("react/jsx-runtime").JSX.Element;
export {};
