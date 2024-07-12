import { Box } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  box: {
    width: "24px",
    height: "24px",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "1px solid #FFFFFF",
  },
});
export function RandomColor({
  width,
  height,
  lastName = "A",
  firstName = "A",
}) {
  const style = useStyle();
  const ABC = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  let index = ABC.indexOf(lastName[0]);
  let colorAndBackground = [
    { background: "rgba(44, 41, 157, 12%)", color: "rgba(44, 41, 157, 50%)" },
    { background: "rgba(252, 187, 61, 31%)", color: "rgba(177, 118, 4, 50%)" },
    { background: "rgba(252, 72, 61, 22%)", color: "rgba(170, 45, 38, 50%)" },
    { background: "rgba(56, 150, 201, 25%)", color: "rgba(56, 150, 201, 50%)" },
    { background: "rgba(61, 192, 90, 17%)", color: "rgba(45, 113, 60, 50%)" },
    {
      background: "rgba(56, 184, 201, 25%)",
      color: "rgba(44, 169, 186, 100%)",
    },
    { background: "rgba(149, 143, 11, 25%)", color: "rgba(159, 152, 0, 100%)" },
    {
      background: "rgba(204, 83, 120, 25%)",
      color: "rgba(204, 83, 120, 100%)",
    },
    { background: "rgba(0, 60, 214, 25%)", color: "rgba(24, 49, 113, 100%)" },
  ];
  let color =
    index <= 2
      ? colorAndBackground[0].color
      : index > 2 && index <= 5
      ? colorAndBackground[1].color
      : index > 6 && index <= 8
      ? colorAndBackground[2].color
      : index > 8 && index <= 11
      ? colorAndBackground[3].color
      : index > 11 && index <= 14
      ? colorAndBackground[4].color
      : index > 14 && index <= 18
      ? colorAndBackground[5].color
      : index > 18 && index <= 21
      ? colorAndBackground[6].color
      : colorAndBackground[7].color;

  let background =
    index <= 2
      ? colorAndBackground[0].background
      : index > 2 && index <= 5
      ? colorAndBackground[1].background
      : index > 6 && index <= 8
      ? colorAndBackground[2].background
      : index > 8 && index <= 11
      ? colorAndBackground[3].background
      : index > 11 && index <= 14
      ? colorAndBackground[4].background
      : index > 14 && index <= 18
      ? colorAndBackground[5].background
      : index > 18 && index <= 21
      ? colorAndBackground[6].background
      : colorAndBackground[7].background;

  return (
    <div
      style={{
        width: { width },
        height: { height },
        background: "#fff",
        borderRadius: "50%",
      }}
    >
      <Box
        className={style.box}
        sx={{
          color: color,
          background: background,
        }}
      >
        {firstName[0] + lastName[0]}
      </Box>
    </div>
  );
}
