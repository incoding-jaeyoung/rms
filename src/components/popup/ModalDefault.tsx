'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Select, DatePicker, Radio, Checkbox } from 'antd';

const { TextArea } = Input;

interface ModalDefaultProps {
  open: boolean;
  onClose: () => void;
}

export default function ModalDefault({ open, onClose }: ModalDefaultProps) {
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
      title="커스텀 폼 예시"
      size="default"
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* 기본 입력 */}
        <Form.Item name="name" label="이름">
          <Input placeholder="이름을 입력하세요" />
        </Form.Item>

        {/* 이메일 */}
        <Form.Item name="email" label="이메일">
          <Input type="email" placeholder="email@example.com" />
        </Form.Item>
        <Form.Item name="newPassword" label="비밀번호">
          <Input.Password placeholder="" />
        </Form.Item>
        {/* 셀렉트 박스 */}
        <Form.Item name="role" label="역할">
          <Select
            placeholder="역할을 선택하세요"
            options={[
              { label: '관리자', value: 'admin' },
              { label: '사용자', value: 'user' },
              { label: '게스트', value: 'guest' },
            ]}
          />
        </Form.Item>

        {/* 날짜 선택 */}
        <Form.Item name="startDate" label="시작일">
          <DatePicker className="w-full" placeholder="날짜 선택" />
        </Form.Item>

        {/* 라디오 버튼 */}
        <Form.Item name="status" label="상태">
          <Radio.Group>
            <Radio value="active">활성</Radio>
            <Radio value="inactive">비활성</Radio>
            <Radio value="pending">대기</Radio>
          </Radio.Group>
        </Form.Item>

        {/* 체크박스 */}
        <Form.Item name="notifications" valuePropName="checked">
          <Checkbox>알림 수신</Checkbox>
        </Form.Item>

        {/* 텍스트 영역 */}
        <Form.Item name="notes" label="메모">
          <TextArea rows={4} placeholder="메모를 입력하세요" />
        </Form.Item>

        {/* 2컬럼 레이아웃 예시 */}
        <div className="grid grid-cols-2 gap-4">
          <Form.Item name="firstName" label="성">
            <Input placeholder="성" />
          </Form.Item>
          <Form.Item name="lastName" label="이름">
            <Input placeholder="이름" />
          </Form.Item>
        </div>

        {/* 전화번호 3분할 예시 */}
        <Form.Item label="전화번호">
          <div className="flex gap-2">
            <Form.Item name={['phone', 'part1']} noStyle>
              <Input className="w-20 text-center" placeholder="010" maxLength={3} />
            </Form.Item>
            <span>-</span>
            <Form.Item name={['phone', 'part2']} noStyle>
              <Input className="w-20 text-center" placeholder="1234" maxLength={4} />
            </Form.Item>
            <span>-</span>
            <Form.Item name={['phone', 'part3']} noStyle>
              <Input className="w-20 text-center" placeholder="5678" maxLength={4} />
            </Form.Item>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}
