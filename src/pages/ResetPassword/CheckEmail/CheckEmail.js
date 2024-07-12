import { ArrowBack } from "@mui/icons-material";
import { Grid, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../shared";
import { forgotPasswordFetch } from "../../../services";

export function CheckEmail() {
  const [loading, setLoading] = useState(false);
  const email = localStorage.getItem("email");
  function emailFetchFunction(email) {
    forgotPasswordFetch(email)
      .then((data) => {
        if (data.success) {
          window.location.reload();
          setLoading(true);
        }
      })
      .catch(setLoading(false))
      .finally(setLoading(false));
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
        height="80vh"
      >
        <img src={require("../../../images/email_icon.svg")} alt="Email" />
        <Box display="flex" flexDirection="column" gap="30px">
          <Typography textAlign="center" variant="h1">
            Check your email
          </Typography>
          <Typography textAlign="center" variant="body1">
            We sent a password reset link to
            <Typography textAlign="center" variant="body1" fontWeight="1000">
              {email}
            </Typography>
          </Typography>
          <fieldset disabled={loading} style={{ border: 0 }}>
            <a href={`https://${email}`} style={{ textDecoration: "none" }}>
              <Button>
                <Typography
                  textAlign="center"
                  variant="span"
                  width="20vw"
                  minWidth="180px"
                >
                  Open email app
                </Typography>
              </Button>
            </a>
          </fieldset>
        </Box>
        <Box display="flex" justifyContent="center" gap="10px">
          <Typography>Did not receive the email? </Typography>
          <Typography
            variant="body2"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              const email = localStorage.getItem("email");
              emailFetchFunction(email);
            }}
          >
            Click to resend
          </Typography>
        </Box>
        <Box>
          <NavLink style={{ textDecoration: "none" }} to="/sign_in_log">
            <Typography
              display="flex"
              alignItems="center"
              fontFamily="Montserrat"
              fontWeight="600, Semi Bold"
              fontSize="14"
              color="rgba(64, 80, 81, 0.44)"
            >
              <ArrowBack />
              Back to log in
            </Typography>
          </NavLink>
        </Box>
      </Box>
    </Grid>
  );
}
