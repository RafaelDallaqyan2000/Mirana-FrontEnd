import React, {useState, useEffect} from "react"
import {Box, TextField} from "@mui/material";
import {setWorkHourse, editWorkDetails} from "../../../../services";
import "./WorkDetails.css"


let intervalMinute = 0;

export function WorkDetails({
                                id, type, playTrue, started, endTime, setDisabledBtn,
                                description, duration, date, isStarted, index0, page, running, setRunning
                            }) {
    const [state, setState] = useState(true)
    const [startTime, setStartTime] = useState(" ")
    const [end, setEnd] = useState(endTime)
    const [start, setStart] = useState(isStarted)
    const [localDescription, setLocalDescription] = useState(description)
    const [trueDescritption, setTrueDescription] = useState(description)

  const [localDuration, setLocalDuration] = useState(duration);

    const [hourse, setHourse] = useState(localDuration.slice(0, 2));
    const [minute, setMinute] = useState(localDuration.slice(4, 6));

    useEffect(() => {
        if(index0) {
            clearInterval(intervalMinute);
            if (running) {
               intervalMinute= setInterval(() => {
                    setMinute((prevTime) => {
                        setHourse((prev) => +prevTime > 58 ? +prev + 1 : prev);
                        return +prevTime > 58 ? "00" : +prevTime + 1;
                    });
                }, 60000); // 60 000
            }
        }
    },[running]) ;

    return (
        state ?
            <tr className="onlyDivTrue">
                <td>{id}</td>
                <td>{type}</td>
                <td><p className="description">{localDescription}</p></td>
                <td>{started ? started : startTime}</td>
                <td>{!start ? end : ""}</td>
                <td>{hourse + "h " + minute + "m"}</td>
                <td>{date}</td>
                <td>
                    <div>
                        {
                            !page ?
                                playTrue ?
                                    <>
                                        {
                                            start ? <img className="stopIcon"
                                                         src={require("../../../../images/timesheet/Stop.svg")}
                                                         alt="Stop" style={{cursor: "pointer", paddingRight: "4px"}}
                                                         onClick={() => {

                                                             return setWorkHourse(id, false)
                                                             .then((data) => {
                                                                 setDisabledBtn(false)
                                                                 setStart(false)
                                                                 setRunning(false)
                                                                 setLocalDuration(data.duration)
                                                                 return setEnd(data.currentTime.slice(11, 16))
                                                             })
                                                             .catch(error => error)
                                                         }}
                                            /> : <img className="startIcon"
                                                      src={require("../../../../images/timesheet/Start.svg")}
                                                      alt="Start" style={{cursor: "pointer", paddingRight: "4px"}}
                                                      onClick={() => {
                                                          return setWorkHourse(id, true)
                                                          .then((data) => {
                                                              setRunning(true)
                                                              setDisabledBtn(true)
                                                              setStart(true)
                                                              setEnd(" ")
                                                              setStartTime(data.currentTime.slice(11, 16))
                                                              setLocalDuration(data.duration)
                                                          })
                                                          .catch(error => error)
                                                      }}
                                            />
                                        }
                                        <img className="editIcon" src={require("../../../../images/timesheet/edit.svg")}
                                             alt="Edit" style={{cursor: "pointer", padding: "0 8px 0 2px"}}
                                             onClick={() => {
                                                 setState(false);
                                                 setLocalDescription(localDescription)
                                             }}
                                        />
                                    </>
                                    : ""
                                : ""
                        }
                    </div>
                </td>
            </tr>
            :
            <tr className="onlyDivFalse">
                <td className="id">{id}</td>
                <td className="type">{type}</td>
                <td>
                    <TextField
                        autoFocus
                        fullWidth
                        variant="standard"
                        multiline
                        value={localDescription}
                        onChange={(e) => setLocalDescription(e.target.value)}
                        onFocus={(e) => {
                            let val = e.target.value;
                            e.target.value = '';
                            e.target.value = val;
                            // e.target.select()
                        }}
                        inputProps={{
                            maxLength: 55,
                            style: {
                                fontFamily: "Montserrat",
                                fontSize: "14px",
                                fontWeight: "500",
                                height: "74px",
                                color: " rgba(57, 58, 60, 0.8)",
                            }
                        }}
                        sx={{
                            width: "211px",
                            margin: "0 19px",
                            underline: 0,
                            "& .MuiInput-underline:before": {
                                borderBottom: 0,
                                display: "none",
                            },
                            "& .MuiInput-underline:after": {
                                borderBottom: 0,
                                display: "none",
                            },
                            // "&:hover": {
                            //     boxShadow: " 0px 4px 12px rgba(56, 150, 201, 0.19)", //lightblue
                            // },
                        }}
                    />
                    <button type="submit" hidden>hello world</button>
                </td>
                <td className="startTime">{started ? started : startTime}</td>
                <td className="endTime">{end ? end : ""}</td>
                <td className="duration">{hourse}h:{minute}m</td>
                <td className="date">{date}</td>
                <td>
                    <div style={{cursor: "pointer"}}>
                        <img src={require("../../../../images/timesheet/true.svg")}
                             alt="enter"
                             onClick={() => {
                                 return editWorkDetails(id, localDescription)
                                 .then(() => {
                                     setState(true)
                                     setTrueDescription(localDescription)
                                 })
                                 .catch(error => error)
                             }}
                        />
                        <img width="11px" src={require("../../../../images/timesheet/close.svg")}
                             alt="Close"
                             onClick={() => {
                                 setState(true)
                                 setLocalDescription(trueDescritption)
                             }}
                        />
                    </div>
                </td>
            </tr>
    )
}
