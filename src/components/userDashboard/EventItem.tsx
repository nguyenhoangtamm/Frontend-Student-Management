import React from "react";

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
  return (
    <div className="d-flex justify-content-between py-2 border-bottom">
      <div>
      <p className="mb-0">{event.title}</p>
      <small>{event.date}</small>
      </div>
      <div className="text-right">
      <p className="mb-0 text-success">{event.status}</p>
      <a href="#" className="text-decoration-underline text-primary">
        Chi tiết
      </a>
      </div>
    </div>
  );
};

export default EventItem;
