import { AlertColor } from "./AlertColor";
export interface IAuthService {
    LogIn(login: string, password: string, snackbar: (msg: string, severity: AlertColor) => void): Boolean | null | Promise<boolean | null> | Promise<boolean>;
    LogOut(snackbar: (msg: string, severity: AlertColor) => void): void | Promise<void>;
    UpdateToken(refreshToken?: string): boolean | Promise<boolean>;
    IsLoggedIn(): boolean | Promise<boolean>;
}
