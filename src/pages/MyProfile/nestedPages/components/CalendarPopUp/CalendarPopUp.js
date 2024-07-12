import { Box, Checkbox, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import {
  Button,
  MyCalendar,
  getCalendarFormatedDate,
  getFormatedDate,
} from "../../../../../shared";
import "./CalendarPopUp.css";
import "react-calendar/dist/Calendar.css";
import { getUpdatesTaskDueDate } from "../../../../../services/tasks/getUpdatesTaskDueDate";
import { getMemberTaskDetails } from "../../../../../services";
import { set } from "date-fns";
const useStyle = makeStyles({
  popUp: {
    // "& .MuiDialog-paper": {
    width: "317px",
    backgroundColor: "#fff",
    padding: "15px 23px",
    position: "absolute",
    top: "105px",
    right: "80px",
    zIndex: "99",
    boxShadow: "0px 4px 8px rgba(11, 42, 58, 0.16)",
    // },
  },
  font: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "17px",
    color: "rgba(10, 12, 26, 0.55)",
  },
});
export function CalendarPopUp({
  id,
  open,
  setOpen,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
  const [startCal, setStartCal] = useState(startDate);
  const [endCal, setEndCal] = useState(endDate);
  const [time, setTime] = useState("14:00");
  const style = useStyle();

  function handleClose(e) {
    setOpen(false);
  }
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", handleClose);
    }, 0);

    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <Box
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={style.popUp}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Dates</Typography>
        <img
          style={{ cursor: "pointer" }}
          onClick={handleClose}
          src={require("../../../../../images/Close icon.svg")}
          alt="close"
        />
      </Box>
      <Box
        position="relative"
        width="100%"
        height="280px"
        margin="12px px"
        p="20px 0"
      >
        <MyCalendar
          startCal={startCal}
          setStartCal={setStartCal}
          endCal={endCal}
          setEndCal={setEndCal}
          setStartDate={setStartDate}
          setDueDate={setEndDate}
          startDate={startDate}
          dueDate={endDate}
          selectRange={true}
        />
      </Box>
      <Box mt={2}>
        <Typography className={style.font}>Start date</Typography>
        <Box margin="10px 0 20px 0" display="flex" alignItems="center">
          <Checkbox sx={{ padding: "0", mr: "10px" }} />
          <TextField
            fontSize="14px"
            type="date"
            value={getFormatedDate(startCal)}
            onChange={(e) => {
              getCalendarFormatedDate(e.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "151px",
                height: "30px",
                "& fieldset": {
                  border: 0,
                  boxShadow: "0px 4px 8px rgba(11, 42, 58, 0.12)",
                },
              },
            }}
          />
        </Box>

        <Typography className={style.font}>Due date</Typography>
        <Box margin="10px 0 20px 0" display="flex" alignItems="center">
          <Checkbox sx={{ padding: "0", mr: "10px" }} />
          <TextField
            fontSize="14px"
            type="date"
            value={getFormatedDate(endCal)}
            onChange={(e) => {
              getCalendarFormatedDate(e.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "151px",
                height: "30px",
                "& fieldset": {
                  border: 0,
                  boxShadow: "0px 4px 8px rgba(11, 42, 58, 0.12)",
                },
              },
            }}
          />
          <TextField
            type="time"
            fontSize="14px"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            sx={{
              ml: "10px",

              "& .MuiOutlinedInput-root": {
                width: "68px",
                height: "30px",
                "& fieldset": {
                  border: 0,
                  boxShadow: "0px 4px 8px rgba(11, 42, 58, 0.12)",
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "3px 8px",
              },
              "input[type='time']::-webkit-calendar-picker-indicator": {
                display: "none",
              },
            }}
          />
        </Box>
        {/* <Typography className={style.font} mb="10px">
          Set due date reminder
        </Typography>
        <Select width="100%" arr={arr} placeholder="None" />
        <Typography className={style.font} fontWeight="400" m="10px 0">
          Reminders will be sent to all members of this card.
        </Typography> */}
        <Box
          display="flex"
          gap="5px"
          justifyContent="space-between"
          p="30px 0 67px 0"
        >
          <Button
              onClick={() => handleClose()}
            sx={{
              "&.MuiButton-contained": {
                width: "165px",
                height: "30px",
                background: "rgba(56, 150, 201, 0.07)",
                color: "rgba(56, 150, 201, 1)",
                fontSize: "14px",
                fontWeight: "500",
                "&:hover": {
                  background: "rgba(56, 150, 201, 0.07)",
                  color: "rgba(56, 150, 201, 1)",
                },
              },
            }}
          >
            Remove
          </Button>
          <Button
            onClick={() => {
              getUpdatesTaskDueDate(id, startCal, endCal).then(() => {
                setStartDate(startCal);
                setEndDate(endCal);
                handleClose()
              }).catch(error => error);
            }}
            sx={{
              "&.MuiButton-contained": {
                width: "165px",
                height: "30px",
                fontSize: "14px",
                fontWeight: "500",
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
