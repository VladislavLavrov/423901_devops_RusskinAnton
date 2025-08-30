import { SnackbarCloseReason } from "@mui/material";
import React from "react";
export type BarsSnackbarProps = {
    action?: React.ReactNode;
    id?: string | undefined;
    /** * Показать уведомление */
    open: boolean | undefined;
    /** * Сообщение в уведомлении */
    message: React.ReactNode;
    /** * Событие при закрытии уведомления */
    onClose: ((event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void) | undefined;
    /** * Тип уведомления */
    type?: "info" | "success" | "warning" | "error" | undefined;
    /** * Время автоматического закрытия уведомления (5с по умолчанию) */
    autoHideDuration?: number | null | undefined;
    /** * Стили корневого блока */
    styleSnackbar?: React.CSSProperties | undefined;
    /** * Стили блока с сообщением */
    styleAlert?: React.CSSProperties | undefined;
};
export default function BarsSnackbar({ id, open, message, onClose, type, autoHideDuration, action, styleSnackbar, styleAlert }: BarsSnackbarProps): import("react/jsx-runtime").JSX.Element;
