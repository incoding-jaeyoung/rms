'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';
import ModalDefault from '@/components/popup/ModalDefault';
import ChangePassword from '@/components/popup/ChangePassword';
import NewNotices from '@/components/popup/NewNotices';
import EditNotices from '@/components/popup/EditNotices';
import DeleteNotices from '@/components/popup/DeleteNotices';
import AlertNotices from '@/components/popup/AlertNotices';

export default function ModalBasicPage() {
  const [sampleModal, setSampleModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [newNoticesModal, setNewNoticesModal] = useState(false);
  const [editNoticesModal, setEditNoticesModal] = useState(false);
  const [deleteNoticesModal, setDeleteNoticesModal] = useState(false);
  const [alertNoticesModal, setAlertNoticesModal] = useState(false);
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

        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Add New-Notices</h3>
          <p className="text-sm text-gray-600 mb-4">RMS1310</p>
          <Button variant="primary" onClick={() => setNewNoticesModal(true)} fullWidth>
            Open Modal
          </Button>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Edit Notices</h3>
          <p className="text-sm text-gray-600 mb-4">RMS1320</p>
          <Button variant="primary" onClick={() => setEditNoticesModal(true)} fullWidth>
            Open Modal
          </Button>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Delete Notices</h3>
          <p className="text-sm text-gray-600 mb-4">RMS1330</p>
          <Button variant="primary" onClick={() => setDeleteNoticesModal(true)} fullWidth>
            Open Modal
          </Button>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Alert Notices</h3>
          <p className="text-sm text-gray-600 mb-4">RMS1340</p>
          <Button variant="primary" onClick={() => setAlertNoticesModal(true)} fullWidth>
            Open Modal
          </Button>
        </div>
      </div>

      {/* 모달 컴포넌트들 */}
      <ModalDefault open={sampleModal} onClose={() => setSampleModal(false)} />
      <ChangePassword open={changePasswordModal} onClose={() => setChangePasswordModal(false)} />
      <NewNotices open={newNoticesModal} onClose={() => setNewNoticesModal(false)} />
      <EditNotices open={editNoticesModal} onClose={() => setEditNoticesModal(false)} />
      <DeleteNotices open={deleteNoticesModal} onClose={() => setDeleteNoticesModal(false)} />
      <AlertNotices open={alertNoticesModal} onClose={() => setAlertNoticesModal(false)} />
    </div>
  );
}
