'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';
import ModalDefault from '@/components/popup/ModalDefault';
import ChangePassword from '@/components/popup/ChangePassword';

export default function ModalBasicPage() {
  const [sampleModal, setSampleModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Modal Components</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Modal Template</h3>
          <p className="text-sm text-gray-600 mb-4">모달 템플릿</p>
          <Button variant="primary" onClick={() => setSampleModal(true)} fullWidth>
            Open Modal
          </Button>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Change Password</h3>
          <p className="text-sm text-gray-600 mb-4">RMS1100</p>
          <Button variant="primary" onClick={() => setChangePasswordModal(true)} fullWidth>
            Open Modal
          </Button>
        </div>
      </div>

      {/* 모달 컴포넌트들 */}
      <ModalDefault open={sampleModal} onClose={() => setSampleModal(false)} />
      <ChangePassword open={changePasswordModal} onClose={() => setChangePasswordModal(false)} />
    </div>
  );
}
