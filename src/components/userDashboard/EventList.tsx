import React from "react";
import EventItem, { Event } from "./EventItem";

const EventList: React.FC = () => {
  const events: Event[] = [
    {
      title: "Cập nhật thông tin",
      date: "17/18/2025",
      status: "Đã hoàn thành",
    },
    {
      title: "Cập nhật thông tin",
      date: "17/18/2025",
      status: "Đã hoàn thành",
    },
    {
      title: "Hỗ trợ sinh viên khó khăn",
      date: "17/18/2025",
      status: "Đã hoàn thành",
    },
  ];

  return (
    <div className="mt-4 p-3 border rounded m-1">
      <h3>Danh sách sự kiện</h3>
      {events.map((event, index) => (
        <EventItem key={index} event={event} />
      ))}
    </div>
  );
};

export default EventList;
