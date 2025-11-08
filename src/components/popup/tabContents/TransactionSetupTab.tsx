'use client';
import { useState, useEffect } from 'react';
import { Form, Input, Select, Button, InputNumber, Segmented, Radio, Switch } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import Image from 'next/image';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';
// 그룹 데이터 타입
interface CustomerData extends TabulatorData {
  number: number;
  aid: string;
  brandName: string;
  status: string;
}

export default function TransactionSetupTab() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [switchStates, setSwitchStates] = useState<{ [key: string]: boolean }>({});
  const [form] = Form.useForm();
  const toggleContent = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleSave = (values: unknown) => {
    console.log('Transaction Setup saved:', values);
  };

  const handleSwitchChange = (rowId: string, checked: boolean) => {
    setSwitchStates((prev) => ({
      ...prev,
      [rowId]: checked,
    }));
  };

  // 스위치 클릭 이벤트 리스너 추가
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const switchBtn = target.closest('.custom-switch');
      if (switchBtn) {
        const rowId = switchBtn.getAttribute('data-row-id');
        if (rowId) {
          const currentState = switchStates[rowId] || false;
          handleSwitchChange(rowId, !currentState);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [switchStates]);

  // 그룹 데이터 생성 (1줄 예시)
  const generateCustomerData = (): CustomerData[] => {
    return [
      {
        number: 1,
        aid: 'A0000000980840',
        brandName: 'US VISA',
        status: '',
      },
      {
        number: 2,
        aid: 'A0000000042203',
        brandName: 'US MAESTRO',
        status: '',
      },
      {
        number: 3,
        aid: 'A000000333010108',
        brandName: 'US UnionPay',
        status: '',
      },
      {
        number: 4,
        aid: 'A00000001524010',
        brandName: 'US DISCOVER',
        status: '',
      },
    ];
  };

  const customerData = generateCustomerData();

  // 테이블 컬럼 정의
  const columns: TabulatorColumn[] = [
    {
      title: 'Index',
      field: 'number',
      width: 80,
    },
    {
      title: 'AID',
      field: 'aid',
      width: 300,
    },
    {
      title: 'Brand Name',
      field: 'brandName',
      minWidth: 240,
    },
    {
      title: '',
      field: 'status',
      width: 100,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: (cell: any) => {
        const rowData = cell.getRow().getData();
        const rowId = `row-${rowData.number}`;
        const isChecked = switchStates[rowId] || false;
        return `
          <button class="custom-switch ${isChecked ? 'checked' : ''}" data-row-id="${rowId}">
            <span class="switch-slider"></span>
          </button>
        `;
      },
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
      title: 'Amount Range',
      field: 'amountRange',
      width: 330,
    },
    {
      title: 'Surcharge',
      field: 'surcharge',
      width: 200,
    },
    {
      title: '',
      field: 'status',
      width: 110,
      hozAlign: 'center',
      formatter: () => {
        return `<button class="ant-btn ant-btn-danger !text-red-500">Delete</button>`;
      },
    },
  ];
  const customerData01: {
    number: number;
    amountRange: string;
    surcharge: number;
    status: string;
  }[] = [
    {
      number: 1,
      amountRange: '30-60',
      surcharge: 5,
      status: '',
    },
    {
      number: 2,
      amountRange: '61-100',
      surcharge: 10,
      status: '',
    },
    {
      number: 3,
      amountRange: '101-200',
      surcharge: 15,
      status: '',
    },
    {
      number: 4,
      amountRange: '201-300',
      surcharge: 20,
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
            Transaction Setup
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
              <p className="pl-2.5 mb-1.5">Dispense Limit</p>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Currency ID" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="USD"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="" label="Max count (notes)" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="50"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="" label="Max amount ($)" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="200"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
              </div>
              <p className="pl-2.5 mb-1.5 mt-2.5">Fast Cash</p>
              <div className="rounded-lg bg-gray-100 p-2.5 flex justify-between gap-10">
                <div className="flex-grow">
                  <Form.Item name="" label="ID1" className="!p-0">
                    <div className="form-right-auto">
                      <Input
                        defaultValue="10"
                        placeholder=""
                        className="!w-40 !text-center !border-black"
                      />
                    </div>
                  </Form.Item>
                  <hr className="my-1.5" />
                  <Form.Item name="" label="ID2" className="!p-0">
                    <div className="form-right-auto">
                      <Input
                        defaultValue="20"
                        placeholder=""
                        className="!w-40 !text-center !border-black"
                      />
                    </div>
                  </Form.Item>
                  <hr className="my-1.5" />
                  <Form.Item name="" label="ID3" className="!p-0">
                    <div className="form-right-auto">
                      <Input
                        defaultValue="40"
                        placeholder=""
                        className="!w-40 !text-center !border-black"
                      />
                    </div>
                  </Form.Item>
                  <hr className="my-1.5" />
                  <Form.Item name="" label="ID4" className="!p-0">
                    <div className="form-right-auto">
                      <Input
                        defaultValue="60"
                        placeholder=""
                        className="!w-40 !text-center !border-black"
                      />
                    </div>
                  </Form.Item>
                </div>
                <div className="flex-grow">
                  <Form.Item name="" label="ID5" className="!p-0">
                    <div className="form-right-auto">
                      <Input
                        defaultValue="80"
                        placeholder=""
                        className="!w-40 !text-center !border-black"
                      />
                    </div>
                  </Form.Item>
                  <hr className="my-1.5" />
                  <Form.Item name="" label="ID6" className="!p-0">
                    <div className="form-right-auto">
                      <Input
                        defaultValue="100"
                        placeholder=""
                        className="!w-40 !text-center !border-black"
                      />
                    </div>
                  </Form.Item>
                  <hr className="my-1.5" />
                  <Form.Item name="" label="ID7" className="!p-0">
                    <div className="form-right-auto">
                      <Input
                        defaultValue="200"
                        placeholder=""
                        className="!w-40 !text-center !border-black"
                      />
                    </div>
                  </Form.Item>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Host 2 */}
        <div className={`tab-content-item ${activeIndex === 2 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(2)}>
            EMV Option
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
                <Form.Item name="" label="US Common AID" className="!p-0">
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
                <Form.Item name="" label="US Territories Option" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="US Main Land & Hawaii"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="" label="Fallback" className="!p-0">
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
                <Form.Item name="" label="Tatal Count" className="!p-0">
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
                data={customerData}
                columns={columns}
                className="table-modal"
                config={
                  {
                    showFooter: false,
                    layout: 'fitColumns',
                    htmlOutput: true,
                  } as never
                }
              />
            </div>
          )}
        </div>

        {/* Host 3 */}
        <div className={`tab-content-item ${activeIndex === 3 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(3)}>
            Transaction Option
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
              <p className="pl-2.5 mb-1.5">Transaction</p>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Balance Inquiry" className="!p-0">
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
                <Form.Item name="" label="Pre-Check Transaction" className="!p-0">
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
                <Form.Item name="" label="Dual-Check Transaction" className="!p-0">
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
                <Form.Item name="" label="Transfer" className="!p-0">
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
              <p className="pl-2.5 mb-1.5 mt-2.5">Optional Funtion</p>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Receipt Select" className="!p-0">
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
                <Form.Item name="" label="Need More Time" className="!p-0">
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
                <Form.Item name="" label="Out Serviec In CDM ERR" className="!p-0">
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

        {/* Host 4 */}
        <div className={`tab-content-item ${activeIndex === 4 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(4)}>
            Language
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
              <div className="rounded-lg bg-gray-100 p-2.5 flex justify-between gap-10">
                <div className="flex-grow">
                  <Form.Item name="" label="English" className="!p-0">
                    <div className="form-right-auto">
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
                  <Form.Item name="" label="French" className="!p-0">
                    <div className="form-right-auto">
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
                <div className="flex-grow">
                  <Form.Item name="" label="Spanish" className="!p-0">
                    <div className="form-right-auto">
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
            </div>
          )}
        </div>

        {/* Host 5 */}
        <div className={`tab-content-item ${activeIndex === 5 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(5)}>
            Account
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
                <Form.Item name="" label="Saving" className="!p-0">
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
                <Form.Item name="" label="Credit card" className="!p-0">
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

        {/* Host 6 */}
        <div className={`tab-content-item ${activeIndex === 6 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(6)}>
            Surcharge
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
                <Form.Item name="" label="Surcharge Type" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="Fixed Amount"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="" label="Amount ($)" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="3.35"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
                <hr className="my-1.5" />
                <Form.Item name="" label="Percent (%)" className="!p-0">
                  <div className="form-right">
                    <Input
                      defaultValue="3.50"
                      placeholder=""
                      className="!w-50 !text-center !border-black"
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="rounded-lg bg-gray-100 p-2.5">
                <Form.Item name="" label="Fee owner" className="lable-center">
                  <div className="form-right">
                    <div className="text-xs text-gray-500 flex gap-5 font-medium mb-1">
                      up to 20 characters
                      <span>
                        <span className="text-black">0</span>/20
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
            Tiered Surcharge
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
                <Form.Item name="" label="Tiered Surcharge" className="!p-0">
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

        {/* Host 8 */}
        <div className={`tab-content-item ${activeIndex === 8 ? 'active' : ''}`}>
          <button className="tab-item-btn" onClick={() => toggleContent(8)}>
            Credit Card Add. Surcharge
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
              <div className="rounded-lg bg-gray-100 p-2.5 flex flex-col justify-between gap-7.5">
                <Form.Item name="" label="Credit Card Add. Surcharge" className="!p-0">
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
                <Form.Item name="form-15" label="Amount" initialValue="$1" className="!p-0">
                  <Radio.Group className="setup-radio">
                    <Radio value="$1">$1</Radio>
                    <Radio value="$2">$2</Radio>
                    <Radio value="$3">$3</Radio>
                    <Radio value="$4">$4</Radio>
                    <Radio value="$5">$5</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>
          )}
        </div>
      </div>
    </Form>
  );
}
