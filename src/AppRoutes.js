import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthLayout, MainLayout } from "./Layouts";
import {
  SignUpPassword,
  SignInLog,
  SignUpEmail,
  SignUpName,
  ResetPassword,
  HomePage,
  ForgotPassword,
  CheckEmail,
  Team,
  Timesheet,
  MyProfile,
  SetNewPassword,
  Settings,
  Dashboard,
  UpdateName,
  UpdateEmail,
  UpdatePassword,
} from "./pages";
import {ViewProfile} from "./pages/ViewProfile";

function AppRoutes() {
  const token = localStorage.getItem("token");
  return (
    <div>
      {token ? (
        <>
          <MainLayout>
            <Routes>
              <Route path="*" element={<Navigate to=""/>}></Route>
              <Route path="" element={<HomePage />}></Route>
              <Route path="/team/:page" element={<Team />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/viewProfile/*" element={<ViewProfile />}></Route>
              <Route path="/profile/*" element={<MyProfile />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/timesheet" element={<Timesheet />}></Route>
              <Route path="/timesheet/:page" element={<Timesheet />}></Route>
            </Routes>
          </MainLayout>
        </>
      ) : (
        <AuthLayout>
          <Routes>
            <Route path="" element={<SignInLog />}></Route>
            <Route path="/sign_up_email" element={<SignUpEmail />}></Route>
            <Route path="/sign_up_name" element={<SignUpName />}></Route>
            <Route path="/sign_up_password" element={<SignUpPassword />}></Route>
            <Route path="/reset_password" element={<ResetPassword />}></Route>
            <Route path="/forg_pass" element={<ForgotPassword />}></Route>
            <Route path="/set_new_password" element={<SetNewPassword />}></Route>
            <Route path="/check_email" element={<CheckEmail />}></Route>
            <Route path="*" element={<Navigate to="" />}></Route>
            <Route path="/update_name" element={<UpdateName />}></Route>
            <Route path="/update_email" element={<UpdateEmail />}></Route>
            <Route path="/update_password" element={<UpdatePassword />}></Route>
          </Routes>
        </AuthLayout>
      )}
    </div>
  );
}

export default AppRoutes;
