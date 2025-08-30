export type ApiResponseBase<T> = {
    success: boolean;
    message: string;
    data: T;
};
export type ApiResponseBaseSimple = {
    success: boolean;
    message: string;
};
