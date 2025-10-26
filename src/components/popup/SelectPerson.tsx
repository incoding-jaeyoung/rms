'use client';

import { Modal } from '@/components/ui';
import { Form, Select, Space } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';
interface SelectPersonProps {
  open: boolean;
  onClose: () => void;
}

// 그룹 데이터 타입
interface PersonData extends TabulatorData {
  checkbox: boolean;
  no: number;
  group: string;
  name: string;
  phoneNumber: string;
  email: string;
}

export default function SelectPerson({ open, onClose }: SelectPersonProps) {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
    onClose();
  };

  // 그룹 데이터 생성
  const generatePersonData = (): PersonData[] => {
    return [
      {
        checkbox: false,
        no: 1,
        group: '',
        name: '',
        phoneNumber: '',
        email: '',
      },
      {
        checkbox: false,
        no: 2,
        group: '',
        name: '',
        phoneNumber: '',
        email: '',
      },
      {
        checkbox: false,
        no: 3,
        group: '',
        name: '',
        phoneNumber: '',
        email: '',
      },
      {
        checkbox: false,
        no: 4,
        group: '',
        name: '',
        phoneNumber: '',
        email: '',
      },
      {
        checkbox: false,
        no: 5,
        group: '',
        name: '',
        phoneNumber: '',
        email: '',
      },
    ];
  };

  const personData = generatePersonData();

  // 테이블 컬럼 정의
  const columns: TabulatorColumn[] = [
    {
      title: '',
      field: 'checkbox',
      width: 60,
    },
    {
      title: 'NO',
      field: 'no',
      width: 60,
    },
    {
      title: 'Group',
      field: 'group',
      minWidth: 100,
    },
    {
      title: 'Name',
      field: 'name',
      minWidth: 140,
    },
    {
      title: 'Phone Number',
      field: 'phoneNumber',
      minWidth: 210,
    },
    {
      title: 'Email',
      field: 'email',
    },
  ];

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={() => form.submit()}
      title="Select Contact Person"
      size="default"
      confirmText="Register"
      cancelText="Cancel"
      confirmIcon={<CheckCircleFilled />}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Space direction="vertical" size={20} className="w-full">
          <Form.Item name="group" label="Group" className="w-[190px]">
            <Select placeholder="">
              <Select.Option value="">select</Select.Option>
            </Select>
          </Form.Item>
        </Space>
      </Form>

      <div className="mt-4">
        <TabulatorTable
          data={personData}
          columns={columns}
          config={{
            layout: 'fitColumns',
            height: '260px',
            showFooter: true,
          }}
        />
      </div>
    </Modal>
  );
}
