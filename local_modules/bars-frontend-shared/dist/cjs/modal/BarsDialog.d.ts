export type BarsDialogButton = {
    buttonText: string;
    onButtonClick?: (() => void) | (() => Promise<any>) | undefined;
    variant?: 'red' | 'green' | 'white';
};
export type BarsDialogProps = {
    children: any;
    dialogTitle: string;
    isVisible: boolean;
    buttonText?: string;
    multiButtons?: BarsDialogButton[];
    onButtonClick?: (() => void) | (() => Promise<any>) | undefined;
    onClose?: (() => void) | (() => Promise<any>) | undefined;
    redButton?: boolean;
    buttonVariant?: 'red' | 'green' | 'white';
};
export default function BarsDialog(props: BarsDialogProps): import("react/jsx-runtime").JSX.Element;
