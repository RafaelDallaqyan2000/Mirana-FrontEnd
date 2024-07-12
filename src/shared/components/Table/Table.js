import { Box } from "@mui/material";
import React from "react";
import { Thead } from "./components";
import "./Table.css"

export function Table({ items, children }) {
  return (
    <Box margin="0 35px" heigth="calc(100vh - 273px)"  borderRadius="4px" border="1.5px solid rgba(11, 42, 58, 0.18)" >
      <table className="table">
        <Thead items={items} />
        <tbody>{children}</tbody>
      </table>
    </Box>
  );
}
