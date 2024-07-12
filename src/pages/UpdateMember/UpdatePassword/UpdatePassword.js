import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { Button, Input, passwordRegEx} from "../../../shared";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { setConfirmPassword, setUpPassword, setToken } from "../../../redux";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { updateMemberFetch } from "../../../services";

const mapStateToProps = (state) => {
  return {
    password: state.updateMember.password,
    confirmPassword: state.updateMember.confirmPassword,
    firstName: state.updateMember.firstName,
    lastName: state.updateMember.lastName,
    phone: state.updateMember.phone,
    birthDate: state.updateMember.birthDate,
    token: state.updateMember.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setConfirmPassword: (x) => {
      dispatch(setConfirmPassword(x));
    },
    setUpPassword: (x) => {
      dispatch(setUpPassword(x));
    },
    setToken: (x) => {
      dispatch(setToken(x));
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

export const UpdatePassword = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    password,
    firstName,
    lastName,
    phone,
    birthDate,
    token,
    setUpPassword,
    confirmPassword,
    setConfirmPassword,
    setEmail,
    setFirstName,
    setLastName,
    setName,
    setPhone,
    setDate,
  }) => {
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [openPassword, setOpenPassword] = useState(false);
    const [openConfirmPassword, setOpenConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const styles = useStyles();
    const navigate = useNavigate();

    function Submit(e) {
      e.preventDefault();
      if (!passwordRegEx(password)) {
        setErrorPassword(
          "password should contain at least 8 length, 2 letters, 1 uppercase, 1 symbol"
        );
      } else if (confirmPassword !== password) {
        setErrorConfirmPassword("password do not match");
      }
      if (passwordRegEx(password) && confirmPassword === password) {
        updateMemberFetch(
          firstName,
          lastName,
          password,
          phone,
          birthDate,
          token
        )
          .then((data) => {
            if (data.success) {
              navigate("");
              setUpPassword("");
              setConfirmPassword("");
              setEmail("");
              setLastName("");
              setFirstName("");
              setName("");
              setPhone("");
              setDate("");
              setToken("");
            } else {
              setErrorConfirmPassword(data.errorMessage);
            }
          })
          .catch((e) => {
            setLoading(false);
            setErrorConfirmPassword("Failed to sing up!");
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }

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
          sx={{
            position: "absolute",
            top: "34.5px",
            left: "31px",
            cursor: "pointer",
          }}
        >
          <Link to="/enter_email">
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
            Make Password
          </Typography>
          <Box>
            <form onSubmit={(e) => Submit(e)}>
              <fieldset
                disabled={loading}
                style={{ width: "100%", border: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                  }}
                >
                  <Input
                    required
                    id="inputPassword"
                    inputName="Password"
                    placeholder="Type your Password"
                    value={password}
                    type={openPassword ? "text" : "password"}
                    onChange={(e) => {
                      setUpPassword(e.target.value);
                      setErrorPassword("");
                    }}
                    helperText={errorPassword}
                    stateError={errorPassword}
                    iconEnd={
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={(e) => setOpenPassword(!openPassword)}
                        src={
                          openPassword
                            ? require("../../../images/unLock.svg")
                            : require("../../../images/lock.svg")
                        }
                        alt=""
                      />
                    }
                  />
                  <Input
                    required
                    id="inputPassword"
                    inputName="Confirm password"
                    placeholder="Repeat your password"
                    type={openConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setErrorConfirmPassword("");
                    }}
                    helperText={errorConfirmPassword}
                    stateError={errorConfirmPassword}
                    iconEnd={
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={(e) =>
                          setOpenConfirmPassword(!openConfirmPassword)
                        }
                        src={
                          openConfirmPassword
                            ? require("../../../images/unLock.svg")
                            : require("../../../images/lock.svg")
                        }
                        alt=""
                      />
                    }
                  />
                </Box>
                <Box
                  sx={{
                    marginTop: "60px",
                    display: "flex",
                    justifyContent: "flex-end ",
                  }}
                >
                  <Button type="submit" sx={{ width: "157px" }}>
                    <Typography variant="span">Submit</Typography>
                  </Button>
                </Box>
              </fieldset>
            </form>
          </Box>
        </Box>
      </Grid>
    );
  }
);
