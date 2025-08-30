import { NavigationItem } from './NavigationItem';
type NavigationProps = {
    /** * Действие, при нажатии кнопки "Назад". Если передано значение, появляется кнопка "Назад"" */
    onClickBack?: React.MouseEventHandler<HTMLSpanElement> | undefined;
    /** * Массив ссылок */
    items: NavigationItem[];
    /** * Стили текстовых элементов */
    styleSpanLink?: React.CSSProperties | undefined;
    /** * Стили корневого блока */
    styleRootNav?: React.CSSProperties | undefined;
};
export declare function Navigation({ onClickBack, items, styleRootNav, styleSpanLink }: NavigationProps): import("react/jsx-runtime").JSX.Element;
export default Navigation;
