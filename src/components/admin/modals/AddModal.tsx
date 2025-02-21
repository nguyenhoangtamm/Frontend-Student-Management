"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Modal } from "antd";
import { Button } from "@/components/ui/button";

export default function AddModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="bg-admin-theme text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:opacity-90"
        onClick={() => setOpen(true)}
      >
        <Plus size={20} /> Add
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
            placeholder="Dormitory Name"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Dormitory Email"
            className="w-full p-2 border rounded-md mt-2"
          />
          <input
            type="text"
            placeholder="Dormitory ID"
            className="w-full p-2 border rounded-md mt-2"
          />
          <div className="mt-4 flex justify-end">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button className="ml-2">
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
