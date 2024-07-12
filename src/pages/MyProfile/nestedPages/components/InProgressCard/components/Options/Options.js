import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";

const useStyles = makeStyles({
  styleTextOption: {
    fontFamily: "Montserrat !important",
    fontSize: "10px !important",
    fontWeight: "500 ",
    color: "rgba(0, 0, 0, 0.8) !important",
    padding: "6px 0",
    opacity: "0.48",
  },
});

export function Options({ id, state, openDropdown }) {
  const styles = useStyles();

  //   function handleClose(e) {
  //     e.stopPropagation();
  //     setState(false);
  //   }

  //   useEffect(() => {
  //     window.addEventListener("click", (e) => {
  //       handleClose(e);
  //     });

  //     return () => {
  //       window.removeEventListener("click", (e) => {
  //         handleClose(e);
  //       });
  //     };
  //   }, []);

  return state === id ? (
    <Box
    id={`${id}opt`}
      width="133px"
      backgroundColor="white"
      position="absolute"
      top="25px"
      left="10px"
      rigth="10px"
      zIndex="15"
      boxShadow="0px 4px 8px rgba(56, 150, 201, 0.14)"
      borderRadius="4px"
      p="0 7px"
    >
      <Typography className={styles.styleTextOption}>Change members</Typography>
      <Typography className={styles.styleTextOption}>Change dates</Typography>
      <Typography className={styles.styleTextOption}>Remove card</Typography>
    </Box>
  ) : (
    ""
  );
}
