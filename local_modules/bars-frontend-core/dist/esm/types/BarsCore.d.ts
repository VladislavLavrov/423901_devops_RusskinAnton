import './index.css';
import { Theme } from '@mui/material/styles';
import 'dayjs/locale/ru';
import { DockviewRoute, EntryPointBase } from 'bars-frontend-shared';
import { IAuthService } from 'bars-frontend-auth-libs';
import { MenuSection } from './shared/types/MenuItem';
export type BarsCoreProps = {
    routes: DockviewRoute[];
    menuSections: MenuSection[];
    disableAuth?: boolean;
    dateLocale?: string;
    themeSettings?: ThemeSettings;
    muiTheme?: Theme;
    authService?: IAuthService;
    authServiceAddress?: string;
    entryPointAddress?: string;
    customEntryPointClient?: EntryPointBase;
    ipcRenderer?: any;
};
export type ThemeSettings = {
    PrimaryColor: string;
    SecondaryColor: string;
    FontFamily: string;
};
export declare function BarsCore({ routes, menuSections, themeSettings, dateLocale, muiTheme, disableAuth, authService, authServiceAddress, entryPointAddress, customEntryPointClient, ipcRenderer }: BarsCoreProps): import("react/jsx-runtime").JSX.Element;
