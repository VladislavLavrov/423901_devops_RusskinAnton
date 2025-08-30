type BarsAccordionProps = {
    Header: React.ReactNode;
    Expanded: boolean;
    OnExpand: (() => void) | (() => Promise<any>);
    children: React.ReactNode;
};
export default function BarsAccordion({ Header, children, Expanded, OnExpand }: BarsAccordionProps): import("react/jsx-runtime").JSX.Element;
export {};
