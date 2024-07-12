import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/system";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./Sidebar.css";

const make = makeStyles({
    // iconMenu: {
    //   "&:hover": {
    //     cursor: "pointer",
    //   },
    // },
});

export function Sidebar() {
    const styles = make();
    const [closed, setClosed] = useState(false);
    const [smClosed, setSmClosed] = useState(true);

    return (
        <Box
            className={`boxSidebar
        ${closed ? "boxSidebarClosed" : ""}  ${
                smClosed ? "smBoxSidebarClosed" : ""
            }`}
        >
            <Box className={styles.iconMenu}>
                <img
                    onClick={() => {
                        setClosed(!closed);
                    }}
                    className="bigScreen"
                    src={require("../../../../images/menu.svg")}
                    alt="menu"
                    title="Menu"
                />
                <img
                    onClick={() => {
                        setSmClosed(!smClosed);
                    }}
                    className="smallScreen"
                    src={require("../../../../images/menu.svg")}
                    alt="menu"
                    title="Menu"
                />
            </Box>

            <Box className="boxMenu">
                <Box>
                    <NavLink to="" style={{textDecoration: "none"}}>
                        <img
                            className="whiteIcon"
                            src={require("../../../../images/White icons/Home Icon.svg")}
                            alt="dashboard"
                        />
                        <img
                            className="blueIcon"
                            src={require("../../../../images/Blue icons/Home Icon.svg")}
                            alt="dashboard"
                        />
                        <Typography className="nav-item-text">Home</Typography>
                    </NavLink>
                </Box>
                <Box>
                    <NavLink to="/dashboard" style={{textDecoration: "none"}}>
                        <img
                            className="whiteIcon"
                            src={require("../../../../images/White icons/dashboard.svg")}
                            alt="dashboard"
                        />
                        <img
                            className="blueIcon"
                            src={require("../../../../images/Blue icons/dashboard.svg")}
                            alt="dashboard"
                        />
                        <Typography className="nav-item-text">Dashboard</Typography>
                    </NavLink>
                </Box>
                <Box>
                    <NavLink to="/profile" style={{textDecoration: "none"}}>
                        <img
                            className="whiteIcon"
                            src={require("../../../../images/White icons/user.svg")}
                            alt="profile"
                        />
                        <img
                            className="blueIcon"
                            src={require("../../../../images/Blue icons/user.svg")}
                            alt="profile"
                        />
                        <Typography className="nav-item-text">My Profile</Typography>
                    </NavLink>
                </Box>

                <Box>
                    <NavLink to="/team" style={{textDecoration: "none"}}>
                        <img
                            className="whiteIcon"
                            src={require("../../../../images/White icons/Team Icon.svg")}
                            alt="team"
                        />
                        <img
                            className="blueIcon"
                            src={require("../../../../images/Blue icons/Team Icon.svg")}
                            alt="team"
                        />
                        <Typography className="nav-item-text">Team</Typography>
                    </NavLink>
                </Box>

                <Box>
                    <NavLink to="/timesheet" style={{textDecoration: "none"}}>
                        <img
                            className="whiteIcon"
                            src={require("../../../../images/White icons/TimesheetIcon.svg")}
                            alt="team"
                        />
                        <img
                            className="blueIcon"
                            src={require("../../../../images/Blue icons/TimesheetIcon.svg")}
                            alt="team"
                        />
                        <Typography className="nav-item-text">Timesheet</Typography>
                    </NavLink>
                </Box>

                <Box>
                    <NavLink to="/settings" style={{textDecoration: "none"}}>
                        <img
                            className="whiteIcon"
                            src={require("../../../../images/White icons/Settings Icon Outlined.svg")}
                            alt="settings"
                        />
                        <img
                            className="blueIcon"
                            src={require("../../../../images/Blue icons/Settings Icon.svg")}
                            alt="settings"
                        />
                        <Typography className="nav-item-text">Settings</Typography>
                    </NavLink>
                </Box>
            </Box>
        </Box>
    );
}
