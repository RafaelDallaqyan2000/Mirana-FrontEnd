import { Box } from "@mui/system";
import React from "react";
import { Navbar, Sidebar } from "./components";

export function MainLayout({children}) {
  return (
    <Box display="flex" backgroundColor="#EDF0F4">
      <Sidebar />
      <Box width="100%" display="flex" flexDirection="column">
        <Navbar />
        {children}
      </Box>
    </Box>
  );
}
