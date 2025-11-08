'use client';
import { useState } from 'react';
import { Form, Input, Select, Button, InputNumber, Segmented, Radio } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import Image from 'next/image';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';

// 그룹 데이터 타입
interface CustomerData extends TabulatorData {
  checkbox: boolean;
  name: string;
  type: string;
  playTime: string;
  expireDate: string;
  status: string;
}

export default function CustomerSetupTab() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [form] = Form.useForm();
  const toggleContent = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleSave = (values: unknown) => {
    console.log('Host Setup saved:', values);
  };

  // 그룹 데이터 생성 (1줄 예시)
  const generateCustomerData = (): CustomerData[] => {
    return [
      {
        checkbox: false,
        name: 'AD1.jpg',
        type: 'JPG',
        playTime: '5',
        expireDate: '20251231',
        status: '',
      },
      {
        checkbox: false,
        name: 'AD1.jpg',
        type: 'JPG',
        playTime: '5',
        expireDate: '20251231',
        status: '',
      },
      {
        checkbox: false,
        name: 'AD1.jpg',
        type: 'JPG',
        playTime: '5',
        expireDate: '20251231',
        status: '',
      },
      {
        checkbox: false,
        name: 'AD1.jpg',
        type: 'JPG',
        playTime: '5',
        expireDate: '20251231',
        status: '',
      },
    ];
  };

  const customerData = generateCustomerData();

  // 테이블 컬럼 정의
  const columns: TabulatorColumn[] = [
    {
      title: '',
      field: 'checkbox',
      width: 60,
    },
    {
      title: 'Name',
      field: 'name',
      width: 160,
    },
    {
      title: 'Type',
      field: 'type',
      minWidth: 140,
    },
    {
      title: 'PlayTime',
      field: 'playTime',
      width: 120,
    },
    {
      title: 'ExpireDate',
      field: 'expireDate',
      width: 140,
    },
    {
      title: '',
      field: 'status',
      width: 100,
      formatter: () => {
        return `<button class="ant-btn ant-btn-danger !text-red-500">Delete</button>`;
      },
      headerSort: false,
      hozAlign: 'center',
    },
  ];

  const columns01: TabulatorColumn[] = [
    {
      title: 'Index',
      field: 'number',
      width: 80,
    },
    {
      title: 'BIN',
      field: 'bin',
      width: 530,
    },
    {
      title: '',
      field: 'status',
      width: 110,
      formatter: () => {
        return `<button class="ant-btn ant-btn-danger !text-red-500">Delete</button>`;
      },
      headerSort: false,
      hozAlign: 'center',
    },
  ];
  const customerData01: { number: number; bin: string; status: string }[] = [
    {
      number: 1,
      bin: '444444',
      status: '',
    },
    {
      number: 1,
      bin: '444444',
      status: '',
    },
    {
      number: 1,
      bin: '444444',
      status: '',
    },
    {
      number: 1,
      bin: '444444',
      status: '',
    },
    {
      number: 1,
      bin: '444444',
      status: '',
    },
    {
      number: 1,
      bin: '444444',
      status: '',
    },
  ];
  const customerData02: { number: number; bin: string; status: string }[] = [
    {
      number: 1,
      bin: '1234',
      status: '',
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
            Advertisement
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
                <Form.Item name="form-01" label="Enable" className="!p-0">
                  <div className="form-right">
                    <Segmented
                      defaultValue="enable"
                      options={[
                        { label: 'Disable', value: 'disable' },
                        { label: 'Enable', value: 'enable' },
                      ]}
                      className="custom-segmented"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="form-02" label="Repository" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="D:/ezARETE/AD"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
              </div>
              <TabulatorTable
                data={customerData}
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

        {/* Host 2 */}
        <div className={`tab-content-item ${activeIndex === 2 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(2)}>
            Surcharge-free BIN List
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 2 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 2 && (
            <div className="tab-item-content gap-2.5">
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="form-03" label="Enable" className="!p-0">
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
                <Form.Item name="form-04" label="Repository" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="18"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
              </div>
              <TabulatorTable
                data={customerData01}
                columns={columns01}
                className="table-modal"
                config={{
                  showFooter: false,
                  layout: 'fitDataFill',
                }}
              />
            </div>
          )}
        </div>

        {/* Host 3 */}
        <div className={`tab-content-item ${activeIndex === 3 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(3)}>
            Blocked BIN List
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
                <Form.Item name="form-05" label="Blocked BIN List" className="!p-0">
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
                <Form.Item name="form-06" label="Total Count" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="1"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
              </div>
              <TabulatorTable
                data={customerData02}
                columns={columns01}
                className="table-modal"
                config={{
                  showFooter: false,
                  layout: 'fitDataFill',
                }}
              />
            </div>
          )}
        </div>

        {/* Host 4 */}
        <div className={`tab-content-item ${activeIndex === 4 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(4)}>
            Message
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 4 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 4 && (
            <div className="tab-item-content">
              <div className="rounded-lg bg-gray-100 p-2.5 flex flex-col items-center justify-center">
                <dl className="modal-message">
                  <dt>Receipt Format</dt>
                  <dd>Receipt Header1</dd>
                  <dd>Receipt Header2</dd>
                  <dd>Store Header1</dd>
                  <dd>Store Header2</dd>
                  <dd>Store Header3</dd>
                  <dd>Store Header4</dd>
                </dl>
                <dl className="modal-message">
                  <dt>Receipt Data</dt>
                  <dd>Marketing Message1</dd>
                  <dd>Marketing Message2</dd>
                  <dd>Marketing Message3</dd>
                  <dd>Marketing Message4</dd>
                </dl>
                <dl className="modal-message">
                  <dt>Receipt Tail</dt>
                </dl>
              </div>
            </div>
          )}
        </div>

        {/* Host 5 */}
        <div className={`tab-content-item ${activeIndex === 5 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(5)}>
            Welcome
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
                <Form.Item name="form-07" label="Line1" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 30 characters
                      <span>
                        <span className="text-black">0</span>/30
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="form-08" label="Line2" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 30 characters
                      <span>
                        <span className="text-black">0</span>/30
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="form-09" label="Line3" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 30 characters
                      <span>
                        <span className="text-black">0</span>/30
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
            </div>
          )}
        </div>

        {/* Host 6 */}
        <div className={`tab-content-item ${activeIndex === 6 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(6)}>
            Exit
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
                <Form.Item name="" label="Line1" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 30 characters
                      <span>
                        <span className="text-black">0</span>/30
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line2" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 30 characters
                      <span>
                        <span className="text-black">0</span>/30
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line3" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 30 characters
                      <span>
                        <span className="text-black">0</span>/30
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
            </div>
          )}
        </div>

        {/* Host 7 */}
        <div className={`tab-content-item ${activeIndex === 7 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(7)}>
            Store
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 7 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 7 && (
            <div className="tab-item-content gap-2.5">
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line1" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 40 characters
                      <span>
                        <span className="text-black">0</span>/40
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line2" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 40 characters
                      <span>
                        <span className="text-black">0</span>/40
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line3" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 40 characters
                      <span>
                        <span className="text-black">0</span>/40
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
            </div>
          )}
        </div>

        {/* Host 8 */}
        <div className={`tab-content-item ${activeIndex === 8 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(8)}>
            Marketing
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 8 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 8 && (
            <div className="tab-item-content gap-2.5">
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line1" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 40 characters
                      <span>
                        <span className="text-black">0</span>/40
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line2" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 40 characters
                      <span>
                        <span className="text-black">0</span>/40
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line3" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 40 characters
                      <span>
                        <span className="text-black">0</span>/40
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
            </div>
          )}
        </div>

        {/* Host 9 */}
        <div className={`tab-content-item ${activeIndex === 9 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(9)}>
            Receipt Header & Tail
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 9 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 9 && (
            <div className="tab-item-content gap-2.5">
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line1" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 40 characters
                      <span>
                        <span className="text-black">0</span>/40
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line2" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 40 characters
                      <span>
                        <span className="text-black">0</span>/40
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line3" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 40 characters
                      <span>
                        <span className="text-black">0</span>/40
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
            </div>
          )}
        </div>

        {/* Host 10 */}
        <div className={`tab-content-item ${activeIndex === 10 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(10)}>
            Coupon
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 10 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 10 && (
            <div className="tab-item-content gap-2.5">
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="form-11" label="Blocked BIN List" className="!p-0">
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
                <Form.Item name="form-12" label="Total Count" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="1"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line1" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 40 characters
                      <span>
                        <span className="text-black">0</span>/40
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line2" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 40 characters
                      <span>
                        <span className="text-black">0</span>/40
                      </span>
                    </div>
                    <Input placeholder="" />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Line3" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 40 characters
                      <span>
                        <span className="text-black">0</span>/40
                      </span>
                    </div>
                    <Input placeholder="" />
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
