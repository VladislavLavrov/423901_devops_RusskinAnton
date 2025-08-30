import { AlertColor } from '@mui/material';
export declare function LogIn(login: string, password: string): Promise<boolean>;
export declare function LogInSecurity(login: string, password: string): Promise<boolean | null | undefined>;
export declare function LogOut(snackbar: (msg: string, servity: AlertColor) => void): void;
