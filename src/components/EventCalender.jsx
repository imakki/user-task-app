import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "./events";

let allViews = Object.keys(Views).map((k) => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

const localizer = momentLocalizer(moment);

const EventCalender = () => {
  return (
    <div className="h-screen p-12">
      <Calendar
        events={events}
        views={allViews}
        step={60}
        showMultiDayTimes
        defaultDate={new Date(2015, 3, 1)}
        components={{
          timeSlotWrapper: ColoredDateCellWrapper,
        }}
        localizer={localizer}
      />
    </div>
  );
};

export default EventCalender;
