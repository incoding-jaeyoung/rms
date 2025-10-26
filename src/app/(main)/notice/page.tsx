'use client';

import { useState } from 'react';
import { Button, Space, Select, Form, InputNumber, Input } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function NoticePage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleNotice = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="contents">
      <div className="center-container">
        <div className="contents-header">
          <h2>Notice</h2>
        </div>
        <Button icon={<PlusOutlined />} className="mt-7.5 max-md:!hidden">
          Add new
        </Button>
        <div className="list-header">
          <p className="notice-number">
            Total Notices <b>15</b>
          </p>
          <div className="notice-filter ">
            <div className="flex items-center gap-1.5 max-md:flex-col max-md:items-start max-md:w-full">
              <label className="text-sm font-medium text-black max-md:text-lg">Group</label>
              <Select
                placeholder=""
                className="w-50 max-md:w-full"
                defaultValue="All"
                options={[{ label: 'All', value: 'All' }]}
              />
            </div>
            <div className="flex items-center gap-1.5 max-md:flex-col max-md:items-start max-md:w-full">
              <label className="text-sm font-medium text-black max-md:text-lg">Branch</label>
              <Select
                placeholder=""
                className="w-50 max-md:w-full"
                defaultValue="All"
                options={[{ label: 'All', value: 'All' }]}
              />
            </div>
          </div>
        </div>
        <div className="notice-list-container">
          <ul className="notice-list-item">
            {/* pinned area 핀 된 리스트는 pin-area 안에 위치 */}
            <div className="pin-area">
              <li className={`notice-item  ${activeIndex === 0 ? 'active' : ''}`}>
                <button type="button" className="notice-item-btn" onClick={() => toggleNotice(0)}>
                  <p className="label">PINNED</p>
                  <dl>
                    <dt>Planned Maintenance Notice Planned Maintenance Notice</dt>
                    <dd>August 10, 2025</dd>
                  </dl>
                  <img src="/icons/ico-notice-arrow.svg" alt="arrow" />
                </button>
                <div className="notice-item-con">
                  <div className="con-header">
                    <p className="con-menu">
                      <Button type="default" icon={<EditOutlined />}>
                        Edit
                      </Button>
                      <Button type="default" icon={<DeleteOutlined />}>
                        Delete
                      </Button>
                    </p>
                    <ul className="item-info">
                      <li>
                        <span className="label">Author</span>
                        <b>Admin</b>
                      </li>
                      <li>
                        <span className="label">Group</span>
                        <b>A group</b>
                      </li>
                      <li>
                        <span className="label">Views</span>
                        <b>127</b>
                      </li>
                    </ul>
                  </div>
                  <div className="notice-content">
                    We will conduct scheduled maintenance on August 12th, 2025 from 2 AM to 4 AM
                    (UTC-5). During this time, some services may be temporarily unavailable
                  </div>
                </div>
              </li>
              <li className={`notice-item  ${activeIndex === 1 ? 'active' : ''}`}>
                <button type="button" className="notice-item-btn" onClick={() => toggleNotice(1)}>
                  <p className="label">PINNED</p>
                  <dl>
                    <dt>Planned Maintenance Notice</dt>
                    <dd>August 10, 2025</dd>
                  </dl>
                  <img src="/icons/ico-notice-arrow.svg" alt="arrow" />
                </button>
                <div className="notice-item-con">
                  <div className="con-header">
                    <p className="con-menu">
                      <Button type="default" icon={<EditOutlined />}>
                        Edit
                      </Button>
                      <Button type="default" icon={<DeleteOutlined />}>
                        Delete
                      </Button>
                    </p>
                    <ul className="item-info">
                      <li>
                        <span className="label">Author</span>
                        <b>Admin</b>
                      </li>
                      <li>
                        <span className="label">Group</span>
                        <b>A group</b>
                      </li>
                      <li>
                        <span className="label">Views</span>
                        <b>127</b>
                      </li>
                    </ul>
                  </div>
                  <div className="notice-content">
                    We will conduct scheduled maintenance on August 12th, 2025 from 2 AM to 4 AM
                    (UTC-5). During this time, some services may be temporarily unavailable
                  </div>
                </div>
              </li>
            </div>
            <li className={`notice-item ${activeIndex === 2 ? 'active' : ''}`}>
              <button type="button" className="notice-item-btn" onClick={() => toggleNotice(2)}>
                <p className="label new">NEW</p>
                <dl>
                  <dt>Planned Maintenance Notice</dt>
                  <dd>August 10, 2025</dd>
                </dl>
                <img src="/icons/ico-notice-arrow.svg" alt="arrow" />
              </button>
              <div className="notice-item-con">
                <div className="con-header">
                  <p className="con-menu">
                    <Button type="default" icon={<EditOutlined />}>
                      Edit
                    </Button>
                    <Button type="default" icon={<DeleteOutlined />}>
                      Delete
                    </Button>
                  </p>
                  <ul className="item-info">
                    <li>
                      <span className="label">Author</span>
                      <b>Admin</b>
                    </li>
                    <li>
                      <span className="label">Group</span>
                      <b>A group</b>
                    </li>
                    <li>
                      <span className="label">Views</span>
                      <b>127</b>
                    </li>
                  </ul>
                </div>
                <div className="notice-content">
                  We will conduct scheduled maintenance on August 12th, 2025 from 2 AM to 4 AM
                  (UTC-5). During this time, some services may be temporarily unavailable
                </div>
              </div>
            </li>
            <li className={`notice-item ${activeIndex === 3 ? 'active' : ''}`}>
              <button type="button" className="notice-item-btn" onClick={() => toggleNotice(3)}>
                <p className="number">5</p>
                <dl>
                  <dt>Planned Maintenance Notice</dt>
                  <dd>August 10, 2025</dd>
                </dl>
                <img src="/icons/ico-notice-arrow.svg" alt="arrow" />
              </button>
              <div className="notice-item-con">
                <div className="con-header">
                  <p className="con-menu">
                    <Button type="default" icon={<EditOutlined />}>
                      Edit
                    </Button>
                    <Button type="default" icon={<DeleteOutlined />}>
                      Delete
                    </Button>
                  </p>
                  <ul className="item-info">
                    <li>
                      <span className="label">Author</span>
                      <b>Admin</b>
                    </li>
                    <li>
                      <span className="label">Group</span>
                      <b>A group</b>
                    </li>
                    <li>
                      <span className="label">Views</span>
                      <b>127</b>
                    </li>
                  </ul>
                </div>
                <div className="notice-content">
                  We will conduct scheduled maintenance on August 12th, 2025 from 2 AM to 4 AM
                  (UTC-5). During this time, some services may be temporarily unavailable
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="list-pagination">
          <div className="pagination-center">
            <button className="nav-btn prev-btn" type="button" disabled={true}>
              <img src="/icons/ico-page-prev.svg" alt="prev" width="16" height="16" />
              <span>Prev</span>
            </button>
            <Input className="page-input" min={1} max={2} defaultValue={1} />
            <span className="of-text">of</span>
            <span className="total-pages">2</span>
            <button className="nav-btn next-btn" type="button">
              <span>Next</span>
              <img src="/icons/ico-page-next.svg" alt="next" width="16" height="16" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
