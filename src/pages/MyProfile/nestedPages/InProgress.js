import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTasksInProgress } from "../../../services";
import { InProgressCard } from "./components";

const mapStateToProps = (state) => {
  return {
    userId: state.memberDetails.memberDetails.id,
  };
};

export const InProgress = connect(mapStateToProps)(({ userId }) => {
  const [actionOpen, setActionOpen] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    window.addEventListener("click", openDropdown);
    return () => {
      window.removeEventListener("click", openDropdown);
    };
  }, []);

  useEffect(() => {
    getTasksInProgress(userId)
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => error);
  }, [startDate, endDate]);

  const openDropdown = (e) => {
    e.stopPropagation();
    setActionOpen(e.target.id);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="calc(100vh - 173px)"
    >
      <Box
        height="100%"
        width="85%"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="flex-start"
        gap="20px"
        flexWrap="wrap"
        margin="0 25px"
        padding="0 15px 10px 15px"
        sx={{ overflowY: "auto" }}
      >
        {tasks ? tasks.map((task) => {
          return (
            <InProgressCard
              id={task.id}
              cardDate={task.endDate}
              membersInTask={task.otherMembersInTask}
              actionOpen={actionOpen}
              openDropdown={openDropdown}
              taskNameCard={task.taskName}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              setTasks={setTasks}
            />
          );
        }) : ""}
      </Box>
    </Box>
  );
});
