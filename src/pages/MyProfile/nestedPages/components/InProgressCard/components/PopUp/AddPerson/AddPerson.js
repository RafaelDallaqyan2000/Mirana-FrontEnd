import {Box, TextField} from "@mui/material";
import {Person} from "./Person/Person";
import "./addPerson.css";
import React, { useCallback, useEffect, useState } from "react";
import { getListCompany } from "../../../../../../../../services";

export function AddPerson({
                              width = "200px",
                              setState,
                              userArr,
                              setUserArr,
                              taskId,
                          }) {
    const [arr, setArr] = useState([]);
    const [state, setForceState] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState("");

    const forceRender = useCallback(() => {
        setForceState((prev) => !prev);
    }, []);

    useEffect(() => {
        getListCompany(taskId, searchInputValue).then((data) =>
            setArr(data.members)
        );
    }, [searchInputValue]);

    return (
            <Box className="addPersonContainer" id={taskId}>
                <Box className="header">
                    <span>Members</span>
                    <img
                        onClick={(e) => setState(false)}
                        style={{width: "9px", cursor: "pointer"}}
                        src={require("../../../../../../../../images/closeIcon.svg")}
                        alt="close"
                    />
                </Box>
                <Box className="input">
                    <TextField
                        onChange={(e) => setSearchInputValue(e.target.value)}
                        variant="standard"
                        border="0"
                        placeholder="Some text"
                        InputProps={{
                            startAdornment: (
                                <img
                                    className="inputIcone"
                                    src={require("../../../../../../../../images/duble.svg")}
                                />
                            ),
                        }}
                        sx={{
                            // fontSize : "8px",
                            background: "#fff",
                            width: width,
                            fontSize: "5px",
                            "& .MuiInput-underline:after": {
                                borderBottom: 0,
                                display: "none",
                            },
                        }}
                    />
                </Box>
                <Box className="body">
                    <span>Board members</span>
                </Box>
                <Box className="personsDiv">
                    {arr
                    .sort((a, b) => (a.isInTask ? -1 : 1))
                    .map((person) => {
                        return (
                            <Person
                                userArr={userArr}
                                setUserArr={setUserArr}
                                key={person.id}
                                onChange={forceRender}
                                data={person}
                                taskId={taskId}
                            />
                        );
                    })}
                </Box>

            </Box>
    );
}
