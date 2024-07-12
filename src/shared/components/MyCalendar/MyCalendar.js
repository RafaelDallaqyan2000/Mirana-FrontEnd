import React, { useState } from "react";
import "./MyCalendar.css";
import { Calendar } from "react-calendar";
import { getFormatBackDate } from "../../functions";

export function MyCalendar({
  setStartCal,
  setEndCal,
  startCal,
  endCal,
  selectRange = "false",
  dayOff,
}) {
  return (
    <Calendar
      selectRange={selectRange}
      onChange={
        selectRange === true
          ? (dates) => {
              setStartCal(getFormatBackDate(`${dates[0]}`));
              setEndCal(getFormatBackDate(`${dates[1]}`));
            }
          : dayOff
      }
      prevLabel={
        <img
          src={require("../../../images/leftMonth.svg")}
          alt="month"
          style={{ padding: "17px 9px" }}
          onClick={dayOff}
        />
      }
      nextLabel={
        <img
          src={require("../../../images/rightMonth.svg")}
          alt="month"
          style={{ padding: "17px 9px" }}
          onClick={dayOff}
        />
      }
      prev2Label={
        <img
          src={require("../../../images/leftYear.svg")}
          alt="year"
          style={{ padding: "17px 9px" }}
          onClick={dayOff}
        />
      }
      next2Label={
        <img
          src={require("../../../images/rightYear.svg")}
          alt="year"
          style={{ padding: "17px 9px" }}
          onClick={dayOff}
        />
      }
      value={[startCal, endCal]}
    />
  );
}
