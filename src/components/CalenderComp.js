// import React from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { holidaysList, holiday } from "./HolidayList";
import "./styles/CalStyle.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const allHolidaysFromLs =
  JSON.parse(localStorage.getItem("listOfHolidays")) || holidaysList; // Getting holiday list from local storage
// if available already , if not then
// assigning our holidaylist

function CalenderComp() {
  const [newHoliday, setNewHoliday] = useState({
    title: "",
    start: "",
    end: "",
  });

  const [allHolidays, setAllHolidays] = useState(allHolidaysFromLs); // storing holidays list in application state using useState hook.

  console.log(allHolidays); // for debugging purpose

  useEffect(() => {
    localStorage.setItem("listOfHolidays", JSON.stringify(allHolidays));
  }, [allHolidays]); // using useEffect hook for storing the holiday list to local storage so that we will not lose app state after refresh.

  const addHolidayHandler = () => {
    setAllHolidays([...allHolidays, newHoliday]);
  }; // function to handle the onclick even of add holiday button.

  return (
    <div>
      <h1 className="heading">Calender</h1>
      <h2>Add New Holiday</h2>
      <div>
        <input
          type={"textArea"}
          placeholder="Add Holiday Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newHoliday.title}
          onChange={(e) =>
            setNewHoliday({ ...newHoliday, title: e.target.value })
          }
        />
        <div className="add-holiday">
          <DatePicker
            placeholderText="Start Date "
            style={{ marginRight: "10px" }}
            selected={newHoliday.start}
            onChange={(start) => setNewHoliday({ ...newHoliday, start })}
          />
          <DatePicker
            placeholderText="End Date"
            style={{ marginRight: "10px" }}
            selected={newHoliday.end}
            onChange={(end) => setNewHoliday({ ...newHoliday, end })}
          />

          <button style={{ marginTop: "10px" }} onClick={addHolidayHandler}>
            Add Holiday
          </button>
        </div>
      </div>

      <Calendar
        localizer={localizer}
        events={allHolidays}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default CalenderComp;
