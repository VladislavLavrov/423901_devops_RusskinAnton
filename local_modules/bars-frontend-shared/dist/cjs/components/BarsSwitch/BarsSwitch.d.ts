type BarsSwitchProps = {
    checked: boolean | "semi-enabled";
    OnClick: (() => void) | (() => Promise<any>);
    OnSemiEnabledClick?: (() => void) | (() => Promise<any>) | undefined;
    label?: string | void | undefined | null;
};
export default function BarsSwitch({ checked, OnClick, OnSemiEnabledClick, label }: BarsSwitchProps): import("react/jsx-runtime").JSX.Element;
export {};
