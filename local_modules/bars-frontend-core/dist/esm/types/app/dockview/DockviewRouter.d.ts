import { IAuthService } from "bars-frontend-auth-libs";
import { DockviewRoute, EntryPointBase } from "bars-frontend-shared";
import { MenuSection } from "../../shared/types/MenuItem";
export type DockviewRouterProps = {
    menuSections: MenuSection[];
    routes: DockviewRoute[];
    startItem?: DockviewRoute;
    authService?: IAuthService | undefined;
    disbleAuth?: boolean;
    entryPointAddress?: string;
    customEntryPointClient?: EntryPointBase;
    ipcRenderer?: any;
};
export declare function DockviewRouter({ routes, menuSections, startItem, authService, disbleAuth, entryPointAddress, customEntryPointClient, ipcRenderer }: DockviewRouterProps): import("react/jsx-runtime").JSX.Element;
