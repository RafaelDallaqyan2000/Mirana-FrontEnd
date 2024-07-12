import React, { useState } from "react";
import { Button, Input } from "../../shared";
import "./SignInLog.css";
import Grid from "@mui/material/Grid";
import { Checkbox, Typography, InputLabel, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { loginFetch } from "../../services";

// const mapStateToProps = (state, ownProps) => {
//   return {
//     password: state.signIn.password,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPassword: (value) => dispatch(setPassword(value)),
//   };
// };

// export const SignInLog = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(({ password, setPassword }) => {});

export function SignInLog() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  // const [stateErrorEmail, setStateErrorEmail] = useState(""); //Wrong password or email address
  const [stateErrorPassword, setStateErrorPassword] = useState(""); //Wrong password or email address
  const [loading, setLoading] = useState(false);
  const [passwordSee, setPasswordSee] = useState(true);
  const Navigate = useNavigate();
  function Submit(email, password, checked) {
    setLoading(true);
    return loginFetch(email, password, checked)
      .then((data) => {
        if (data.success) {
          Navigate("", { replace: true });
          window.location.reload();
        } else setStateErrorPassword(data.errorMessage);
      })
      .catch(() => {
        setLoading(false);
        setStateErrorPassword("No Connect");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <Grid
      height="100vh"
      item
      xl={5}
      lg={5}
      md={5}
      sm={12}
      xs={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="4px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.18)"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Submit(email, password, checked);
        }}
      >
        <fieldset disabled={loading} style={{ border: 0 }}>
          <Box display="flex" flexDirection="column">
            <Typography mb={5} display="inline" variant="h1" textAlign="center">
              Sign In
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box
                display="flex"
                width={"30vw"}
                minWidth={300}
                flexDirection="column"
                gap="20px"
              >
                <Input
                  required
                  id={"inputEmail"}
                  type={"email"}
                  inputName={"Email"}
                  placeholder="name@mail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStateErrorPassword("");
                  }}
                  iconEnd={
                    <img
                      src={require("../../images/message.svg")}
                      alt="vector"
                    />
                  }
                  // helperText={stateErrorEmail}
                  stateError={stateErrorPassword}
                />
                <Input
                  required
                  id="inputPassword"
                  type={passwordSee ? "password" : "text"}
                  inputName={"Password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setStateErrorPassword("");
                  }}
                  iconEnd={
                    <img
                      src={require(passwordSee
                        ? "../../images/lock.svg"
                        : "../../images/unLock.svg")}
                      alt="lock"
                      onClick={() => {
                        setPasswordSee(!passwordSee);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  }
                  stateError={stateErrorPassword}
                  helperText={stateErrorPassword}
                />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <InputLabel htmlFor="remember" sx={{ cursor: "pointer" }}>
                    <Checkbox
                      id="remember"
                      checked={checked}
                      onChange={() => {
                        setChecked(!checked);
                      }}
                    />
                    Remember Me
                  </InputLabel>

                  <Link style={{ textDecoration: "none" }} to="/forg_pass">
                    <Typography variant="body2">Forgot Password</Typography>
                  </Link>
                </Box>

                <Box display="flex" justifyContent="flex-end">
                  <Button
                    sx={{ width: "157px", marginTop: "45px" }}
                    variant="contained"
                    type="submit"
                  >
                    <Typography variant="span">Sign In</Typography>
                  </Button>
                </Box>
              </Box>
              <Link style={{ textDecoration: "none" }} to="/sign_up_name">
                <Box mt={3} display="flex" justifyContent="center">
                  <Typography
                    mr={1}
                    variant="body1"
                    textAlign="center"
                    justifyContent="flex-end"
                  >
                    Don't have an account?
                  </Typography>
                  <Typography variant="body2" display="inline">
                    Sign Up
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Box>
        </fieldset>
      </form>
    </Grid>
  );
}
