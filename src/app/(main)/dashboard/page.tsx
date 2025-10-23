'use client';

import { useRef } from 'react';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';
import Link from 'next/link';
import { Select, Button } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

// ATM 데이터 타입
interface ATMData extends TabulatorData {
  no: number;
  dateTime: string;
  group: string;
  branch: string;
  model: string;
  terminalId: string;
  ip: string;
  module: string;
  errorCode: string;
  cassetteA: number;
  cassetteB: number;
  cassetteC: number;
  cassetteD: number;
  overflow: number;
  cassetteRjt: number;
}

export default function DashboardPage() {
  const swiperRef = useRef<SwiperType | null>(null);

  // ATM 더미 데이터 생성
  const generateATMData = (): ATMData[] => {
    const groups = ['Group A', 'Group B', 'Group C'];
    const branches = ['Main Branch', 'Downtown Branch', 'Subway Branch', 'Airport Branch'];
    const models = ['NCR 5878', 'Diebold 2020ix', 'Hyosung 7600i', 'Nautilus 22'];
    const modules = ['Cash Dispenser', 'Cash Recycler', 'Card Reader', 'Receipt Printer'];
    const errorCodes = ['E001', 'E002', 'E003', 'E004', 'E005', '-'];

    return Array.from({ length: 51 }, (_, index) => ({
      no: index + 1,
      dateTime: `2025-01-${String((index % 30) + 1).padStart(2, '0')} ${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
      group: groups[index % groups.length],
      branch: branches[index % branches.length],
      model: models[index % models.length],
      terminalId: `ATM${String(index + 1).padStart(4, '0')}`,
      ip: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
      module: modules[index % modules.length],
      errorCode: errorCodes[index % errorCodes.length],
      cassetteA: Math.floor(Math.random() * 1000),
      cassetteB: Math.floor(Math.random() * 1000),
      cassetteC: Math.floor(Math.random() * 1000),
      cassetteD: Math.floor(Math.random() * 1000),
      overflow: Math.floor(Math.random() * 500),
      cassetteRjt: Math.floor(Math.random() * 100),
    }));
  };

  const atmData = generateATMData();

  // 테이블 컬럼 정의
  const columns: TabulatorColumn[] = [
    {
      title: 'NO',
      field: 'no',
      minWidth: 60,
      hozAlign: 'center',
    },
    {
      title: 'Date & Time',
      field: 'dateTime',
      minWidth: 150,
    },
    {
      title: 'Group',
      field: 'group',
      minWidth: 100,
    },
    {
      title: 'Branch',
      field: 'branch',
      minWidth: 120,
    },
    {
      title: 'Model',
      field: 'model',
      minWidth: 120,
    },
    {
      title: 'Terminal ID',
      field: 'terminalId',
      minWidth: 100,
    },
    {
      title: 'IP',
      field: 'ip',
      minWidth: 130,
    },
    {
      title: 'Module',
      field: 'module',
      minWidth: 120,
    },
    {
      title: 'Error Code',
      field: 'errorCode',
      minWidth: 100,
      hozAlign: 'center',
    },
    {
      title: 'Cassette-A',
      field: 'cassetteA',
      minWidth: 100,
    },
    {
      title: 'Cassette-B',
      field: 'cassetteB',
      minWidth: 100,
    },
    {
      title: 'Cassette-C',
      field: 'cassetteC',
      minWidth: 100,
    },
    {
      title: 'Cassette-D',
      field: 'cassetteD',
      minWidth: 100,
    },
    {
      title: 'Overflow',
      field: 'overflow',
      minWidth: 100,
    },
    {
      title: 'Cassette-RJT',
      field: 'cassetteRjt',
      minWidth: 100,
    },
  ];

  return (
    <div className="contents">
      <div className="dashboard-top">
        <div className="overview">
          <div className="contents-header">
            <h2>ATM Overview</h2>
          </div>
          <div className="overview-card">
            <dl className="total">
              <dt>TOTAL</dt>
              <dd>128</dd>
            </dl>
            <ul className="services">
              <li>
                <dl>
                  <dt>IN-SERVICE</dt>
                  <dd>104</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>OUT OF SERVICE</dt>
                  <dd>16</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>POWER OFF</dt>
                  <dd>8</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>LOW CASH</dt>
                  <dd>7</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <div className="notice-list">
          <div className="contents-header">
            <h2>Notice</h2>
          </div>
          <ul className="notice-list-item">
            <li>
              <Link href="#">
                Planned Maintenance Notice Planned Maintenance Notice Planned Maintenance Notice
                Planned Maintenance Notice
              </Link>
              <span className="date">08/10/2025</span>
            </li>
            <li>
              <Link href="#">
                <span className="title">Planned Maintenance Notice</span>
              </Link>
              <span className="date">08/10/2025</span>
            </li>
            <li>
              <Link href="#">
                <span className="title">Planned Maintenance Notice</span>
              </Link>
              <span className="date">08/10/2025</span>
            </li>
            <li>
              <Link href="#">
                <span className="title">Planned Maintenance Notice</span>
              </Link>
              <span className="date">08/10/2025</span>
            </li>
            <li>
              <Link href="#">
                <span className="title">Planned Maintenance Notice</span>
              </Link>
              <span className="date">08/10/2025</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Group Overview 슬라이더 visible / hidden 영역 */}
      <div className="">
        <div className="sub-header mt-6 max-md:mt-10">
          <h3 className="sub-title mt-5 max-md:mt-0">Group Overview</h3>
          <div className="flex items-center gap-2.5">
            <Select
              placeholder=""
              className="w-50 max-md:!w-[100px]"
              defaultValue="All"
              options={[
                { label: 'All', value: 'All' },
                { label: 'select one', value: 'select one' },
              ]}
            />
            <div className="slider-btn-group">
              <Button
                type="default"
                className="btn-prev"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <img src="/icons/ico-page-prev.svg" alt="prev" />
              </Button>
              <Button
                type="default"
                className="btn-next"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img src="/icons/ico-page-next.svg" alt="next" />
              </Button>
            </div>
          </div>
        </div>
        <div className="over-view-slider">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={15}
            slidesPerView="auto"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <div className="slide-header">
                <h4>Group 1</h4>
                <p>
                  TOTAL <b>00</b>
                </p>
              </div>
              <ul className="slide-list">
                <li>
                  <span>In-Service</span>
                  <b>00</b>
                </li>
                <li>
                  <span>Out of Service</span>
                  <b>00</b>
                </li>
                <li>
                  <span>Power Off</span>
                  <b>00</b>
                </li>
                <li>
                  <span>Low Cash</span>
                  <b>00</b>
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-header">
                <h4>Group 1</h4>
                <p>
                  TOTAL <b>00</b>
                </p>
              </div>
              <ul className="slide-list">
                <li>
                  <span>In-Service</span>
                  <b>00</b>
                </li>
                <li>
                  <span>Out of Service</span>
                  <b>00</b>
                </li>
                <li>
                  <span>Power Off</span>
                  <b>00</b>
                </li>
                <li>
                  <span>Low Cash</span>
                  <b>00</b>
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">Slide 3 - 슬라이드 컨텐츠 반복</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">Slide 4 - 슬라이드 컨텐츠 반복</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">Slide 5 - 슬라이드 컨텐츠 반복</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">Slide 6 - 슬라이드 컨텐츠 반복</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="sub-header mt-6 max-md:mt-10">
        <h3 className="sub-title">ATM Error List</h3>
      </div>
      <TabulatorTable
        data={atmData}
        columns={columns}
        config={{
          showFooter: true,
          height: '200px',
        }}
      />
    </div>
  );
}
