import { DockviewRoute } from 'bars-frontend-shared';
import ISavedTabData from '../../shared/types/SavedTabData.interface';
import { DockviewApi } from 'dockview';
export declare function GetManyPageSupport(routes: DockviewRoute[], pageType: string): boolean;
export declare function GetPageTitle(routes: DockviewRoute[], pageType: string): string;
export declare function GetSavedTabs(): ISavedTabData[];
export declare function SaveTab(id: string, pageType: string, props?: string, api?: DockviewApi, title?: string, params?: {}): void;
export declare function RemoveSavedTab(id: string): void;
export declare function ClearAllTabls(): void;
