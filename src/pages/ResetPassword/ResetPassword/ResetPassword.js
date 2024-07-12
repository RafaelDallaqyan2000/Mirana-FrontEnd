import { ArrowBack } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { Button } from "../../../shared";
import React from "react";
import { Link } from "react-router-dom";

export function ResetPassword() {
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
        justifyContent="space-between"
        alignItems="center"
        height="80vh"
      >
        <Box
          height="30vh"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Typography textAlign="center" variant="h1">
            Password reset
          </Typography>
          <Typography textAlign="center" variant="h6">
            Your password has been successfully reset.
            <Typography textAlign="center" variant="h6" fontWeight="1000">
              Click below to log in.
            </Typography>
          </Typography>
          <Link to="sign_in_log" style={{ textDecoration: "none" }}>
            <Button>
              <Typography textAlign="center" variant="span" width="20vw">
                Continue
              </Typography>
            </Button>
          </Link>
        </Box>
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
    </Grid>
  );
}
