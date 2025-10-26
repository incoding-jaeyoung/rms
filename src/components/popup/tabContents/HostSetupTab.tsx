'use client';
import { useState } from 'react';
import { Form, Input, Select, Space, Button, InputNumber, Segmented, Radio } from 'antd';
import { InfoCircleFilled, DownOutlined } from '@ant-design/icons';
import Image from 'next/image';
export default function HostSetupTab() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [form] = Form.useForm();

  const toggleContent = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSave = (values: unknown) => {
    console.log('Host Setup saved:', values);
    // TODO: API 호출하여 데이터 저장
  };

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
            Host Setup
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 1 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 1 && (
            <div className="tab-item-content">
              <Form.Item name="" label="Terminal ID" className="">
                <div className="form-right">
                  <Input placeholder="Enter Terminal ID" className="text-right" />
                  <div className="text-xs text-gray-500 flex gap-5 font-medium mt-1">
                    up to 8 characters
                    <span>
                      <span className="text-black">7</span>/15
                    </span>
                  </div>
                </div>
              </Form.Item>
              <hr />
              <Form.Item name="statusMonitoring" label="Status Monitoring" initialValue="disable">
                <div className="form-right">
                  <Segmented
                    options={[
                      { label: 'Disable', value: 'disable' },
                      { label: 'Enable', value: 'enable' },
                    ]}
                    className="custom-segmented"
                  />
                </div>
              </Form.Item>
              <hr />
              <Form.Item name="sendInterval" label="send interval(Minute)">
                <div className="form-right">
                  <InputNumber
                    defaultValue={60}
                    placeholder="Enter minutes"
                    className="!w-50 !text-center"
                    min={1}
                    max={999}
                    controls={false}
                  />
                </div>
              </Form.Item>
              <hr />
              <Form.Item name="crcCheck" label="CRC Check" initialValue="unknown">
                <div className="form-right">
                  <Select placeholder="Select" className="!w-50 text-center">
                    <Select.Option value="unknown">Unknown</Select.Option>
                    <Select.Option value="cardtronics">Cardtronics</Select.Option>
                    <Select.Option value="columbus">Columbus Data</Select.Option>
                    <Select.Option value="asai">ASAI</Select.Option>
                    <Select.Option value="dns">DNS</Select.Option>
                  </Select>
                </div>
              </Form.Item>
              <div className="rounded-lg bg-gray-100 min-h-25 p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla debitis, fuga eum
                possimus ducimus ab sint, iste, pariatur rerum sequi esse praesentium molestias?
                Ipsa rem vero incidunt, optio placeat quos.
              </div>
            </div>
          )}
        </div>

        {/* Host 2 */}
        <div className={`tab-content-item ${activeIndex === 2 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(2)}>
            Key Management
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
              <Form.Item name="keyBlockFormat" label="Key Block Format" initialValue="tripleDes">
                <Radio.Group className="setup-radio">
                  <Radio value="tripleDes">Triple DES</Radio>
                  <Radio value="tr31">TR31</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          )}
        </div>

        {/* Host 3 */}
        <div className={`tab-content-item ${activeIndex === 3 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(3)}>
            STD3 Option
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 3 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 3 && (
            <div className="tab-item-content">
              <Form.Item name="" label="Status Monitoring" initialValue="disable">
                <div className="form-right">
                  <Segmented
                    options={[
                      { label: 'Disable', value: 'disable' },
                      { label: 'Enable', value: 'enable' },
                    ]}
                    className="custom-segmented"
                  />
                </div>
              </Form.Item>
              <hr />
              <Form.Item name="" label="Communication Header" initialValue="disable">
                <div className="form-right">
                  <Segmented
                    options={[
                      { label: 'Disable', value: 'disable' },
                      { label: 'Enable', value: 'enable' },
                    ]}
                    className="custom-segmented"
                  />
                </div>
              </Form.Item>
              <hr />
              <Form.Item name="" label="Communication ID" className="">
                <div className="form-right">
                  <Input placeholder="" className="text-right" />
                  <div className="text-xs text-gray-500 flex gap-5 font-medium mt-1">
                    up to 8 characters
                    <span>
                      <span className="text-black">7</span>/8
                    </span>
                  </div>
                </div>
              </Form.Item>
              <hr />
              <Form.Item name="" label="CRC Check" initialValue="disable">
                <div className="form-right">
                  <Segmented
                    options={[
                      { label: 'Disable', value: 'disable' },
                      { label: 'Enable', value: 'enable' },
                    ]}
                    className="custom-segmented"
                  />
                </div>
              </Form.Item>
            </div>
          )}
        </div>

        {/* Host 4 */}
        <div className={`tab-content-item ${activeIndex === 4 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(4)}>
            Processor Option
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
              <p className="text-sm font-bold">1st</p>
            </div>
          )}
        </div>

        {/* Host 5 */}
        <div className={`tab-content-item ${activeIndex === 5 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(5)}>
            TCP/IP Option
            <Image
              src="/icons/ico-arrow-drop.svg"
              alt="arrow-drop"
              width={20}
              height={20}
              className={`${activeIndex === 5 ? 'rotate-180 opacity-100' : 'opacity-50'}`}
            />
          </button>
          {activeIndex === 5 && (
            <div className="tab-item-content">
              <Space direction="vertical" size={20} className="w-full">
                <Form.Item name="terminalId3" label="Terminal ID">
                  <Input placeholder="Enter Terminal ID" />
                </Form.Item>
                <Form.Item name="location3" label="Location">
                  <Input placeholder="Enter Location" />
                </Form.Item>
                <Form.Item name="status3" label="Status">
                  <Select placeholder="Select Status">
                    <Select.Option value="active">Active</Select.Option>
                    <Select.Option value="inactive">Inactive</Select.Option>
                  </Select>
                </Form.Item>
              </Space>
            </div>
          )}
        </div>
      </div>
    </Form>
  );
}
