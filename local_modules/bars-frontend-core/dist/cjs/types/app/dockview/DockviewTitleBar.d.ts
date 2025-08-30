import { DockviewRoute } from 'bars-frontend-shared';
export type DockviewProps = {
    routes?: DockviewRoute[];
    startItem?: DockviewRoute;
    header?: React.FunctionComponent;
    ipcRenderer: any;
};
export declare const DockviewTitleBar: ({ startItem, routes, header, ipcRenderer }: DockviewProps) => import("react/jsx-runtime").JSX.Element;
export default DockviewTitleBar;
