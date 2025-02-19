"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
import { Button, Modal } from "antd";

export default function AddNotification() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        className="bg-admin-theme text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:opacity-90"
        onClick={() => setOpen(true)}
      >
        <UserPlus size={20} /> Add Notification
      </Button>

      <Modal
        title="Add New Agent"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <form>
          <input
            type="text"
            placeholder="Notification Name"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Notification Email"
            className="w-full p-2 border rounded-md mt-2"
          />
          <input
            type="text"
            placeholder="Notification ID"
            className="w-full p-2 border rounded-md mt-2"
          />
          <div className="mt-4 flex justify-end">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button className="ml-2" type="primary" htmlType="submit">
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
