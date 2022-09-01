import React, { useState } from "react";
import { Calendar as CalendarComponent } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Header } from "../components";

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const handleChange = () => {
    setValue(value);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <CalendarComponent
        className=" ml-56 h-[20rem] selection:text-slate-800"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Calendar;
