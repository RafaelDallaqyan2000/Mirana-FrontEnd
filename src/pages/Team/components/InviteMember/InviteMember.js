import { Box, Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRolesList, inviteMemberFetch} from "../../../../services";
import { Button, Input, Select } from "../../../../shared";
import "./InviteMember.css";

function Submit(email, role) {
  return inviteMemberFetch(email, role)
    .then((data) => {
      console.log(data, "then");
    })
    .catch((data) => {
      console.log(data, "catch");
    })
    .finally();
}

export function InviteMember({ onClose }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [rolesList, setRolesList] = useState([]);
  useEffect(() => {
    getRolesList()
      .then((data) => setRolesList(data))
      .catch(() => console.log("Failed fetch"));
  }, []);
  return (
    <Box
      sx={{
        width: "650px",
        height: "580px",
        backgroundColor: "#fff",
        borderRadius: "4px",
      }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      gap="50px"
    >
      <Box
        position="absolute"
        top="43px"
        right="43px"
        sx={{ cursor: "pointer" }}
        onClick={onClose}
      >
        <img
          style={{ width: "15px" }}
          src={require("../../../../images/Close icon.svg")}
          alt="close"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="9px"
      >
        <img src={require("../../../../images/Invite.svg")} alt="mail" />
        <Typography className="header">Invite Member to Your Team</Typography>
      </Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Submit(email, role);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="input"
          marginBottom="50px"
          sx={{
            width: "450px",
          }}
        >
          <Input
            inputName="E-mail"
            type="email"
            height="40px"
            iconStart={<img src={require("../../../../images/message.svg")} />}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                  boxShadow: "0px 4px 8px rgba(11, 42, 58, 0.12)",
                },
              },
            }}
          />
          <Select
            arr={rolesList}
            placeholder="Choose the role"
            label="Role"
            width="100%"
            height="40px"
            all=""
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
        </Box>
        <Button
          type="submit"
          fontSize="14px"
          fontWeight="500"
          padding="14px 19px"
        >
          Send Invite
        </Button>
      </form>
    </Box>
  );
}
