import { IAuthService } from 'bars-frontend-auth-libs';
export type LoggedInfoProp = {
    authService?: IAuthService | undefined;
};
export declare function LoggedInfo({ authService }: LoggedInfoProp): import("react/jsx-runtime").JSX.Element;
