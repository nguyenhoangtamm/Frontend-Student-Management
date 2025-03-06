import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Event } from "../userDashboard/EventItem";

interface EventModalProps {
  isOpen: boolean;
  setOpen: (s: boolean) => void;
  event:Event;
}
export default function EventModal(props: EventModalProps) {
  const { isOpen, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const { event } = props;
  return (
    <Modal show={isOpen} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{event.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h5>Event Details</h5>
            <p>Date: <strong>{new Date(event.date).toLocaleDateString('en-GB')}</strong></p>
          <p>Description:</p>
          <p>{event.content}</p>
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
