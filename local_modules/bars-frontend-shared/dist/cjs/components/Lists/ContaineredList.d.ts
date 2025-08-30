import * as React from 'react';
import { ListItem } from '../../models/ListItem.ts';
import { ListButton } from '../../models/ListButton.ts';
type ContaineredListProps = {
    /**
    * Текст, который будет отображаться вверху элемента
    */
    ListHeader: string;
    /**
    * Кнопки, которые будет отображаться вверху элемента
    */
    HeaderButtons?: ListButton[] | undefined;
    /**
    * Строки текста в тела контейнера
    */
    items?: ListItem[] | undefined;
    /**
    * Элемент, который будет отображаться внизу тела контейнера (не рекомендуется, не тестировалось)
    */
    BottomItem?: React.FC | undefined;
    className?: string;
    style?: React.CSSProperties;
};
export default function ContaineredList({ ListHeader, HeaderButtons, items, BottomItem, className, style }: ContaineredListProps): import("react/jsx-runtime").JSX.Element;
export {};
