'use client';

import { Modal } from '@/components/ui';
import { InfoCircleFilled, PrinterFilled } from '@ant-design/icons';
import { Button } from 'antd';

interface NewNoticesProps {
  open: boolean;
  onClose: () => void;
}

export default function NewNotices({ open, onClose }: NewNoticesProps) {
  return (
    <Modal open={open} onCancel={onClose} title="Jornal Details" size="default" cancelText="Close">
      <div className="flex gap-10">
        <div className="flex-1 flex flex-col">
          <p className="flex items-center justify-between text-sm font-semibold text-[#171A1C]">
            Transaction Statement
            <Button type="default" icon={<PrinterFilled />}>
              Print
            </Button>
          </p>
          <div className="mt-2.5 gray-box h-[412px] overflow-auto text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto voluptatum atque
            dicta, incidunt molestias consectetur vero beatae commodi pariatur vitae et
            necessitatibus repudiandae blanditiis dolore corporis harum, ab alias?
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <p className="flex items-center justify-between text-sm font-semibold text-[#171A1C]">
            Transaction Images
          </p>
          <p className="flex items-center gap-1.5 font-medium text-sm">
            <InfoCircleFilled />
            Transaction images are stored for 6 months.
          </p>
          <div className="image-box mt-7.5">
            <div className="image-box-item gray-box">
              <img src="/images/img-thumb-1.jpg" alt="image" />
            </div>
            <div className="image-box-item gray-box"></div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
