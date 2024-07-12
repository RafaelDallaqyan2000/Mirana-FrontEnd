import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

export function AuthLayout({ children }) {
  return (
    <>
      <Grid height="100vh" sx={{ margin: 0 }} container rowSpacing={1}>
        {children}

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          lg={7}
          md={7}
          xs={12}
          sm={12}
          className="img"
          item
        >
          <Box
            sx={{
              width: {
                xl: "40vw",
                lg: "40vw",
                md: "40vw",
                sm: "40vw",
                xs: "40vw",
              },
              display: {
                sm: "none",
                md: "block",
                xs: "none",
              },
            }}
          >
            <img
              src={require("../../images/Auth Image.svg")}
              alt="animation"
              className="img"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
