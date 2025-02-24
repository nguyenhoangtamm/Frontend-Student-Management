"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Modal } from "antd";
import { Button } from "@/components/ui/button";

interface IProps {
  name: string;
  dataType: string[];
}
export default function AddModal({ name, dataType }: IProps) {
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
        title={`Add New ${name}`}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <form>
          {dataType.map((data, key) => (
            <input key={key}
              type="text"
              placeholder={data}
              className="w-full p-2 border rounded-md mt-2"
            />
          ))}
          
          <div className="mt-4 flex justify-end">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button className="ml-2">Save</Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
