import React from "react";
import { Modal } from "antd";

interface dataDelete {
  id: string;
  name: string;
}
interface EventModalProps {
  data: dataDelete;
  isOpen: boolean;
  setOpen: (s: boolean) => void;
}
export default function DeleteModal(props: EventModalProps) {
  const data = props.data;

  const { isOpen, setOpen } = props;

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      title="Bạn có chắc chắn muốn xóa?"
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable={false}
    >
      <div>
        <span>Id: </span>
        {data.id}
      </div>
      <div>
        <span>Name: </span>
        {data.name}
      </div>
    </Modal>
  );
}
