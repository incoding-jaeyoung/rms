'use client';
import { useState } from 'react';
import {
  Form,
  Input,
  Select,
  Button,
  InputNumber,
  Segmented,
  Radio,
  DatePicker,
  TimePicker,
} from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import Image from 'next/image';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';

// 그룹 데이터 타입
interface SystemData extends TabulatorData {
  checkbox: boolean;
  ip: string;
}

export default function SystemSetupTab() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [form] = Form.useForm();
  const toggleContent = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleSave = (values: unknown) => {
    console.log('Host Setup saved:', values);
  };

  // 그룹 데이터 생성
  const generateSystemData = (): SystemData[] => {
    return [
      {
        checkbox: false,
        ip: '192.168.28.74',
      },
      {
        checkbox: false,
        ip: '192.168.28.74',
      },
      {
        checkbox: false,
        ip: '192.168.28.74',
      },
      {
        checkbox: false,
        ip: '192.168.28.74',
      },
    ];
  };

  const systemData = generateSystemData();

  // 테이블 컬럼 정의
  const columns: TabulatorColumn[] = [
    {
      title: '',
      field: 'checkbox',
      width: 60,
    },
    {
      title: 'IP',
      field: 'ip',
    },
  ];

  return (
    <Form form={form} onFinish={handleSave}>
      <div className="flex justify-between items-center mb-2">
        <p className="flex items-center gap-1.5">
          <InfoCircleFilled />
          Please save your changes before clicking &quot;Preview Changes&quot;
        </p>
        <Button type="default" htmlType="submit">
          Save
        </Button>
      </div>
      <div className="tab-content-container">
        {/* Host 1 */}
        <div className={`tab-content-item ${activeIndex === 1 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(1)}>
            System Setup
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 1 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 1 && (
            <div className="tab-item-content gap-2.5">
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Serial No." className="!p-0">
                  <div className="form-right-auto">
                    <Input
                      defaultValue=""
                      placeholder=""
                      className="!w-[560px] !text-center !border-black"
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Sequence No." className="!p-0">
                  <div className="form-right-auto">
                    <Input
                      defaultValue="0037"
                      placeholder=""
                      className="!w-[560px] !text-center !border-black"
                    />
                  </div>
                </Form.Item>
              </div>
            </div>
          )}
        </div>

        {/* Host 2 */}
        <div className={`tab-content-item ${activeIndex === 2 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(2)}>
            OM Entry Settings
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 2 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 2 && (
            <div className="tab-item-content">
              <p className="pl-2.5 mb-1.5">OM(Operation Mode) Entry Option</p>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Enter PIN" className="!p-0">
                  <div className="form-right">
                    <Segmented
                      defaultValue="disable"
                      options={[
                        { label: 'Disable', value: 'disable' },
                        { label: 'Enable', value: 'enable' },
                      ]}
                      className="custom-segmented"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="" label="Door Open" className="!p-0">
                  <div className="form-right">
                    <Segmented
                      defaultValue="disable"
                      options={[
                        { label: 'Disable', value: 'disable' },
                        { label: 'Enable', value: 'enable' },
                      ]}
                      className="custom-segmented"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="" label="Operator Switch" className="!p-0">
                  <div className="form-right">
                    <Segmented
                      defaultValue="disable"
                      options={[
                        { label: 'Disable', value: 'disable' },
                        { label: 'Enable', value: 'enable' },
                      ]}
                      className="custom-segmented"
                    />
                  </div>
                </Form.Item>
              </div>
              <p className="pl-2.5 mb-1.5 mt-2.5">Auto In Service</p>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Enable" className="!p-0">
                  <div className="form-right">
                    <Segmented
                      defaultValue="disable"
                      options={[
                        { label: 'Disable', value: 'disable' },
                        { label: 'Enable', value: 'enable' },
                      ]}
                      className="custom-segmented"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="" label="IdleTime (minute)" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="10"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
              </div>
            </div>
          )}
        </div>

        {/* Host 3 */}
        <div className={`tab-content-item ${activeIndex === 3 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(3)}>
            Terminal IP
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 3 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 3 && (
            <div className="tab-item-content gap-2.5">
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="IP" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="192.168.28.74"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="" label="Subnet Mask" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="255.255.255.0"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="" label="Gateway" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="192.168.28.1"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="" label="DNS" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="164.124.101.2"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="" label="EnableDHCP" className="!p-0">
                  <div className="form-right">
                    <Segmented
                      defaultValue="disable"
                      options={[
                        { label: 'Disable', value: 'disable' },
                        { label: 'Enable', value: 'enable' },
                      ]}
                      className="custom-segmented"
                    />
                  </div>
                </Form.Item>
              </div>
              <TabulatorTable
                data={systemData}
                columns={columns}
                className="table-modal"
                config={{
                  showFooter: false,
                  layout: 'fitColumns',
                }}
              />
            </div>
          )}
        </div>

        {/* Host 4 */}
        <div className={`tab-content-item ${activeIndex === 4 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(4)}>
            Device Set
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 4 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 4 && (
            <div className="tab-item-content gap-2.5">
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Receipt Print" className="!p-0">
                  <div className="form-right">
                    <Segmented
                      defaultValue="disable"
                      options={[
                        { label: 'Disable', value: 'disable' },
                        { label: 'Enable', value: 'enable' },
                      ]}
                      className="custom-segmented"
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Cash Acceptor" className="!p-0">
                  <div className="form-right">
                    <Segmented
                      defaultValue="disable"
                      options={[
                        { label: 'Disable', value: 'disable' },
                        { label: 'Enable', value: 'enable' },
                      ]}
                      className="custom-segmented"
                    />
                  </div>
                </Form.Item>
              </div>
            </div>
          )}
        </div>

        {/* Host 5 */}
        <div className={`tab-content-item ${activeIndex === 5 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(5)}>
            Date & Time
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 5 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 5 && (
            <div className="tab-item-content gap-2.5">
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Sync.Host Date & Time" className="!p-0">
                  <div className="form-right">
                    <Segmented
                      defaultValue="disable"
                      options={[
                        { label: 'Disable', value: 'disable' },
                        { label: 'Enable', value: 'enable' },
                      ]}
                      className="custom-segmented"
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Date" className="!p-0">
                  <div className="form-right">
                    <DatePicker format="MM-DD-YYYY" className="!w-50 !text-center !border-black" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Time" className="!p-0">
                  <div className="form-right">
                    <TimePicker format="HH:mm" className="!w-50 !text-center !border-black" />
                  </div>
                </Form.Item>
              </div>
            </div>
          )}
        </div>

        {/* Host 6 */}
        <div className={`tab-content-item ${activeIndex === 6 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(6)}>
            Adjust volume
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 6 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 6 && (
            <div className="tab-item-content gap-2.5">
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Receipt Print" className="lable-center">
                  <div className="adjust-volume ">
                    <button className="minus">
                      <Image src="/icons/ico-minus.svg" alt="minus" width={12} height={2} />
                    </button>
                    {/* <Input placeholder="" className="!w-25 !text-right !border-black" /> */}
                    <InputNumber
                      defaultValue={15}
                      placeholder="Enter minutes"
                      className="!w-25 !border-black"
                      min={1}
                      max={999}
                      controls={false}
                    />
                    <button className="plus">
                      <Image src="/icons/ico-plus.svg" alt="plus" width={20} height={20} />
                    </button>
                  </div>
                </Form.Item>
              </div>
            </div>
          )}
        </div>
      </div>
    </Form>
  );
}
