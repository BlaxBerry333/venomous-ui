type ToastHandlerType = (props: {
    type: 'success' | 'error' | 'info';
    title: string;
    description?: string;
}) => void;
export default function useToast(): ToastHandlerType;
export {};
