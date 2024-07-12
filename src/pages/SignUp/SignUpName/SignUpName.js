import React, { useState } from "react";
import { Button, Input } from "../../../shared";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import { setFirstName, setLastName, setName } from "../../../redux";
import "./SignUpName.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const mapStateToProps = (state) => {
  return {
    name: state.signUp.companyName,
    lastName: state.signUp.lastName,
    firstName: state.signUp.firstName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (x) => {
      dispatch(setName(x));
    },
    setLastName: (x) => {
      dispatch(setLastName(x));
    },
    setFirstName: (x) => {
      dispatch(setFirstName(x));
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

export const SignUpName = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ name, setName, lastName, setLastName, firstName, setFirstName }) => {
  const navigate = useNavigate();
  const styles = useStyles();
  return (
    <Grid
      display="flex"
      borderRadius="4px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.18)"
      justifyContent="center"
      lg={5}
      md={5}
      xs={12}
      sm={12}
      item
    >
      <Box
        width={"30vw"}
        minWidth={300}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100vh",
        }}
      >
        <Typography className={styles.hh} variant="h1">
          Sign Up
        </Typography>
        <Box>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/sign_up_email");
            }}
          >
            <Input
              sx={{ marginBottom: "17px" }}
              id="inputEmail"
              inputName="Company name"
              placeholder="Eneter your company name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              sx={{ marginBottom: "17px" }}
              id="inputPassword"
              inputName="First Name"
              placeholder="Type your name"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <Input
              id="inputPassword"
              inputName="Last Name"
              placeholder="Type your last name"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <Box
              sx={{
                marginTop: "60px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {/*<Link style={{textDecoration: "none"}} to="/sign_in_log">*/}
              {/*    <Button sx={{width: "157px"}}>*/}
              {/*        <Typography variant="span">Sign in</Typography>*/}
              {/*    </Button>*/}
              {/*</Link>*/}

              <Button type="submit" sx={{ width: "157px", marginLeft: "15px" }}>
                <Typography variant="span">Next</Typography>
              </Button>
            </Box>
          </form>
        </Box>
        <Typography sx={{ textAlign: "center" }}>
          Do you have an account already?
          <Link style={{ textDecoration: "none" }} to="/sign_in_log">
            <Typography sx={{}} variant="body2" display="inline" ml="5px">
              Sign In
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Grid>
  );
});
