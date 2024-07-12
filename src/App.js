import { ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import theme from "./theme";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import { getUserDetails } from "./services";
import { setMemberDetails } from "./redux";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    memberDetails: state.memberDetails.memberDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setMemberDetails: (user) => {
      dispatch(setMemberDetails(user));
    },
  };
};

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ memberDetails, setMemberDetails }) => {
  let token = localStorage.getItem("token");
  useEffect(() => {
    getUserDetails()
      .then((data) => {
        setMemberDetails(data);
      })
      .catch((error) => error);
  }, [token]);
  return (
    <div className="App">
      <ToastContainer position="top-right" />
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
});
