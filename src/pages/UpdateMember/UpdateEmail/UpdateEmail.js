import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, phoneRegEx} from "../../../shared";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { setEmail, setPhone, setDate } from "../../../redux";
import { connect } from "react-redux";
import "./UpdateEmail.css";
import { useNavigate } from "react-router";

const mapStateToProps = (state) => {
  return {
    email: state.updateMember.email,
    phone: state.updateMember.phone,
    date: state.updateMember.date,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEmail: (x) => {
      dispatch(setEmail(x));
    },
    setPhone: (x) => {
      dispatch(setPhone(x));
    },
    setDate: (x) => {
      dispatch(setDate(x));
    },
  };
};

const useStyles = makeStyles({
  hh: {
    color: "rgba(64, 80, 81, 0.77)",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.13)",
    display: "flex",
    justifyContent: "center",
  },
});

export const UpdateEmail = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ email, setEmail, phone, setPhone, date, setDate }) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [phoneError, setPhoneError] = useState("");
  function Submit(e) {
    e.preventDefault();
    if (phoneRegEx(phone)) {
      navigate("/update_password");
    } else {
      setPhoneError("length should be 8");
    }
  }
  return (
    <Grid
      display="flex"
      borderRadius="4px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.18)"
      justifyContent="center"
      xl={5}
      lg={5}
      md={5}
      sm={12}
      xs={12}
      item
    >
      <Box
        sx={{
          position: "absolute",
          top: "34.5px",
          left: "31px",
          cursor: "pointer",
        }}
      >
        <Link to="/update_name">
          <img src={require("../../../images/leftRow.svg")} />
        </Link>
      </Box>

      <Box
        width="405px"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100vh",
        }}
      >
        <Typography className={styles.hh} variant="h1">
          Enter your personal Member
        </Typography>
        <Box width={"30vw"} minWidth={300}>
          <form onSubmit={(e) => Submit(e)}>
            <Input
              required
              sx={{ marginBottom: "17px" }}
              type="email"
              id="inputEmail"
              inputName="E-Mail"
              placeholder="name@mail.com"
              value={email}
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              width={"30vw"}
              minWidth={300}
            >
              <Input
                sx={{
                  marginBottom: "17px",
                  marginRight: "25px",
                  width: "6vw",
                  minWidth: "92px",
                  ".MuiOutlinedInput-root": {
                    fieldset: {
                      borderColor: "rgba(56, 150, 201, 1) !important",
                    },
                  },
                  ".MuiOutlinedInput-root:hover fieldset": {
                    borderWidth: "1px",
                    borderColor: "rgba(0, 0, 0, 0.26)",
                    boxShadow: "none",
                  },
                  ".MuiOutlinedInput-root:hover": {
                    boxShadow: "none",
                  },
                }}
                id="inputPassword"
                inputName="Phone"
                placeholder="+374"
                value="+374"
                disabled={true}
                iconEnd={
                  <img
                    // style={{ cursor: "pointer" }}
                    src={require("../../../images/Polygon.svg")}
                    alt=""
                  />
                }
              ></Input>
              <Input
                required
                sx={{ marginBottom: "17px", width: "100%" }}
                id="inputPassword"
                inputName="	&shy;"
                placeholder="- - -  - - -"
                onChange={(e) => {
                  setPhone(e.target.value.length < 9 ? e.target.value : phone);
                  setPhoneError("");
                }}
                disableUnderline={true}
                maxLength={10}
                type="number"
                value={phone}
                helperText={phoneError}
                stateError={phoneError}
              />
            </Box>
            <Input
              required
              id="inputDate"
              inputName="Date of birth"
              placeholder="dd/mm/yyyy"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              iconEnd={
                <img
                  onClick={() => {
                    document.getElementById("inputDate").showPicker();
                  }}
                  src={require("../../../images/calendar.svg")}
                  alt="Calendar"
                  style={{ cursor: "pointer" }}
                />
              }
            />
            <Box
              sx={{
                marginTop: "60px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button type="submit" sx={{ width: "157px", marginLeft: "15px" }}>
                <Typography variant="span">Next</Typography>
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Grid>
  );
});
