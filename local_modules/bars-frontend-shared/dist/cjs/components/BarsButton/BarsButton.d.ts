import { SxProps, Theme } from '@mui/material';
type BarsButtonProps = {
    text: string;
    /** * Цветовой вариант кнопки */
    variant?: 'green' | 'white' | 'red' | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean | undefined;
    icon?: React.ReactNode | undefined;
    iconPosition?: 'start' | 'end' | undefined;
    style?: SxProps<Theme> | undefined;
    className?: string | undefined;
    /** * Отображение элемента загрузки */
    loading?: boolean | undefined;
    /** * Действие, при клике на отмену загрузки */
    onClickCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function BarsButton({ className, text, variant, disabled, onClick, icon, iconPosition, style, loading, onClickCancel }: BarsButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
