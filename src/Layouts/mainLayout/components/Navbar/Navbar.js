import { Avatar, Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    firstName: state.memberDetails.memberDetails.firstName,
    lastName: state.memberDetails.memberDetails.lastName,
    image: state.memberDetails.memberDetails.image,
  };
};

export const Navbar = connect(mapStateToProps)(
  ({ firstName, lastName, image }) => {
    const [windowState, setWindowState] = useState(false);
    useEffect(() => {
      window.addEventListener("click", () => {
        setWindowState(false);
      });
      return () => {};
    }, []);

    return (
      <Box className="boxNavbar">
        <Box p={1}>
          <Link to="">
            <img
              src={require("../../../../images/Digital logo.svg")}
              alt="Digital Wave"
            />
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton
            sx={{
              "&.MuiIconButton-root": {
                boxShadow: " 0px 4px 8px rgba(11, 42, 58, 0.16)",
              },
              marginRight: "20px",
            }}
            aria-label="delete"
            size="medium"
          >
            <img src={require("../../../../images/search.svg")} alt="search" />
          </IconButton>
          <IconButton
            sx={{
              "&.MuiIconButton-root": {
                boxShadow: " 0px 4px 8px rgba(11, 42, 58, 0.16)",
              },
              marginRight: "15px",
            }}
            aria-label="delete"
            size="medium"
          >
            <img
              src={require("../../../../images/notification.svg")}
              alt="notification"
            />
          </IconButton>
          <Box
            display="flex"
            gap="7px"
            alignItems="center"
            height={40}
            padding="0 11px 0 15px"
            borderLeft="1px solid rgba(246, 246, 246, 1)"
            sx={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              setWindowState(!windowState);
            }}
          >
            <Avatar
              src={image ? require(`${image}`) : ""}
              sx={{ marginLeft: "6px" }}
            />
            <Typography
              color="rgba(10, 12, 26, 0.89)"
              fontWeight="500"
              fontSize="14px"
              lineHeight="17px"
              alignItems="center"
            >
              {firstName} {lastName}
            </Typography>
            <Box
              id="box"
              sx={{
                position: "relative",
              }}
            >
              <KeyboardArrowDownIcon
                sx={{ height: "20px", cursor: "pointer" }}
              />
              {windowState ? (
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "white",
                    border: "1px solid black",
                    top: "35px",
                    right: "0px",
                    height: "50px",
                    width: "110px",
                    display: "flex",
                    alignItems: "center",
                    zIndex: 2,
                  }}
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  <Typography
                    mr="10px"
                    sx={{ color: "black", cursor: "pointer" }}
                  >
                    Log Out{" "}
                  </Typography>
                  <LogoutIcon />
                </Box>
              ) : (
                ""
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
);
