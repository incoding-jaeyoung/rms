'use client';

import { Modal } from '@/components/ui';

interface DeleteErrorProps {
  open: boolean;
  onClose: () => void;
}

export default function DeleteError({ open, onClose }: DeleteErrorProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={onClose}
      title="The password will be reset to"
      size="small"
      confirmText="Reset Password"
      cancelText="Cancel"
      className="confirm-modal"
    >
      <div className="confirm-modal-content">00000000</div>
      <p className="ant-modal-title !mt-7.5 text-center">Are you sure you want to proceed?</p>
    </Modal>
  );
}
