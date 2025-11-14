'use client';

import { Modal } from '@/components/ui';
import { CheckCircleFilled, NotificationFilled } from '@ant-design/icons';

interface AlertNoticesProps {
  open: boolean;
  onClose: () => void;
}

export default function AlertNotices({ open, onClose }: AlertNoticesProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={onClose}
      title="New Notice"
      size="default"
      cancelText=""
      confirmText="OK"
      confirmIcon={<CheckCircleFilled />}
      titleIcon={<NotificationFilled className="!w-5 !h-5" />}
    >
      <div className="alert-notices">
        <div className="title-line">
          <p>New Notice</p>
          <div className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </div>
        </div>
        <div className="content-line">
          <p>Content</p>
          <div className="alert-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, soluta architecto
            itaque minus magni laborum exercitationem unde autem error quasi voluptatem vel aperiam
            repudiandae. Nesciunt iste molestias ullam quae perspiciatis!
          </div>
        </div>
      </div>
    </Modal>
  );
}
