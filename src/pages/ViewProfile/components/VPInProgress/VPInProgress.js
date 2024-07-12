import React, { useEffect, useState } from "react";
import {getTasksInProgress} from "../../../../services";
import {InProgressCard} from "../../../MyProfile/nestedPages/components";
import {Box} from "@mui/material";

export function VPInProgress() {
    const [actionOpen, setActionOpen] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    let id = window.location.pathname.split("/")[2]

    useEffect(() => {
        window.addEventListener("click", openDropdown);
        return () => {
            window.removeEventListener("click", openDropdown);
        };
    }, []);

    useEffect(() => {
        getTasksInProgress(id)
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
                {tasks.map((task) => {
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
                })}
            </Box>
        </Box>
    );
}