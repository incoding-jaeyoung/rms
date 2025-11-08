'use client';
import { useState } from 'react';
import { Form, Input, Select, Button, InputNumber, Segmented, Radio } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
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
              <Form.Item name="form-01" label="Terminal ID" className="">
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
              <Form.Item name="form-02" label="Status Monitoring">
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
              <hr />
              <Form.Item name="form-03" label="send interval(Minute)">
                <div className="form-right">
                  <InputNumber
                    defaultValue={60}
                    placeholder="Enter minutes"
                    className="!w-50 !text-center !border-black"
                    min={1}
                    max={999}
                    controls={false}
                  />
                </div>
              </Form.Item>
              <hr />
              <Form.Item name="form-04" label="CRC Check" initialValue="unknown">
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
              <Form.Item name="form-05" label="Key Block Format" initialValue="tripleDes">
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
              <Form.Item name="form-06" label="Status Monitoring">
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
              <hr />
              <Form.Item name="form-07" label="Communication Header">
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
              <hr />
              <Form.Item name="form-08" label="Communication ID" className="">
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
              <Form.Item name="form-09" label="CRC Check">
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
              <p className="text-sm font-bold ml-2.5">1st</p>
              <div className="rounded-md bg-gray-100 p-2.5">
                <Form.Item name="form-10" label="Host Address" className="!p-0">
                  <div className="form-right">
                    <Input defaultValue="192.168.0.1" className="text-center" />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="form-11" label="Host Port" className="!p-0">
                  <div className="form-right">
                    <InputNumber
                      defaultValue={8080}
                      className="text-center !w-full"
                      controls={false}
                    />
                  </div>
                </Form.Item>
              </div>
              <p className="text-sm font-bold mt-3 ml-2.5">2st</p>
              <div className="rounded-md bg-gray-100 p-2.5">
                <Form.Item name="form-12" label="Host Address" className="!p-0">
                  <div className="form-right">
                    <Input defaultValue="192.168.0.1" className="text-center" />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="form-13" label="Host Port" className="!p-0">
                  <div className="form-right">
                    <InputNumber
                      defaultValue={5643}
                      className="text-center !w-full"
                      controls={false}
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
            <div className="tab-item-content gap-2.5">
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="form-14" label="Enable Persist Connect" className="!p-0">
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
                <Form.Item name="form-15" label="Frame" initialValue="std" className="!p-0">
                  <Radio.Group className="setup-radio">
                    <Radio value="std">STD</Radio>
                    <Radio value="stdWithAck">STD(w/ACK)</Radio>
                  </Radio.Group>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="form-16" label="Timeout(ms)" className="!p-0">
                  <div className="form-right">
                    <InputNumber
                      defaultValue={3000}
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                      min={1}
                      max={99999}
                      controls={false}
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="form-17" label="Enable TSL" className="!p-0">
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
                <Form.Item name="form-18" label="Cert. Verification" className="!p-0">
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
              <div className="tslStatus">
                <h3>TLS Status</h3>
                <dl>
                  <dt>TLS Version</dt>
                  <dd>TLS 1.2</dd>
                </dl>
                <dl>
                  <dt>Verified Certificates</dt>
                  <dd>Unknown</dd>
                </dl>
              </div>
            </div>
          )}
        </div>
      </div>
    </Form>
  );
}
