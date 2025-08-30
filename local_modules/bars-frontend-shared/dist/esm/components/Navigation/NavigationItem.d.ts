export type NavigationItem = {
    /**
    * Текст элемента навигации
    */
    Label?: string;
    /**
    * HTML элемент вместо Label
    */
    element?: JSX.Element | undefined;
    /**
    * Действие, которое произойдет при нажатии на элемент
    */
    OnClick?: (() => void) | (() => Promise<void>) | undefined;
    /**
    * Активный элемент чёрного цвета, а неактивный - серого
    */
    IsActive?: boolean;
};
