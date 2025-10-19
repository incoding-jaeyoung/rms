'use client';

import { Layout } from 'antd';

const FooterMobile: React.FC = () => {
  return (
    <Layout.Footer>
      <div className="mobile-footer">
        <h1>
          <img src="/images/img-logo-bottom.png" alt="ATEC" />
        </h1>
        <p className="mt-5 text-medium">© ATEC. All right reserved.</p>
        <p className="mt-0.5 text-xs">Built for smarter, safer terminal management</p>
      </div>
    </Layout.Footer>
  );
};

export default FooterMobile;
