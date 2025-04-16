import type { ModalProps as MuiModalProps } from '@mui/material/Modal';
import type { NamedExoticComponent, PropsWithChildren } from 'react';
export type ModalProps = PropsWithChildren<Omit<MuiModalProps, 'open' | 'children'>> & {
    isOpen: boolean;
    closeModal: VoidFunction;
    isPrevented?: boolean;
};
export interface ConfirmModalProps extends Omit<ModalProps, 'children' | 'onSubmit'> {
    isSubmitting?: boolean;
    onSubmit?: () => Promise<void>;
    onClose?: VoidFunction;
    title?: string;
    contentMessage?: string;
    cancelButtonText?: string;
    confirmButtonText?: string;
    confirmButtonIsDisabled?: boolean;
    cancelButtonIsDisabled?: boolean;
}
export type ModalComponentType = NamedExoticComponent<ModalProps>;
export type ConfirmModalComponentType = NamedExoticComponent<ConfirmModalProps>;
