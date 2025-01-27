import Link from "next/link";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import EventModal from "../modals/EventModal";
import { tree } from "next/dist/build/templates/app-page";

// Define the type for Event props
export interface Event {
  title: string;
  date: string;
  status: string;
}

interface EventItemProps {
  event: Event;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="d-flex justify-content-between py-2 border-bottom">
      <div>
      <p className="mb-0">{event.title}</p>
      <small>{event.date}</small>
      </div>
      <div className="text-right">
      <p className="mb-0 text-success">{event.status}</p>
      <Button onClick={()=>setOpen(true)} className="text-decoration-underline text-primary">
        Chi tiết
      </Button>
      </div>
      <EventModal
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </div>
  );
};

export default EventItem;
