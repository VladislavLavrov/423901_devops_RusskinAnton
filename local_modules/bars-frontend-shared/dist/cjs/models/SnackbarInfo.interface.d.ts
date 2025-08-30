import { AlertColor } from '@mui/material/Alert';
export interface ISnackbarInfo {
    message: string;
    visible: boolean;
    severity: AlertColor;
}
export default ISnackbarInfo;
