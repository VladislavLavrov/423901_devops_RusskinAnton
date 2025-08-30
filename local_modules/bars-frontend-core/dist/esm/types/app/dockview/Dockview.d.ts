import { DockviewRoute } from 'bars-frontend-shared';
export type DockviewProps = {
    routes?: DockviewRoute[];
    startItem?: DockviewRoute;
    header?: React.FunctionComponent;
};
export declare const Dockview: ({ startItem, routes, header }: DockviewProps) => import("react/jsx-runtime").JSX.Element;
export default Dockview;
