import { useCallback } from 'react';
import { toast } from 'sonner';
import { Icon, type IconProps } from '../Icon';

type ToastHandlerType = (props: {
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}) => void;

export default function useToast(): ToastHandlerType {
  const toastHanlder: ToastHandlerType = useCallback(({ type, title, description }) => {
    const options = {
      description,
      icon: <Icon icon={getToastIconName(type)} color={getToastColor(type)} />,
      cancel: {
        label: <Icon icon="solar:close-circle-outline" />,
        onClick: () => {},
      },
      cancelButtonStyle: { background: 'transparent' },
    };

    if (type === 'success') return toast.success(title, options);
    else if (type === 'error') return toast.error(title, options);
    else return toast.info(title, options);
  }, []);

  return toastHanlder;
}

function getToastIconName(type: Parameters<ToastHandlerType>[0]['type']): IconProps['icon'] {
  switch (type) {
    case 'success':
      return 'solar:check-circle-bold';
    case 'error':
      return 'solar:danger-triangle-bold';
    case 'info':
    default:
      return 'solar:danger-circle-bold';
  }
}

function getToastColor(type: Parameters<ToastHandlerType>[0]['type']): IconProps['color'] {
  switch (type) {
    case 'success':
      return 'success';
    case 'error':
      return 'error';
    case 'info':
      return 'auto';
    default:
      return 'disabled';
  }
}
