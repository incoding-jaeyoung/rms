'use client';

import { useState } from 'react';
import { Button } from 'antd';
import ModalDefault from '@/components/popup/ModalDefault';
import ChangePassword from '@/components/popup/ChangePassword';
import NewNotices from '@/components/popup/NewNotices';
import EditNotices from '@/components/popup/EditNotices';
import DeleteNotices from '@/components/popup/DeleteNotices';
import AlertNotices from '@/components/popup/AlertNotices';
import NewGroup from '@/components/popup/NewGroup';
import EditGroup from '@/components/popup/EditGroup';
import DeleteGroup from '@/components/popup/DeleteGroup';
import NewBranch from '@/components/popup/NewBranch';
import EditBranch from '@/components/popup/EditBranch';
import DeleteBranch from '@/components/popup/DeleteBranchs';
import NewErrorCode from '@/components/popup/NewErrorCode';
import DeleteErrorCode from '@/components/popup/DeleteError';
import NewRole from '@/components/popup/NewRole';
import EditRole from '@/components/popup/EditRole';
import DeleteRole from '@/components/popup/DeleteRole';
import SetPermissions from '@/components/popup/SetPermissions';
import NewUser from '@/components/popup/NewUser';
import EditUser from '@/components/popup/EditUser';
import ResetPassword from '@/components/popup/ResetPassword';
import DeleteUser from '@/components/popup/DeleteUser';

export default function ModalBasicPage() {
  const [sampleModal, setSampleModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [newNoticesModal, setNewNoticesModal] = useState(false);
  const [editNoticesModal, setEditNoticesModal] = useState(false);
  const [deleteNoticesModal, setDeleteNoticesModal] = useState(false);
  const [alertNoticesModal, setAlertNoticesModal] = useState(false);
  const [newGroupModal, setNewGroupModal] = useState(false);
  const [editGroupModal, setEditGroupModal] = useState(false);
  const [deleteGroupModal, setDeleteGroupModal] = useState(false);
  const [newBranchModal, setNewBranchModal] = useState(false);
  const [editBranchModal, setEditBranchModal] = useState(false);
  const [deleteBranchModal, setDeleteBranchModal] = useState(false);
  const [newErrorCodeModal, setNewErrorCodeModal] = useState(false);
  const [deleteErrorCodeModal, setDeleteErrorCodeModal] = useState(false);
  const [newRoleModal, setNewRoleModal] = useState(false);
  const [editRoleModal, setEditRoleModal] = useState(false);
  const [deleteRoleModal, setDeleteRoleModal] = useState(false);
  const [setPermissionsModal, setSetPermissionsModal] = useState(false);
  const [newUserModal, setNewUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [resetPasswordModal, setResetPasswordModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  return (
    <div className="p-8 flex flex-col gap-5">
      <h2 className="text-2xl font-bold">Modal Components</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Modal Template</h3>
          <p className="text-sm text-gray-600 mb-4">모달 템플릿</p>
          <Button type="primary" onClick={() => setSampleModal(true)} block>
            Open Modal
          </Button>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-5">MAIN</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Change Password</h3>
          <p className="text-sm text-gray-600 mb-4">RMS1100</p>
          <Button type="primary" onClick={() => setChangePasswordModal(true)} block>
            Open Modal
          </Button>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Add New-Notices</h3>
          <p className="text-sm text-gray-600 mb-4">RMS1310</p>
          <Button type="primary" onClick={() => setNewNoticesModal(true)} block>
            Open Modal
          </Button>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Edit Notices</h3>
          <p className="text-sm text-gray-600 mb-4">RMS1320</p>
          <Button type="primary" onClick={() => setEditNoticesModal(true)} block>
            Open Modal
          </Button>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Delete Notices</h3>
          <p className="text-sm text-gray-600 mb-4">RMS1330</p>
          <Button type="primary" onClick={() => setDeleteNoticesModal(true)} block>
            Open Modal
          </Button>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Alert Notices</h3>
          <p className="text-sm text-gray-600 mb-4">RMS1340</p>
          <Button type="primary" onClick={() => setAlertNoticesModal(true)} block>
            Open Modal
          </Button>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-5">Setup</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Add New Group</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5110</p>
          <Button type="primary" onClick={() => setNewGroupModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Edit Group Information</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5120</p>
          <Button type="primary" onClick={() => setEditGroupModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Delete Group</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5130</p>
          <Button type="primary" onClick={() => setDeleteGroupModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Add New Branch</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5210</p>
          <Button type="primary" onClick={() => setNewBranchModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Edit Branch Information</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5220</p>
          <Button type="primary" onClick={() => setEditBranchModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Delete Branch</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5230</p>
          <Button type="primary" onClick={() => setDeleteBranchModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Add New Error Code</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5410</p>
          <Button type="primary" onClick={() => setNewErrorCodeModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Delete Error Code</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5420</p>
          <Button type="primary" onClick={() => setDeleteErrorCodeModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Add New Role</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5510</p>
          <Button type="primary" onClick={() => setNewRoleModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Edit Role</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5520</p>
          <Button type="primary" onClick={() => setEditRoleModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Delete Role</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5530</p>
          <Button type="primary" onClick={() => setDeleteRoleModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Set Permissions</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5540</p>
          <Button type="primary" onClick={() => setSetPermissionsModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Add New User</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5610</p>
          <Button type="primary" onClick={() => setNewUserModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Edit User Information</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5620</p>
          <Button type="primary" onClick={() => setEditUserModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Reset Password</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5630</p>
          <Button type="primary" onClick={() => setResetPasswordModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Delete User</h3>
          <p className="text-sm text-gray-600 mb-4">RMS5640</p>
          <Button type="primary" onClick={() => setDeleteUserModal(true)} block>
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
      <NewGroup open={newGroupModal} onClose={() => setNewGroupModal(false)} />
      <EditGroup open={editGroupModal} onClose={() => setEditGroupModal(false)} />
      <DeleteGroup open={deleteGroupModal} onClose={() => setDeleteGroupModal(false)} />
      <NewBranch open={newBranchModal} onClose={() => setNewBranchModal(false)} />
      <EditBranch open={editBranchModal} onClose={() => setEditBranchModal(false)} />
      <DeleteBranch open={deleteBranchModal} onClose={() => setDeleteBranchModal(false)} />
      <NewErrorCode open={newErrorCodeModal} onClose={() => setNewErrorCodeModal(false)} />
      <DeleteErrorCode open={deleteErrorCodeModal} onClose={() => setDeleteErrorCodeModal(false)} />
      <NewRole open={newRoleModal} onClose={() => setNewRoleModal(false)} />
      <EditRole open={editRoleModal} onClose={() => setEditRoleModal(false)} />
      <DeleteRole open={deleteRoleModal} onClose={() => setDeleteRoleModal(false)} />
      <SetPermissions open={setPermissionsModal} onClose={() => setSetPermissionsModal(false)} />
      <NewUser open={newUserModal} onClose={() => setNewUserModal(false)} />
      <EditUser open={editUserModal} onClose={() => setEditUserModal(false)} />
      <ResetPassword open={resetPasswordModal} onClose={() => setResetPasswordModal(false)} />
      <DeleteUser open={deleteUserModal} onClose={() => setDeleteUserModal(false)} />
    </div>
  );
}
