'use client';

import { Modal } from '@/components/ui';
import { DeleteFilled } from '@ant-design/icons';

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
      title="Are you sure <br> you want to delete this code?"
      size="small"
      confirmText="Delete"
      cancelText="Cancel"
      confirmIcon={<DeleteFilled />}
      className="confirm-modal"
    >
      <div className="confirm-modal-content">Error Code</div>
    </Modal>
  );
}
