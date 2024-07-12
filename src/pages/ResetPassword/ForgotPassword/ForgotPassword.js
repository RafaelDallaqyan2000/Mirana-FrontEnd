import { Grid,  Typography } from "@mui/material";
import { Input, Button } from "../../../shared";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { forgotPasswordFetch } from "../../../services";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function emailFetchFunction(email) {
    forgotPasswordFetch(email)
      .then((data) => {
        if (data.success) {
          navigate("/check_email", { replace: true });
          window.location.reload();
        } else setError(data.errorMessage);
      })
      .catch(() => {
        setLoading(false);
        setError("No connenct");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <Grid
      item
      height="100vh"
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
      <fieldset disabled={loading} style={{ border: 0 }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            localStorage.setItem("email", email);
            emailFetchFunction(email);
          }}
        >
          <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <Box
              width="30vw"
              minWidth={300}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              gap="20px"
            >
              <Typography variant="h1" textAlign="center">
                Forgot Password
              </Typography>
              <Typography variant="h6" textAlign="center">
                No worries, we'll sent you reset instructions.
              </Typography>
              <Input
                required
                id={"emilPassword"}
                type={"email"}
                inputName={"Email"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                iconEnd={
                  <img
                    src={require("../../../images/message.svg")}
                    alt="vector"
                  />
                }
                placeholder="name@email.com"
                helperText={error}
                stateError={error}
              />
              <Box display="flex" justifyContent="center" pt="50px">
                <Button type="submit">
                  <Typography
                    width="20vw"
                    minWidth="180px"
                    fontFamily="Montserrat"
                    fontWeight="700"
                    fontSize="20"
                    variant="span"
                  >
                    Reset Password
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box>
              <Link style={{ textDecoration: "none" }} to="/sign_in_log">
                <Typography
                  fontFamily="Montserrat"
                  fontWeight="600, Semi Bold"
                  fontSize="14"
                  color="rgba(64, 80, 81, 0.44)"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <ArrowBack />
                  Back to log in
                </Typography>
              </Link>
            </Box>
          </Box>
        </form>
      </fieldset>
    </Grid>
  );
}
