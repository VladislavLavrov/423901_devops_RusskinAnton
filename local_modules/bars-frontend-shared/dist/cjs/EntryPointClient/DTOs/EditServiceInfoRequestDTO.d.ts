export type EditServiceInfoRequestDTO = {
    id: number;
    serviceName: string;
    address: string;
    isDisabled: boolean;
    serviceSettings?: any;
};
