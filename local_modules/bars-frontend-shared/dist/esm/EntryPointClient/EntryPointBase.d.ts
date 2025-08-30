import { ApiResponseBase, ApiResponseBaseSimple } from "./DTOs/ApiResponseBase";
import { EditServiceInfoRequestDTO } from "./DTOs/EditServiceInfoRequestDTO";
import { ServiceInfoResponseDTO } from "./DTOs/ServiceInfoResponseDTO";
export default abstract class EntryPointBase {
    static SetServicesList(services: ServiceInfoResponseDTO[]): void;
    static ClearServicesList(): void;
    static GetServicesList(): ServiceInfoResponseDTO[] | undefined;
    abstract RegisterService(serviceName: string, serviceAddress: string, isDisabled?: boolean, serviceConfig?: any, allowOverrideRecord?: boolean, onError?: (msg: string) => void): Promise<ApiResponseBase<ServiceInfoResponseDTO> | undefined>;
    abstract EditService(input: EditServiceInfoRequestDTO, onError?: (msg: string) => void): Promise<ApiResponseBaseSimple | undefined>;
    abstract RemoveService(serviceId: number, onError?: (msg: string) => void): Promise<ApiResponseBaseSimple | undefined>;
    abstract GetServiceById(serviceId: number, onError?: (msg: string) => void): Promise<ApiResponseBase<ServiceInfoResponseDTO> | undefined>;
    abstract GetServiceByName(serviceName: string, onError?: (msg: string) => void): Promise<ApiResponseBase<ServiceInfoResponseDTO> | undefined>;
    abstract GetAllServices(onError?: (msg: string) => void): Promise<ApiResponseBase<ServiceInfoResponseDTO[]> | undefined>;
    abstract OnServerAddressEntered(entryPointAddress: string): Promise<void>;
}
