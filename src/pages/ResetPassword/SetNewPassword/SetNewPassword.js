import { ArrowBack } from "@mui/icons-material";
import { Grid, Typography, Box } from "@mui/material";
import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { recoverPasswordFetch } from "../../../services";
import { Button, Input, passwordRegEx } from "../../../shared";

export function SetNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [openPassword, setOpenPassword] = useState(false);
  const [openConfirmPassword, setOpenConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const resetPasswordFunction = useCallback(function(token, password) {
    setLoading(true);
    recoverPasswordFetch(token, password)
      .then((data) => {
        if (data.success) {
          navigate("/reset_password", { replace: true });
          window.location.reload();
        } else {
          setErrorPassword("No Connect");
        }
      })
      .catch(() => {
        setLoading(false);
      })
      .finally(setLoading(false));
  }, []);

  function Submit(e) {
    e.preventDefault();
    if (!passwordRegEx(password)) {
      setErrorPassword(
        "password should contain at least 8 length, 2 letters, 1 uppercase, 1 symbol"
      );
    } else if (confirmPassword !== password) {
      setErrorConfirmPassword("password do not match");
    } else {
      let token = new URLSearchParams(window.location.search).getAll("token");
      resetPasswordFunction(token[0], password);
    }
  }
  return (
    <Grid
      item
      xl={5}
      lg={5}
      md={5}
      sm={12}
      xs={12}
      borderRadius="4px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.18)"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        height="100vh"
      >
        <Box display="flex" flexDirection="column" gap="20px">
          <Typography textAlign="center" variant="h1">
            Set new password
          </Typography>
          <Typography textAlign="center" variant="h6">
            Your new password must be different to
            <Typography textAlign="center" variant="h6" fontWeight="1000">
              previously used passwords
            </Typography>
          </Typography>
        </Box>
        <fieldset disabled={loading} style={{ border: 0 }}>
          <form onSubmit={(e) => Submit(e)}>
            <Box
              display="flex"
              justifyContent="space-between"
              // height="50vh"
              maxHeight="600px"
              width={"30vw"}
              minWidth={300}
              flexDirection="column"
              gap="20px"
            >
              <Input
                required
                id="inputPassword"
                inputName="Password"
                placeholder="Type your Password"
                value={password}
                type={openPassword ? "text" : "password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorPassword("");
                }}
                helperText={errorPassword}
                stateError={errorConfirmPassword || errorPassword}
                iconEnd={
                  <img
                    style={{ cursor: "pointer" }}
                    onClick={(e) => setOpenPassword(!openPassword)}
                    src={
                      openPassword
                        ? require("../../../images/unLock.svg")
                        : require("../../../images/lock.svg")
                    }
                    alt="lock"
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
                stateError={errorConfirmPassword || errorPassword}
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
                    alt="lock"
                  />
                }
              />

              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                paddingTop="50px"
              >
                <Button type="submit">
                  <Typography
                    textAlign="center"
                    variant="span"
                    padding="0 40px"
                  >
                    Reset Password
                  </Typography>
                </Button>
              </Box>
            </Box>
          </form>
        </fieldset>
        <Box>
          <Link style={{ textDecoration: "none" }} to="/sign_in_log">
            <Typography
              display="flex"
              alignItems="center"
              fontFamily="Montserrat"
              fontWeight="600, Semi Bold"
              fontSize="14"
              color="rgba(64, 80, 81, 0.44)"
              pb="50px"
            >
              <ArrowBack />
              Back to log in
            </Typography>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
}
