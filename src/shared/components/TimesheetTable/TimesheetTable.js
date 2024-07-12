import { Box } from "@mui/material";
import React from "react";
import { TheadTable } from "./component/TheadTable";
import "./TimesheetTable.css"

export function TimesheetTable({ items, children }) {
    return (
        <Box className="timesheetTableBox">
            <table className="timesheetTable">
                <TheadTable items={items} />
                <tbody className="tableBody">{children}</tbody>
            </table>
        </Box>
    );
}
