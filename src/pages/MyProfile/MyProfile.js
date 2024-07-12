import { Box } from "@mui/material";
import React from "react";
import { SidebarRight } from "../../layouts/MainLayout/components";
import { NavLink, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./MyProfile.css";
import { AllTask, InProgress, About } from "./nestedPages";


export const MyProfile = () => {
  return (
    <>
      <Box>
        <Box display="flex" justifyContent="space-between" overflow="hidden">
          <Box
            width="100%"
            height="100%"
            // pb="20px"
            backgroundColor="#fff"
          >
            <Box
              width="100%"
              backgroundColor="#fff"
              height="70px"
              padding="0 0px 40px"
              display="flex"
            >
              <Box
                display="flex"
                alignItems="flex-end"
                width="100%"
                justifyContent="space-around"
                borderBottom="1px solid rgba(11, 42, 58, 0.18)"
                margin=" 3px 35px"
              >
                <NavLink className="nav-item" to="/profile/all_tasks">
                  All tasks
                </NavLink>
                <NavLink className="nav-item" to="/profile/in_progress">
                  In Progress
                </NavLink>
                <NavLink className="nav-item" to="/profile/about">
                  About
                </NavLink>
              </Box>
            </Box>
            <Routes>
              <Route
                path=""
                element={<Navigate to="/profile/all_tasks" />}
              ></Route>
              <Route path="/all_tasks" element={<AllTask />}></Route>
              <Route path="/all_tasks/:page" element={<AllTask />}></Route>
              <Route path="/in_progress" element={<InProgress />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </Box>
          <SidebarRight />
        </Box>
      </Box>
    </>
  );
};
