"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button, Modal } from "antd";

export default function AddStudent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        className="bg-admin-theme text-white p-4 rounded-full flex items-center justify-center shadow-lg hover:opacity-90"
        onClick={() => setOpen(true)}
        
      >
        <Plus size={20} />
        Add Student
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
            placeholder="Student Name"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Student Email"
            className="w-full p-2 border rounded-md mt-2"
          />
          <input
            type="text"
            placeholder="Student ID"
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
