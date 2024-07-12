import React from "react"
import {Box, TextField, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import "./status.css"

const useStyle = makeStyles({
    text: {
        fontFamily: "Monsterrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "17px",
        color: "rgba(64, 62, 58, 0.79)",
    }
})

export function Status({status}) {
    const style = useStyle()
    return (
        <div className="statusContainer" style={{
            background: status ? (
                status === "Done" ? "rgba(61, 192, 90, 0.17)" :
                    status === "In progress" ? "rgba(252, 187, 61, 0.31)" :
                        status === "Test" ? "rgba(252, 72, 61, 0.22)" :
                            status === "To do" ? "rgba(44, 41, 157, 0.12)" :
                                "rgba(252, 187, 61, 0.31)"
            ) : "rgba(252, 187, 61, 0.31)"
        }}>
            <Box className="online" sx={{
                background: status ? (
                        status === "Done" ? "linear-gradient(225.44deg, rgba(44, 41, 157, 0.79) -41.65%, rgba(44, 41, 157, 0) 137.53%)" :
                        status === "In progress" ? " linear-gradient(225deg, #FCBB3D 4.17%, rgba(252, 187, 61, 0) 137.5%)" :
                        status === "Test" ? "linear-gradient(225deg, #FC483D 4.17%, rgba(252, 72, 61, 0) 137.5%)" :
                        status === "To do" ? "linear-gradient(225.44deg, rgba(44, 41, 157, 0.79) -41.65%, rgba(44, 41, 157, 0) 137.53%)" :
                                        " linear-gradient(225deg, #FCBB3D 4.17%, rgba(252, 187, 61, 0) 137.5%)"
                    ) : "linear-gradient(225deg, #FCBB3D 4.17%, rgba(252, 187, 61, 0) 137.5%);"
            }}></Box>
            <Typography className={style.text}>{status ? (
                status === "In progress" ? "In Progress" :
                status === "Test" ? "Test" :
                status === "Done" ? "Done" :
                status === "To do" ? "To Do" : "In Progress"
            ) : "In Progress"}</Typography>
        </div>
    )
}