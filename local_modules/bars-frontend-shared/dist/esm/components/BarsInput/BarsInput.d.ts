type BarsInputProps = {
    defaultValue?: string | undefined;
    placeholder?: string | undefined;
    type?: 'text' | 'password' | 'datetime-local' | 'number' | 'tel' | 'url';
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((newText: string) => void) | ((newText: string) => Promise<any>) | undefined;
    iconSrc?: string;
    icon?: React.ReactNode | undefined;
    iconPosition?: 'start' | 'end';
    onIconClick?: React.MouseEventHandler<HTMLImageElement>;
    maxHeight?: string;
    maxWidth?: string;
    backgroundColor?: string;
};
export default function BarsInput({ defaultValue, placeholder, maxHeight, maxWidth, icon, backgroundColor, onChange, type, className, style, iconSrc, iconPosition, onIconClick }: BarsInputProps): import("react/jsx-runtime").JSX.Element;
export {};
