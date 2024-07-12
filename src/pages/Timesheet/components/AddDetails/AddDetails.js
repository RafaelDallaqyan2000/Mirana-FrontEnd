import React, {useCallback, useState} from "react"
import {Box, TextField} from "@mui/material";
import {Button, Input, Select, SelectPro} from "../../../../shared";
import {addDailyWorkDetails} from "../../../../services";
import "./AddDetails.css"

export function AddDetails({
                               inputVal, setInputVal, disabled,
                               selectProj, selectType, setWorkArr,
                           }) {
    const [selectVal, setSelectVal] = useState("")
    const addDailyWork = useCallback(() => {
        return selectVal && inputVal ? addDailyWorkDetails(selectVal, inputVal)
            .then((data) => {
                setWorkArr(prev => [{
                    type : selectVal,
                    id : prev[0].id ? prev[0].id + 1 : "",
                    description : inputVal,
                    date : data.date,
                    duration : "00h 00m"
                }, ...prev])
            })
            .catch(error => error)
            : ""
    })
    return (
        <Box className="timesheetAddDetails">
            <Box className="timesheet">
                <span className="timesheetHeader">Add details</span>
                <Box className="divBody">
                    <Box className="div1">
                        <span className="selectAndInputSpan">Type</span>
                        <SelectPro width="218px" height="37px" marginTopMenu="-1px"
                                   fontWeight="400" placeholder="Type" all=""
                                   fontSize="14px" projects={selectProj}
                                   type={selectType}
                                   onChange={e => {
                                       setSelectVal(e.target.value)
                                   }}
                        />
                    </Box>
                    <Box className="div2">
                        <span className="selectAndInputSpan">id / Description</span>
                        <TextField
                            className="input"
                            variant="standard"
                            border="0"
                            placeholder="Text"
                            inputProps={{maxLength: 55,}}
                            onChange={e => setInputVal(e.target.value)}
                            sx={{
                                "& .MuiInput-underline:before": {
                                    borderBottom: 0,
                                    display: "none",
                                },
                                "& .MuiInput-underline:after": {
                                    borderBottom: 0,
                                    display: "none",
                                },
                                "&:hover": {
                                    boxShadow: " 0px 4px 12px rgba(56, 150, 201, 0.19)", //lightblue
                                },
                            }}
                        />
                    </Box>
                    <Box className="div3">
                        <Button height="37px" width="92.84px" type="submit"
                                fontWeight="500" fontSize="14px"
                                disabled={disabled}
                                onClick={addDailyWork}
                        >
                            + Add
                        </Button>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}