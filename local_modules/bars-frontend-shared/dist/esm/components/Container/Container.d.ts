import { ListButton } from '../..';
type ContainerProps = {
    HeaderText?: string;
    HeaderElement?: JSX.Element;
    Buttons?: ListButton[];
    children: React.ReactNode;
    headerStyle?: React.CSSProperties;
    className?: string;
    style?: React.CSSProperties;
};
export default function Container({ HeaderElement, HeaderText, Buttons, children, headerStyle, className, style }: ContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
