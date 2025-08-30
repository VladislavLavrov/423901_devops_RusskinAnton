import { DockviewApi } from 'dockview';
interface DockviewContextType {
    api?: DockviewApi;
}
export declare const DockviewContext: import("react").Context<DockviewContextType | null>;
export declare const useDockviewContext: () => DockviewContextType;
export {};
