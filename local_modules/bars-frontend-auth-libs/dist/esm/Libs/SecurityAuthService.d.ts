import { AxiosInstance } from 'axios';
import { AlertColor } from '../Models/AlertColor';
import { IAuthService } from '../Models/AuthService.interface';
export declare class SecurityAuthService implements IAuthService {
    apiUrl: string;
    axiosOpt: AxiosInstance;
    constructor(apiUrl?: string);
    LogIn(login: string, password: string, snackbar: (msg: string, severity: AlertColor) => void): Promise<boolean | null>;
    LogOut(snackbar: (msg: string, severity: AlertColor) => void): void;
    UpdateToken(refreshToken: string): Promise<boolean>;
    IsLoggedIn(): Promise<boolean>;
}
