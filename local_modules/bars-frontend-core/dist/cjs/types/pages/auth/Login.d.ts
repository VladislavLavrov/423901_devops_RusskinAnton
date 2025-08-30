import { EntryPointBase } from 'bars-frontend-shared';
import { IAuthService } from 'bars-frontend-auth-libs';
export type LoginPageProps = {
    authService?: IAuthService | undefined;
    entryPointAddress?: string;
    customEntryPointClient?: EntryPointBase;
    ipcRenderer: any;
};
export declare function LoginPage({ authService, entryPointAddress, customEntryPointClient, ipcRenderer }: LoginPageProps): import("react/jsx-runtime").JSX.Element;
