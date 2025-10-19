'use client';

import { Card, Space, Typography } from 'antd';
import FooterMobile from '@/components/layout/FooterMobile';

const { Title, Text } = Typography;

export default function FooterPage() {
  return (
    <div className="p-6">
      <Title level={2}>Footer Components</Title>
      <Text type="secondary">모바일 푸터 컴포넌트 예시</Text>

      <div className="mt-6">
        <Card title="Footer Mobile" className="mb-4">
          <Space direction="vertical" size="large" className="w-full">
            <div>
              <Text strong>기본 푸터:</Text>
              <div className="mt-2 border rounded-lg">
                <FooterMobile />
              </div>
            </div>
          </Space>
        </Card>
      </div>
    </div>
  );
}
