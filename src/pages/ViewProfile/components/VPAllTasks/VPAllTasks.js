import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pagination, Table, getDateAllTasks } from "../../../../shared";
import {getUserTasks, getMemberTaskDetails, HOST, getUserDetails, getMemberById} from "../../../../services";
import { PopUp} from "../../../MyProfile/nestedPages/components";
import { Box } from "@mui/material";
import {getMemberTasks} from "../../../../services";

export function VPAllTasks() {
    const [tasks, setTasks] = useState([]);
    const [countOfTasks, setCountOfTasks] = useState("6");
    const [attachments, setAttachments] = useState([]);
    const [projectName, setProjectName] = useState("");
    const [status, setStatus] = useState("in progress");
    const [taskName, setTaskName] = useState("");
    const [sprintName, setSprintName] = useState("");
    const [userArr, setUserArr] = useState([]);
    const [openPopUp, setOpenPopUp] = useState(false);
    const [data, setData] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [actionOpen, setActionOpen] = useState(null);
    let { page = 1 } = useParams();
    const count = 6;
    const Token = localStorage.getItem("token");
    let locStorID = localStorage.getItem("id")
    let id = window.location.pathname.split("/")[2]

    useEffect(() => {
        getMemberTasks(Token, id, page, count)
        .then(data => {
            setTasks(data.task)
            setCountOfTasks(data.countOfTasks)
        })
        .catch(error => error)

    }, [page]);


    const closePopUp = () => {
        setOpenPopUp(false);
    };
    const openDropdown = (e) => {
        e.stopPropagation();
        setActionOpen(e.target.id);
    };
    useEffect(() => {
        window.addEventListener("click", openDropdown);
        return () => {
            window.removeEventListener("click", openDropdown);
        };
    }, []);
    return (
        <Box
            height="calc(100vh - 174px)"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Box
                backgroundColor="#fff"
                sx={{ overflowY: "auto", overflowX: "auto" }}
            >
                <Table items={["ID", "Title", "Status", "Result", "Projects", "Date"]}>
                    {tasks.map((el) => (
                        <tr
                            key={el.id}
                            id={el.id}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                getMemberTaskDetails(el.id)
                                .then((e) => {
                                    setData(e);
                                    setAttachments(e[0].attachments);
                                    setProjectName(e[0].projectName);
                                    setStatus(e[0].status);
                                    setTaskName(e[0].taskName);
                                    setSprintName(e[0].sprintName);
                                    setUserArr(e[0].assignments);
                                    setStartDate(e[0].startDate);
                                    setEndDate(e[0].endDate);
                                })
                                .catch((error) => error);
                                setOpenPopUp(el.id);
                            }}
                        >
                            <td>{el.id}</td>
                            <td>{el.title}</td>
                            <td>{el.status}</td>
                            <td>
                                <Box className={`action ${el.result}`}>{el.result}</Box>
                            </td>
                            <td>{el.project}</td>
                            <td>
                                {getDateAllTasks(el.startDate)}
                                {el.endDate ? ` / ${getDateAllTasks(el.endDate)}` : null}
                            </td>
                        </tr>
                    ))}
                </Table>
            </Box>
            <Box
                width="100%"
                backgroundColor="#fff"
                display="flex"
                justifyContent="center"
                pb="20px"
            >
                <Pagination
                    countUsers={countOfTasks}
                    countOfPage={count}
                    pathname={`viewProfile/${id}/all_tasks`}
                />
            </Box>
            <PopUp
                id={openPopUp}
                array={userArr}
                actionOpen={actionOpen}
                openDropdown={openDropdown}
                attachments={attachments}
                setAttachments={setAttachments}
                openPopUp={openPopUp}
                onClose={closePopUp}
                setOpenPopUp={setOpenPopUp}
                data={data}
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
