import { FilledInputProps, InputProps, OutlinedInputProps, SxProps, Theme } from "@mui/material";
type BarsTextFieldProps = {
    /** * Действие, возникающее при фокусе текстовое поле */
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    /** * Действие, возникающее при потере фокуса текстовым полем */
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    className?: string | undefined;
    id?: string | undefined;
    /** * Отображение красное обводки и надписи (helperText) */
    error?: boolean | undefined;
    /** * Название текстового поля */
    label?: string | undefined;
    /** * Надпись при ошибке (параметр error) */
    helperText?: string | undefined;
    style?: SxProps<Theme> | undefined;
    value?: string;
    /** * Событие, которое генерируется при изменении текста (не считая форматирования текста) */
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    /** * Событие, которое генерируется при изменении текста ВКЛЮЧАЯ форматирование текста */
    onChangeWithAdvance?: (newValue: string) => void;
    inputRef?: React.MutableRefObject<HTMLInputElement | undefined> | undefined;
    placeholder?: string | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    inputProps?: Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps> | undefined;
    disabled?: boolean;
    type?: React.InputHTMLAttributes<unknown>['type'];
    /** * Включить поддержку нескольких строк в поле ввода */
    multiline?: boolean;
    /** * Включить поддержку форматирования текста */
    advanceEdit?: boolean;
    /** * Включить поддержку выбора эмодзи */
    emojiSupport?: boolean;
};
export default function BarsTextField({ className, id, error, label, helperText, style, value, onChange, onChangeWithAdvance, inputRef, placeholder, onKeyDown, inputProps, onFocus, onBlur, disabled, type, multiline, advanceEdit, emojiSupport }: BarsTextFieldProps): import("react/jsx-runtime").JSX.Element;
export {};
