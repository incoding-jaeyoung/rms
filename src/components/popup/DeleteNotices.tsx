'use client';

import { Modal } from '@/components/ui';
import { Form } from 'antd';
import { CloseCircleFilled, CheckCircleFilled } from '@ant-design/icons';

interface DeleteNoticesProps {
  open: boolean;
  onClose: () => void;
}

export default function DeleteNotices({ open, onClose }: DeleteNoticesProps) {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={() => form.submit()}
      title="Are you sure <br> you want to delete this notice?"
      size="small"
      confirmText="Delete"
      cancelText="Cancel"
      cancelIcon={<CloseCircleFilled />}
      // confirmIcon={<CheckCircleFilled />}
      className="confirm-modal"
    >
      <div className="confirm-modal-content">notice title...</div>
    </Modal>
  );
}
