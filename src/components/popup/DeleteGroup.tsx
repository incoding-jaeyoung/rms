'use client';

import { Modal } from '@/components/ui';
import { DeleteFilled } from '@ant-design/icons';

interface DeleteGroupProps {
  open: boolean;
  onClose: () => void;
}

export default function DeleteGroup({ open, onClose }: DeleteGroupProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={onClose}
      title="Are you sure <br> you want to delete this group?"
      size="small"
      confirmText="Delete"
      cancelText="Cancel"
      confirmIcon={<DeleteFilled />}
      className="confirm-modal"
    >
      <div className="confirm-modal-content">Group name</div>
    </Modal>
  );
}
