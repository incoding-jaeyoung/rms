'use client';
import { Form, Input, Checkbox, Button } from 'antd';

export default function LoginPage() {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log('Login form values:', values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <Form form={form} layout="vertical" onFinish={handleSubmit} className="">
          {/* Username Field */}
          <Form.Item name="username" label="Username">
            <Input placeholder="atecrms@atec.co.kr" size="large" className="rounded-2xl h-[54px]" />
          </Form.Item>

          {/* Password Field */}
          <Form.Item name="password" label="Password" className="!mt-5">
            <Input.Password placeholder="" size="large" className="rounded-2xl h-[54px]" />
          </Form.Item>

          {/* Remember Me Checkbox */}
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>
              <span className="text-[#5A6670]">Remember me</span>
            </Checkbox>
          </Form.Item>
          <p className="caution-msgflex items-center gap-1 flex text-red-500 font-medium">
            <img src="/icons/ico-caution.svg" alt="warning" />
            <span>Invalid username or password</span>
          </p>
          {/* Login Button */}
          <Form.Item>
            <Button danger htmlType="submit" size="large" className="w-full !rounded-xl mt-4">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
