import holidays from "date-holidays";

const hd = new holidays("US");
export const holiday = hd.getHolidays(); // Getting holiday list from"date-holidays"npm package. We can use this one instead of our hardcoded list.

export const holidaysList = [
  {
    title: "New Year's day",

    start: new Date(2023, 0, 1),
    end: new Date(2023, 0, 1),
  },
  {
    title: "Vacation",
    start: new Date(2023, 0, 9),
    end: new Date(2023, 0, 9),
  },
  {
    title: "Conference",
    start: new Date(2023, 0, 20),
    end: new Date(2023, 0, 23),
  },
];
