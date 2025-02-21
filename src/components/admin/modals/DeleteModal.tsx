import React from "react";
import { Modal } from "antd";

interface EventModalProps {
  isOpen: boolean;
  setOpen: (s: boolean) => void;
}
export default function DeleteModal(props: EventModalProps) {
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
      <p>
        Sinh viên: <strong>Nguyễn Văn A</strong>
      </p>
      <p>
        Mã số sinh viên: <strong>PH123456</strong>
      </p>
    </Modal>
  );
}
