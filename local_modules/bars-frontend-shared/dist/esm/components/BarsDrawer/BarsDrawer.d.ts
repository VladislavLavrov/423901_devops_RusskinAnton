type BarsDrawerProps = {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    headerText: string;
    drawerPosition?: "right" | "left" | undefined;
    widthSizePercents?: number;
    minWidthPx?: number;
    buttonText?: string | undefined;
    onClickButton?: (() => void) | undefined;
    style?: React.CSSProperties | undefined;
    loading?: boolean | undefined;
    onClickButtonCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function BarsDrawer({ children, drawerPosition, widthSizePercents, visible, onClose, headerText, buttonText, onClickButton, minWidthPx, style, loading, onClickButtonCancel }: BarsDrawerProps): import("react/jsx-runtime").JSX.Element;
export {};
