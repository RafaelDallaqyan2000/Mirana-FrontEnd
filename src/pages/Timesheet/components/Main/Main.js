import React, {useEffect, useState} from "react"
import {WorkDetails} from "../WorkDetails";
import {Box} from "@mui/material";
import {AddDetails} from "../AddDetails";
import {Pagination, Table, TimesheetTable, getFormatTimesheetDate} from "../../../../shared";
import { getWorkDetails, getListOfProjects} from "../../../../services";
import {useParams} from "react-router-dom";
import "./Main.css"

export function Main(){
    const [disableBtn, setDisableBtn] = useState(false);
    const [selectProjects, setSelectProjects] = useState([]);
    const [selectType, setSelectType] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [workArr, setWorkArr] = useState([]);
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false)
    let play = true
    const {page} = useParams();

    useEffect(() => {
        getListOfProjects()
        .then(data => {
            setSelectProjects(data.projects)
            setSelectType(data.type)
        }).catch(error => error)
    }, [])

    useEffect(() => {
        getWorkDetails(page,15)
        .then(data => {
            setCount(data.countOfRows)
            setWorkArr(data.workList)
            data.workList[0].isStarted ? setDisableBtn(true) : setDisableBtn(false)
            setRunning(data.workList[0].isStarted)
        }).catch(error => error)
    }, [page])

    return (
        <Box className="bodyInTimesheet">
            <Box className="headerBox">
                <span className="headerSpan">Daily work details</span>
            </Box>
            <AddDetails inputVal={inputValue} setInputVal={setInputValue}
                        selectProj={selectProjects} selectType={selectType}
                        setWorkArr={setWorkArr} disabled={disableBtn}
            />

            <TimesheetTable items={["ID", "Type", "TaskID/Description", "Start", "End", "Duration", "Date"]}>
                {workArr ? workArr.map((e, i) => {
                    return (
                        <WorkDetails key={e.id} id={e.id} type={e.type} description={e.description}
                                     duration={e.duration ? e.duration : ""}
                                     date={e.date ? getFormatTimesheetDate(e.date)  : ""}
                                     started={e.start ? e.start.length > 10 ? e.start.slice(11, 16) : e.start : ""}
                                     endTime={e.end ? e.end.slice(11, 16) : ""} index0={i == 0 ? true : false}
                                     setDisabledBtn={ setDisableBtn} running={running} setRunning={setRunning}
                                     playTrue={i === 0 ? play : !play} isStarted={e.isStarted} page={page}
                        />
                    )
                }) : ""}
            </TimesheetTable>

            <Box className="pagination">
                {workArr ? <Pagination countOfPage={15} countUsers={count} pathname="timesheet" /> : "" }
            </Box>
        </Box>
    )
}