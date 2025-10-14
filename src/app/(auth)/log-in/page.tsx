'use client';
import { Form, Input, Checkbox, Button } from 'antd';

export default function LoginPage() {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log('Login form values:', values);
  };

  return (
    <div className="login-page">
      <h1>
        <img src="/images/img-logo-login.png" alt="ATEC" />
      </h1>
      <dl>
        <dt>Start managing your terminals</dt>
        <dd>Securely manage your terminals anytime, anywhere</dd>
      </dl>
      <div className="login-form">
        <Form form={form} layout="vertical" onFinish={handleSubmit} className="">
          {/* Username Field */}
          <Form.Item name="username" label="Username">
            <Input placeholder="Enter your Email" size="large" className="rounded-2xl h-[54px]" />
          </Form.Item>

          {/* Password Field */}
          <Form.Item name="password" label="Password" className="!mt-5">
            <Input.Password placeholder="" size="large" className="rounded-2xl h-[54px]" />
          </Form.Item>

          {/* Remember Me Checkbox */}
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>
              <span className="text-[#5A6670] text-sm">Remember me</span>
            </Checkbox>
          </Form.Item>
          <p className="caution-msg">
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
      <div className="login-footer">
        <p className="copyright">© ATEC. All right reserved.</p>
        <p>Built for smarter, sater terminal management</p>
      </div>
    </div>
  );
}
