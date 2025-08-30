type BarsCheckboxProps = {
    state?: boolean;
    controlledState?: boolean;
    handleChange?: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => Promise<void>);
    indeterminate?: boolean;
    disabled?: boolean;
};
export default function BarsCheckbox({ state, controlledState, indeterminate, handleChange, disabled }: BarsCheckboxProps): import("react/jsx-runtime").JSX.Element;
export {};
