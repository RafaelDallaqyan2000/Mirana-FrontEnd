import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function PageButtons({ n, count, pathname }) {
  const array = new Array(count).fill();
  return (
    <>
      {array.map((e, i) => (
        <NavLink
          end
          to={`/${pathname}${i + n === 1 ? "" : "/" + (i + n)}`}
          key={i}
        >
          <Box> {i + n} </Box>
        </NavLink>
      ))}
    </>
  );
}
export default PageButtons;
