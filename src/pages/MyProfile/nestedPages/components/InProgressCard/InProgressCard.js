import { Box, Typography } from "@mui/material";
import React, {useCallback, useState} from "react";
import { PopUp, Users } from "./components/PopUp";
import { Options } from "./components";
import { getMemberTaskDetails } from "../../../../../services";
import { getDateAllTasks } from "../../../../../shared";
import "./components/PopUp/PopUp.css";

export function InProgressCard({
  id,
  cardDate,
  membersInTask,
  actionOpen,
  openDropdown,
  windowState,
  taskNameCard,
  setTasks,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  const [attachments, setAttachments] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [status, setStatus] = useState("in progress");
  const [taskName, setTaskName] = useState("");
  const [sprintName, setSprintName] = useState("");
  const [userArr, setUserArr] = useState(membersInTask);
  const [usersInCard, setUsersInCard] = useState([]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [data, setData] = useState([]);

  const closePopUp = () => {
    setOpenPopUp(false);
  };
  const memberTaskDetails = useCallback(() => {
    getMemberTaskDetails(id)
    .then((e) => {
      setData(e);
      setAttachments(e[0].attachments);
      setProjectName(e[0].projectName);
      setStatus(e[0].status);
      setTaskName(e[0].taskName);
      setSprintName(e[0].sprintName);
      setUsersInCard(e[0].assignments);
      setStartDate(e[0].startDate);
      setEndDate(e[0].endDate);
    })
    .catch(( error ) => error );
    setOpenPopUp(true);
  })

  return (
    <Box display="flex">
      <Box
        width="260px"
        height="161px"
        boxShadow="0px 3px 14px rgba(0, 0, 0, 0.1)"
        borderRadius="4px"
        pl="20px"
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        onClick={ memberTaskDetails }
        sx={{ cursor: "pointer" }}
      >
        <Box position="absolute" top="10px" right="15px">
          <img
            src={require("../../../../../images/InProgressCard/options dots.svg")}
            alt="options"
            style={{ padding: "5px 0" }}
            id={`${id}opt`}
            onClick={(e) => {
              e.stopPropagation();
              openDropdown(e);
            }}
          />
          <Options
            id={`${id}opt`}
            openDropdown={openDropdown}
            state={actionOpen}
          />
        </Box>

        <Typography
          color="rgba(10, 12, 26, 0.8)"
          fontFamily="Montserrat"
          fontStyle="normal"
          fontWeight="600"
          fontSize="14px"
          lineHeight="17px"
          width="245px"
        >
          {taskNameCard}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" mt="15px">
            <img
              src={require("../../../../../images/InProgressCard/attachment_bold 1.svg")}
              alt="attachment"
            />
            <Typography mr="10px" ml="4px">
              {id}
            </Typography>
            <img
              src={require("../../../../../images/InProgressCard/calendar (2) 2.svg")}
              alt="calendar"
            />
            <Typography ml="7px">{getDateAllTasks(cardDate)}</Typography>
          </Box>
          {/* images */}
          <Users
            id={id}
            state={actionOpen}
            array={userArr}
            count={2}
            openDropdown={openDropdown}
          />
        </Box>
        {/* <UsersImages
          id={id}
          arr={membersInTask}
          openDropdown={openDropdown}
          state={state}
        /> */}
      </Box>

      <PopUp
        id={id}
        actionOpen={actionOpen}
        windowState={windowState}
        openDropdown={openDropdown}
        openPopUp={openPopUp}
        onClose={closePopUp}
        setOpenPopUp={setOpenPopUp}
        data={data}
        attachments={attachments}
        setAttachments={setAttachments}
        projectName={projectName}
        status={status}
        taskName={taskName}
        sprintName={sprintName}
        userArr={userArr}
        setUserArr={setUserArr}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        setTasks={setTasks}
      />
    </Box>
  );
}
