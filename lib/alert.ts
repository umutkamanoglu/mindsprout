import { ToastContainer, toast } from 'react-toastify';

interface AlertProps {
    message: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
    type?: 'info' | 'success' | 'warning' | 'error' | 'default';
    theme?: 'light' | 'dark' | 'colored';
    autoClose?: number;
    hideProgressBar?: boolean;
    closeOnClick?: boolean;
    pauseOnFocusLoss?: boolean;
    pauseOnHover?: boolean;
}

export const Alert = ({
    message,
    position = 'top-right',
    type = 'info',
    theme = 'light',
    autoClose = 5000,
    hideProgressBar = false,
    closeOnClick = true,
    pauseOnFocusLoss = true,
    pauseOnHover = true,
}: AlertProps) => {
    console.log("test")
    toast(message, {
        position,
        type,
        theme,
        autoClose,
        hideProgressBar,
        closeOnClick,
        pauseOnFocusLoss,
        pauseOnHover,
    })
}