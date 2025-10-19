'use client';

import { Modal } from '@/components/ui';
import { DeleteFilled } from '@ant-design/icons';

interface DeleteBranchProps {
  open: boolean;
  onClose: () => void;
}

export default function DeleteBranch({ open, onClose }: DeleteBranchProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={onClose}
      title="Are you sure <br> you want to delete this branch?"
      size="small"
      confirmText="Delete"
      cancelText="Cancel"
      confirmIcon={<DeleteFilled />}
      className="confirm-modal"
    >
      <div className="confirm-modal-content">Branch name</div>
    </Modal>
  );
}
