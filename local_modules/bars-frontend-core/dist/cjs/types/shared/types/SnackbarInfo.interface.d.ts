import { AlertColor } from '@mui/material/Alert';
export default interface ISnackbarInfo {
    message: string;
    visible: boolean;
    severity: AlertColor;
}
