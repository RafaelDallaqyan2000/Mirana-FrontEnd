import { Box, Typography } from "@mui/material";
import React from "react";

export function TimeBox({ time, range }) {
  return (
    <Box
      sx={{
        width: "234px",
        height: "77px",
        boxShadow: "0px 4px 8px rgba(11, 42, 58, 0.16)",
        borderRadius: "7px",
      }}
      display="flex"
      //   alignItems="center"
      backgroundColor="#fff"
      position="relative"
      mt="10px"
    >
      <img
        src={require("../../../../images/Clock(DailyWork).svg")}
        alt="clock"
        style={{
          width: "40px",
          height: "40px",
          margin: "13px 11px 0 20px",
        }}
      />
      <Box>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: 20,
            color: "#3896C9",
            m: "11px 0 -2px 0",
          }}
        >
          {time > 0 ? `+${time}` : time}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: 14,
            color: "#3896C9",
          }}
        >
          Hours
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: 14,
            color: "rgba(64, 80, 81, 0.59)",
          }}
          position="absolute"
          right={14}
          bottom={10}
        >
          {range}
        </Typography>
      </Box>
    </Box>
  );
}
