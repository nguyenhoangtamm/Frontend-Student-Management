import React from "react";
import EventItem, { Event } from "./EventItem";

export default function EventList({ events }: { events: Event[] }) {
    return (
        <div className="mt-4 p-3 border rounded m-1">
            <h3>Danh sách sự kiện</h3>
            {events.map((event, index) => (
                <EventItem key={index} event={event} />
            ))}
        </div>
    );
}
