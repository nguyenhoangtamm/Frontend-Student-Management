import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface EventModalProps {
  isOpen: boolean;
  setOpen: (s: boolean) => void;
}
export default function EventModal(props: EventModalProps) {
  const { isOpen, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal show={isOpen} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Title Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h5>Event Details</h5>
          <p>Date: 2023-10-15</p>
          <p>Time: 10:00 AM</p>
          <p>Location: Conference Room A</p>
          <p>Description: This is a detailed description of the event.</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
