import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

// 영어 로케일 설정
dayjs.locale('en');

export const antdConfig = {
  locale: enUS,
  theme: {
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 6,
    },
  },
};

export { ConfigProvider };
