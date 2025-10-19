'use client';

import { Modal } from '@/components/ui';
import { DeleteFilled } from '@ant-design/icons';

interface DeleteRoleProps {
  open: boolean;
  onClose: () => void;
}

export default function DeleteRole({ open, onClose }: DeleteRoleProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={onClose}
      title="Are you sure <br> you want to delete this role?"
      size="small"
      confirmText="Delete"
      cancelText="Cancel"
      confirmIcon={<DeleteFilled />}
      className="confirm-modal"
    >
      <div className="confirm-modal-content">Role name</div>
    </Modal>
  );
}
