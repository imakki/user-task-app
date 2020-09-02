import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import events from "./events";

// let allViews = Object.keys(Views).map((k) => Views[k]);

const localizer = momentLocalizer(moment);

const EventCalender = () => {
  const [events, setEvents] = useState([]);

  const handleSlotSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  console.log(events);
  return (
    <div className="h-screen p-12">
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        defaultView={Views.WEEK}
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(2015, 3, 12)}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSlotSelect}
      />
    </div>
  );
};

export default EventCalender;
