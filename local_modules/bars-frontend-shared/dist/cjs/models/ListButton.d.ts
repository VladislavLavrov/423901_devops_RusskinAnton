export type ListButton = {
    /**
    * Название файла изображения из директории ./public
    */
    IconName: string;
    /**
    * Действие, которое будет происходить по нажатию на кнопку
    */
    OnClick: ((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | ((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => Promise<any>) | undefined;
};
