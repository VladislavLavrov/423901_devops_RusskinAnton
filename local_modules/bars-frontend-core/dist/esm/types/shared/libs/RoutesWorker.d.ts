import { DockviewRoute, EntryPointBase } from "bars-frontend-shared";
import { IAuthService } from "bars-frontend-auth-libs";
import { MenuSection } from "../types/MenuItem";
export declare function MapRoutes(routes: DockviewRoute[], menuSections: MenuSection[], ipcRenderer?: any, disableAuth?: boolean, authService?: IAuthService, entryPointAddress?: string, customEntryPointClient?: EntryPointBase): {
    path: string;
    errorElement: import("react/jsx-runtime").JSX.Element;
    element: import("react/jsx-runtime").JSX.Element;
}[];
