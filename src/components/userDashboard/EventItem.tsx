import React, { useState } from "react";
import EventModal from "../modals/EventModal";
import { Button } from "../ui/button";

// Define the type for Event props
export interface Event {
  title: string;
  date: string;
  content: string;
  slug: string;
  
}

interface EventItemProps {
  event: Event;
}

export default function EventItem({ event }: EventItemProps) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="d-flex justify-content-between py-2 border-bottom">
      <div>
        <p className="mb-0">{event.title}</p>
        <small>{new Date(event.date).toLocaleDateString('en-GB')}</small>
      </div>
      <div className="text-right">
        <Button
          onClick={() => setOpen(true)}
          className="bg-blue-500 hover:bg-yellow-600 text-white"
        >
          Chi tiết
        </Button>
      </div>
      <EventModal isOpen={isOpen} setOpen={setOpen} event={event} />
    </div>
  );
};


