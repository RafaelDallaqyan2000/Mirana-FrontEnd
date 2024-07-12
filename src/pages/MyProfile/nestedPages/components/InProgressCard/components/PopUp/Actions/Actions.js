import {
  Box,
  IconButton,
  Dialog,
} from "@mui/material";
import { useState } from "react";
import { Button } from "../../../../../../../../shared";
import React from "react";
import { AddPerson } from "../AddPerson";
import { deleteTask, getUploadFile} from "../../../../../../../../services";
import "./actions.css";

export function Actions({
  icone1,
  icone2,
  icone3,
  icone4,
  id,
  setCalendar,
  userArr,
  setUserArr,
  setAttachments,
  setTasks,
  setOpenPopUp,
}) {
  const [deleted, setDeleted] = useState(true);
  const [deleteCard, setDeleteCard] = useState(false);
  const [openPerson, setOpenPerson] = useState(false);
  const handleClosed = () => {
    setDeleteCard(false);
  };
  return (
    <div className="actionBody">
      <Box className="actionAddPersonBox">
        <Box
          className="actionButton"
          onClick={(e) => {
            setOpenPerson(!openPerson);
          }}
        >
          <IconButton disableRipple className="iconButton">
            <img
              alt="person"
              src={
                icone1
                  ? require(icone1)
                  : require("../../../../../../../../images/addNewPerson.svg")
              }
            />
          </IconButton>
        </Box>
        {openPerson ? (
          <Box className="boxAddPersonInAction">
            <AddPerson
              userArr={userArr}
              setUserArr={setUserArr}
              taskId={id}
              state={openPerson}
              setState={setOpenPerson}
            />
          </Box>
        ) : (
          ""
        )}
      </Box>

      <Box className="actionButton">
        <IconButton disableRipple className="iconButton">
          <label style={{ width: "100%", cursor: "pointer" }}>
            <img
              alt="attach"
              src={
                icone2
                  ? require(icone2)
                  : require("../../../../../../../../images/Attach.svg")
              }
            />
            <input
              onChange={(e) => {
                let file = e.target.files[0];
                let formData = new FormData();
                formData.append("file", file);
                return getUploadFile(setAttachments, formData, id);
              }}
              type="file"
              hidden
            />
          </label>
        </IconButton>
      </Box>

      <Box
        className="actionButton"
        onClick={(e) => {
          setCalendar(true);
        }}
      >
        <IconButton disableRipple className="iconButton">
          <img
            alt="calendar"
            src={
              icone3
                ? require(icone3)
                : require("../../../../../../../../images/Vector (9).svg")
            }
          />
        </IconButton>
      </Box>

      <Box className="actionButton" onClick={() => setDeleteCard(true)}>
        <IconButton disableRipple className="iconButton">
          <img
            alt="delete this card"
            src={
              icone4
                ? require(icone4)
                : require("../../../../../../../../images/delete.svg")
            }
          />
        </IconButton>
      </Box>
      {/*//deletePopUp*/}
      {
        <Dialog open={deleteCard}>
          {deleted ? (
            <Box className="deleteDiv">
              <div className="headerDeletePopUp">
                <span className="headerTextPopUp">Delete card?</span>
                <span
                  className="closeDeletePopUp"
                  onClick={(e) => handleClosed()}
                >
                  <img
                    src={require("../../../../../../../../images/closeIcon.svg")}
                    alt="close"
                  />
                </span>
              </div>
              <div className="deleteIcon">
                <img
                  src={require("../../../../../../../../images/deleteBigIcon.svg")}
                />
              </div>
              <div className="bodyTextPopUp">
                <span>Are you sure you want to delete</span>
                <span>"My Project Task" card?</span>
                <span>You can't undo this action.</span>
              </div>
              <div className="buttonsPopUpDelete">
                <Button
                  fontSize="14px"
                  fontWeight="500"
                  width="122px"
                  height="30px"
                  variant="outlinedPro"
                  onClick={(e) => {
                    handleClosed();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  fontSize="14px"
                  fontWeight="500"
                  width="122px"
                  height="30px"
                  onClick={(e) => {
                    deleteTask(id).then(() => {
                      setDeleted(false);
                    }).catch(error => error);
                  }}
                >
                  Delete
                </Button>
              </div>
            </Box>
          ) : (
            <Box className="deleteDiv">
              <div className="headerDeletePopUp">
                <span className="headerTextPopUp">Delete card?</span>
                <span
                  className="closeDeletePopUp"
                  onClick={(e) => handleClosed()}
                >
                  <img
                    src={require("../../../../../../../../images/closeIcon.svg")}
                    alt="close"
                  />
                </span>
              </div>
              <div className="deleteIcon">
                <img
                  src={require("../../../../../../../../images/deleteBigIcon.svg")}
                />
              </div>
              <div className="bodyTextPopUp">
                <span>
                  "My project task" card is <br /> deleted!{" "}
                </span>
              </div>
              <div className="buttonsPopUpDelete">
                <Button
                  fontSize="14px"
                  fontWeight="500"
                  width="122px"
                  height="30px"
                  onClick={() => {
                    setTasks((prev) => prev.filter((e) => e.id !== id));
                    setOpenPopUp(false);
                  }}
                >
                  Ok
                </Button>
              </div>
            </Box>
          )}
        </Dialog>
      }
      {/*//////////////////////////////////////////*/}
    </div>
  );
}
