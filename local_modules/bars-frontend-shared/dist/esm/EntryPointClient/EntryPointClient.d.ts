import { AxiosInstance } from 'axios';
import { ApiResponseBase, ApiResponseBaseSimple } from './DTOs/ApiResponseBase';
import { ServiceInfoResponseDTO } from './DTOs/ServiceInfoResponseDTO';
import { EditServiceInfoRequestDTO } from './DTOs/EditServiceInfoRequestDTO';
import EntryPointBase from './EntryPointBase';
export declare class EntryPointClient implements EntryPointBase {
    client: AxiosInstance;
    constructor(entryPointUrl: string);
    static SetServicesList(services: ServiceInfoResponseDTO[]): void;
    static ClearServicesList(): void;
    static GetServicesList(): ServiceInfoResponseDTO[] | undefined;
    RegisterService(serviceName: string, serviceAddress: string, isDisabled?: boolean, serviceConfig?: any, allowOverrideRecord?: boolean, onError?: (msg: string) => void): Promise<ApiResponseBase<ServiceInfoResponseDTO> | undefined>;
    EditService(input: EditServiceInfoRequestDTO, onError?: (msg: string) => void): Promise<ApiResponseBaseSimple | undefined>;
    RemoveService(serviceId: number, onError?: (msg: string) => void): Promise<ApiResponseBaseSimple | undefined>;
    GetServiceById(serviceId: number, onError?: (msg: string) => void): Promise<ApiResponseBase<ServiceInfoResponseDTO> | undefined>;
    GetServiceByName(serviceName: string, onError?: (msg: string) => void): Promise<ApiResponseBase<ServiceInfoResponseDTO> | undefined>;
    GetAllServices(onError?: (msg: string) => void): Promise<ApiResponseBase<ServiceInfoResponseDTO[]> | undefined>;
    OnServerAddressEntered(entryPointAddress: string): Promise<void>;
}
export default EntryPointClient;
