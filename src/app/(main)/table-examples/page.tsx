'use client';

import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';

// 제품 데이터 타입
interface ProductData extends TabulatorData {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'available' | 'out_of_stock' | 'discontinued';
}

// 주문 데이터 타입
interface OrderData extends TabulatorData {
  orderId: string;
  customer: string;
  product: string;
  quantity: number;
  total: number;
  date: string;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
}

export default function TableExamplesPage() {
  // 제품 테이블 컬럼 정의
  const productColumns: TabulatorColumn[] = [
    {
      title: 'ID',
      field: 'id',
      width: 80,
    },
    {
      title: '제품명',
      field: 'name',
      width: 200,
    },
    {
      title: '카테고리',
      field: 'category',
      width: 120,
    },
    {
      title: '가격',
      field: 'price',
      width: 100,
    },
    {
      title: '재고',
      field: 'stock',
      width: 80,
    },
    {
      title: '상태',
      field: 'status',
    },
  ];

  // 주문 테이블 컬럼 정의
  const orderColumns: TabulatorColumn[] = [
    {
      title: '주문번호',
      field: 'orderId',
      width: 120,
    },
    {
      title: '고객명',
      field: 'customer',
      width: 150,
    },
    {
      title: '제품',
      field: 'product',
      width: 200,
    },
    {
      title: '수량',
      field: 'quantity',
      width: 80,
    },
    {
      title: '총액',
      field: 'total',
      width: 100,
    },
    {
      title: '주문일',
      field: 'date',
      width: 120,
    },
    {
      title: '상태',
      field: 'status',
    },
  ];

  // 제품 데이터 생성
  const generateProductData = (): ProductData[] => {
    const categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Sports'];
    const names = [
      'Laptop',
      'Smartphone',
      'Tablet',
      'Headphones',
      'Camera',
      'Watch',
      'Shoes',
      'Book',
    ];
    const statuses: ('available' | 'out_of_stock' | 'discontinued')[] = [
      'available',
      'out_of_stock',
      'discontinued',
    ];

    return Array.from({ length: 150 }, (_, index) => ({
      id: `P${String(index + 1).padStart(3, '0')}`,
      name: names[index % names.length] + ` ${index + 1}`,
      category: categories[index % categories.length],
      price: Math.floor(Math.random() * 1000) + 100,
      stock: Math.floor(Math.random() * 100),
      status: statuses[index % statuses.length],
    }));
  };

  // 주문 데이터 생성
  const generateOrderData = (): OrderData[] => {
    const customers = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'Tom Brown'];
    const products = ['Laptop Pro', 'Smartphone X', 'Tablet Air', 'Headphones Pro', 'Camera DSLR'];
    const statuses: ('pending' | 'shipped' | 'delivered' | 'cancelled')[] = [
      'pending',
      'shipped',
      'delivered',
      'cancelled',
    ];

    return Array.from({ length: 225 }, (_, index) => ({
      orderId: `ORD${String(index + 1).padStart(4, '0')}`,
      customer: customers[index % customers.length],
      product: products[index % products.length],
      quantity: Math.floor(Math.random() * 5) + 1,
      total: Math.floor(Math.random() * 1000) + 100,
      date: `2025-01-${String((index % 30) + 1).padStart(2, '0')}`,
      status: statuses[index % statuses.length],
    }));
  };

  const productData = generateProductData();
  const orderData = generateOrderData();

  return (
    <div className="contents">
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">테이블 기본 (fitDataFill)</h2>
          <TabulatorTable
            data={productData}
            columns={productColumns}
            config={{
              showFooter: true,
            }}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">테이블 레이아웃 (fitData)</h2>
          <TabulatorTable
            data={productData}
            columns={productColumns}
            config={{
              showFooter: true,
              layout: 'fitData',
            }}
          />
        </div>

        {/* 주문 테이블 - 푸터 없음 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">테이블 페이징 없음</h2>
          <TabulatorTable
            data={orderData}
            columns={orderColumns}
            config={{
              showFooter: false,
            }}
          />
        </div>

        {/* 데이터 없는 테이블 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">데이터 없는 테이블</h2>
          <TabulatorTable
            data={[]}
            columns={productColumns}
            config={{
              showFooter: false,
            }}
          />
        </div>

        {/* 사용법 안내 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">사용법</h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>테이블의 높이설정:</strong> 테이블의 최소높이는 400px로 설정, 테이블이 1개일시
              높이를 지정하지 않으면 페이지의 높이만큼 차지 하도록 설정
            </p>
            <p>
              <strong>테이블푸터:</strong> showFooter 속성을 통해 푸터 표시 여부 설정
            </p>
            <p>
              <strong>테이블 layout:</strong> fitData, fitColumns, fitDataFill, fitColumnsFill,
              fitDataTable, fitDataStretch 속성을 통해 테이블 레이아웃 설정
            </p>
            <p className="pl-5">
              <strong>fitColumns(기본):</strong> 테이블 너비를 컬럼의 너비에 맞춤
            </p>
            <p className="pl-5">
              <strong>fitData:</strong> 테이블 너비를 데이터의 너비에 맞춤
            </p>
            <p className="pl-5">
              <strong>fitDataFill:</strong> 테이블 너비를 데이터의 너비에 맞춤, 컬럼의 너비를
              초과하면 컬럼의 너비를 초과하는 부분은 스크롤바로 표시
            </p>
            <p className="pl-5">
              <strong>fitColumnsFill:</strong> 테이블 너비를 컬럼의 너비에 맞춤, 데이터의 너비를
              초과하면 데이터의 너비를 초과하는 부분은 스크롤바로 표시
            </p>
            <p className="pl-5">
              <strong>fitDataTable:</strong> 테이블 너비를 컬럼의 너비에 맞춤, 데이터의 너비를
              초과하면 데이터의 너비를 초과하는 부분은 스크롤바로 표시
            </p>
            <p className="pl-5">
              <strong>fitDataStretch:</strong> 테이블 너비를 데이터의 너비에 맞춤, 컬럼의 너비를
              초과하면 컬럼의 너비를 초과하는 부분은 스크롤바로 표시
            </p>
            <p>
              <strong>placeholder:</strong> placeholder 속성을 통해 데이터가 없을 때 표시되는 메시지
              설정
            </p>
            <div className="mt-4 p-3 bg-white rounded border">
              <code className="text-xs">
                {`<TabulatorTable
  data={data}
  columns={columns}
  config={{
    showFooter: true,
    layout: 'fitData',
    height: '500px',
    placeholder: 'No Data Available',
  }}
/>`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
