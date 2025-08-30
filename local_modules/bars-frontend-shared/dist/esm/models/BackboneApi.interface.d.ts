import { KeyValuePair } from "./KeyValuePair";
import ISnackbarInfo from './SnackbarInfo.interface';
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
export interface IBackboneApi {
    useOpenTab(id: string): void;
    useGetLastTab(): any;
    useCallSnackbar(data: ISnackbarInfo): void;
    useGetShackbar(): ISnackbarInfo;
    useHideSnackbar(): void;
    useAddOrReplaceToContext(data: KeyValuePair): void;
    useAddOrReplaceManyToContext(data: KeyValuePair[]): void;
    useRemoveFromContext(key: string): void;
    useGetAllContext(): KeyValuePair[];
    useGetDispatcher(): Dispatch<AnyAction>;
    CallSnackbar(dispatch: Dispatch<AnyAction>, data: ISnackbarInfo): void;
    OpenTab(dispatch: Dispatch<AnyAction>, data: string): void;
    AddOrReplaceModulespaceKey(dispatch: Dispatch<AnyAction>, data: KeyValuePair): void;
    AddOrReplaceModulespaceManyKeys(dispatch: Dispatch<AnyAction>, data: KeyValuePair[]): void;
    RemoveModulespaceKey(dispatch: Dispatch<AnyAction>, data: string): void;
}
export default IBackboneApi;
