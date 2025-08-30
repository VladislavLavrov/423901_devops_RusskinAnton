import { IAuthService } from "bars-frontend-auth-libs";
export type HeaderProps = {
    authService?: IAuthService | undefined;
};
export declare function Header({ authService }: HeaderProps): import("react/jsx-runtime").JSX.Element;
