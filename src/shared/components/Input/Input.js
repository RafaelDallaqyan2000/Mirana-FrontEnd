import {
  Box,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import React from "react";
import "./Input.css";

const useStyles = makeStyles({
  styleInput: {
    width: "100%",
    "& .MuiOutlinedInput-input": {
      padding: "8px 14px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        height: "26px",
        borderWidth: "1px",
        borderColor: "rgba(56, 150, 201, 1)",
        padding: "8px 0 ",
      },
      "&:hover fieldset": {
        borderWidth: "1.5px",
        borderColor: "rgba(56, 150, 201, 1)",
        boxShadow: "3px 7px 33px 0px rgba(56, 150, 201, 0.33)",
      },
      "&.Mui-focused fieldset": {
        borderWidth: "2px",
        borderColor: "rgba(56, 150, 201, 1)",
      },
      "& fieldset:disabled": {
        borderWidth: "1.5px",
        borderColor: "rgba(56, 150, 201, 0.26)",
        boxShadow: "none",
      },
      "&.Mui-error": {
        "&:hover fieldset": {
          borderWidth: "1.5px",
          borderColor: "rgba(234, 0, 0, 1)",
          boxShadow: "3px 7px 33px 0px rgba(234, 0, 0, 0.33)",
        },
      },
    },
  },
  noBorder: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderWidth: "0",
      },
    },
  },
  styleLabel: {
    "&.MuiInputLabel-root": {
      fontFamily: "Montserrat",
      // marginLeft: "20px",
      marginBottom: "6px",
      fontWeight: "600",
      color: "rgba(64, 80, 81, 0.77)",
    },
  },
});

export function Input({
  width = "100%",
  height = "40px",
  id,
  inputName,
  type = "text",
  value,
  iconEnd,
  iconStart,
  helperText,
  stateError,
  disabled = false,
  ...rest
}) {
  const input = useStyles();
  //let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.-_])(?=.{8,})");
  return (
    <Box marginTop={1}>
      <InputLabel htmlFor={id} className={input.styleLabel}>
        {inputName}
      </InputLabel>
      {/*<Typography variant="h6">{inputName}</Typography>*/}
      <TextField
        width={width}
        height={height}
        value={value}
        id={id}
        type={type}
        error={stateError}
        helperText={helperText}
        className={input.styleInput}
        disabled={disabled}
        InputProps={{
          endAdornment: iconEnd,
          startAdornment: iconStart,
        }}
        {...rest}
      />
    </Box>
  );
}
