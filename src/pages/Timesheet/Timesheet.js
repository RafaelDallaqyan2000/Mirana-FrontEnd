import React, { useCallback, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Main, TimeBox } from "./components";
import { MyCalendar, dateFormatToVacation } from "../../shared";
import { getMemberVacationsAbsences, getWorkHours } from "../../services";
import "./Timesheet.css";

export function Timesheet() {
  const [todayHours, setTodayHours] = useState();
  const [weekHours, setWeekHours] = useState();
  const [monthHours, setMonthHours] = useState();
  const [vacations, setVacations] = useState([]);
  const [absences, setAbsences] = useState([]);

  useEffect(() => {
    getWorkHours()
      .then((data) => {
        setTodayHours(data.today);
        setWeekHours(data.thisWeek);
        setMonthHours(data.thisMonth);
      })
      .catch((error) => error);

    getMemberVacationsAbsences()
      .then((data) => {
        setAbsences(data.absences);
        setVacations(data.vacations);
      })
      .catch((error) => error);
  }, []);

  useEffect(() => {
    if (absences.length || vacations.length) {
      dayOff();
    }
  }, [absences, vacations]);

  const dayOff = useCallback(() => {
    setTimeout(() => {
      let a = document.getElementsByTagName("abbr");
      for (let i = 0; i < a.length; i++) {
        absences.map((absence) => {
          if (a[i].ariaLabel === dateFormatToVacation(absence.absenceDate)) {
            a[i].style.border = "1px solid rgba(232, 154, 0, 1)";
            a[i].style.borderRadius = "2px";
            a[i].style.padding =
              +absence.absenceDate.slice(8, 10) > 9 ? "5px" : "6px 11px";
          }
        });
        vacations.map((vacation) => {
          let startDay = dateFormatToVacation(vacation.startDate);
          let endDay = dateFormatToVacation(vacation.endDate);

          if (a[i].ariaLabel === startDay) {
            a[i].style.border = "1px solid rgba(50, 151, 109, 1)";
            a[i].style.borderRadius = "2px";
            a[i].style.padding =
              +vacation.startDate.slice(8, 10) > 9 ? "5px" : "6px 11px";
          }
          let arrLength = vacation.holydays.length - 1;
          vacation.holydays.map((holyday, index) => {
            if (
              dateFormatToVacation(holyday.date) === a[i].ariaLabel &&
              index > 0 &&
              index < arrLength
            ) {
              a[i].style.backgroundColor = "rgba(50, 151, 109, 0.2)";
              a[i].style.borderRadius = "2px";
              a[i].style.padding =
                +vacation.endDate.slice(8, 10) > 9 ? "5px" : "6px 11px";
            }
          });
          if (a[i].ariaLabel === endDay) {
            a[i].style.border = "1px solid rgba(50, 151, 109, 1)";
            a[i].style.borderRadius = "2px";
            a[i].style.padding =
              +vacation.endDate.slice(8, 10) > 9 ? "5px" : "6px 11px";
          }
        });
      }
    }, 0);
  }, [vacations, absences]);

  return (
    <Box className="timesheetContainer">
      <Box className="timesheetLeftDiv">
        <Main />
      </Box>
      <Box className="timesheetRightDiv">
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: 21,
            color: "rgba(0, 0, 0, 0.6)",
            mb: "32px",
          }}
        >
          Time spent on working
        </Typography>

        <TimeBox time={todayHours} range="Today" />
        <TimeBox time={weekHours} range="This Week" />
        <TimeBox time={monthHours} range="This Month" />
        <Box
          width="235px"
          height="280px"
          mt="10px"
          sx={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 8px 16px rgba(141, 172, 208, 0.12)",
            borderRadius: "4px",
          }}
        >
          <MyCalendar selectRange={false} dayOff={dayOff} />
        </Box>
        <Box
          width="215px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="10px"
          mt="10px"
          sx={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 4px 8px rgba(11, 42, 58, 0.16)",
            borderRadius: "4px",
          }}
        >
          <Box display="flex" alignItems="center">
            <Box
              width="10px"
              height="10px"
              sx={{ backgroundColor: "rgba(50, 151, 109, 1)" }}
            ></Box>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "12px",
              }}
              ml="10px"
            >
              Vacations
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Box
              width="10px"
              height="10px"
              sx={{ backgroundColor: "rgba(232, 154, 0, 1)" }}
            ></Box>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "12px",
              }}
              ml="10px"
            >
              Absence
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
