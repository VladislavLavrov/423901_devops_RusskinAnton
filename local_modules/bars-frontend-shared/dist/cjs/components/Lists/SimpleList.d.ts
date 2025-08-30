import * as React from 'react';
import { ListItem } from '../../models/ListItem.ts';
type SimpleListProps = {
    /**
    * Строки текста в теле контейнера
    */
    items?: ListItem[] | undefined;
    /**
    * Элемент, который будет отображаться внизу тела контейнера (не рекомендуется, не тестировалось)
    */
    BottomItem?: React.FC | undefined;
    /**
    * Имя класса, которое будет задано родительскому элементу
    */
    ClassName?: string;
    style?: React.CSSProperties;
};
export default function SimpleList({ items, BottomItem, ClassName, style }: SimpleListProps): import("react/jsx-runtime").JSX.Element;
export {};
