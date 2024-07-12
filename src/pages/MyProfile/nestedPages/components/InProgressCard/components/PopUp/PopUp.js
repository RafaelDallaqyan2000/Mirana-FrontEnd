import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  AttachmentCard,
  InputForComment,
  Select,
  TextEditor,
  getDateAllTasks
} from "../../../../../../../shared";
import { HOST, getUploadFile } from "../../../../../../../services";
import { Actions } from "./Actions";
import { Status } from "./Status";
import { Users } from "./Users";
import { Dates } from "./Dates";
import { CalendarPopUp } from "../../../CalendarPopUp/CalendarPopUp";
const useStyles = makeStyles({
  dialog: {
    "& .MuiDialog-paper": {
      maxWidth: "100%",
      maxHeight: "100%",
    },
  },
  headerLi: {
    fontWeight: "500",
  },
});

export function PopUp(props) {
  const {
    setOpenPopUp,
    openPopUp,
    onClose,
    attachments,
    setAttachments,
    projectName,
    status,
    taskName,
    sprintName,
    userArr,
    setUserArr,
    startDate,
    setStartDate = () => {},
    endDate,
    setEndDate = () => {},
    id,
    openDropdown,
    actionOpen,
    data,
    setTasks,
  } = props;
  const [calendar, setCalendar] = useState(false);
  const [state1, setState1] = useState("");
  const style = useStyles();
  // const openDropdown = (e) => {
  //   e.stopPropagation();
  //   setWindowState(false);
  // };
  // useEffect(() => {
  //   window.addEventListener("click", openDropdown);
  //   return () => {
  //     window.removeEventListener("click", openDropdown);
  //   };
  // }, []);
  // if(!data.length){
  //     return null;
  // }
  return (
    <Dialog className={style.dialog} open={openPopUp} onClose={onClose}>
      <div className="container">
        <div className="leftDiv">
          <span className="title">{taskName}</span>
          <div className="projectName">
            <span className={style.headerLi}>{projectName}</span>

            <ul style={{ display: "flex", flexWrap: "wrap" }}>
              <li className={style.headerLi}>{sprintName}</li>
              <li className={style.headerLi}>{taskName}</li>
            </ul>
          </div>
          <ul>
            <div className="description">
              <li>Description</li>
              <TextEditor
                defaultValue={data.length > 0 ? data[0].taskDescription : ""}
                taskId={id}
              />
            </div>

            <div className="attachmentContainer">
              <li>Attachment</li>
              <div
                style={{
                  maxWidth: "638px",
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginLeft: "12px",
                  gap: "15px",
                }}
              >
                <label>
                  <div className="cardUpload">
                    {state1 ? (
                      <img className="foto" src={state1} />
                    ) : (
                      <img
                        title="upload"
                        className="upload"
                        src={require("../../../../../../../images/uploadFile.svg")}
                        alt="upload"
                      />
                    )}
                    <input
                      onChange={(e) => {
                        let file = e.target.files[0];
                        // let fileReader = new FileReader();
                        // fileReader.readAsDataURL(file);
                        // fileReader.onloadend =  (e) => {
                        //     setState1(e.target.result);
                        // };
                        let formData = new FormData();
                        formData.append("file", file);
                        return getUploadFile(setAttachments, formData, id);
                      }}
                      type="file"
                      hidden
                    />
                  </div>
                </label>

                {attachments.map((e) => {
                  let x = e.fileName.split(".");
                  let type = x[x.length - 1];
                  return (
                    <AttachmentCard
                      setAttachments={setAttachments}
                      key={e.fileName}
                      fileName={e.fileName}
                      url={HOST + e.address}
                      alt={type}
                      id={e.id}
                    />
                  );
                })}
              </div>
            </div>

            <div className="activities">
              <li>Activities</li>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "3px",
                }}
              >
                <Select
                  width="107px"
                  height="25px"
                  fontSize="10px"
                  fontSizeLabel="10px"
                  label="Show:"
                  marginLabel="0 7px 0 0"
                  marginTopMenu="-10px"
                  arr={[{ name: "Comment", id: 1 }]}
                  placeholder="All"
                />
              </div>
              <div style={{ padding: "15px 0" }}>
                <InputForComment id={id} />
              </div>
            </div>
          </ul>
        </div>
        <div className="rightDiv">
          <div className="optionsAndCloseIcons">
            <span
              className="closePopUp"
              onClick={(e) => {
                e.stopPropagation();
                setOpenPopUp(false);
              }}
            >
              <img
                src={require("../../../../../../../images/closeIcon.svg")}
                alt="close"
              />
            </span>
          </div>
          <div>
            <span className="textAttribute">Attributes</span>
            <div className="statusDiv">
              <span className="textStatus" style={{ margin: "10px 0 6px" }}>
                Status
              </span>
              <Status status={status} />
            </div>
            <div>
              <span className="textStatus">Assigned to</span>
              <Users
                array={userArr}
                count={7}
                id={id}
                state={actionOpen}
                openDropdown={openDropdown}
                setUserArr={setUserArr}
              />
            </div>
            <div>
              <span className="textStatus">Dates</span>
              <Dates
                startDate={getDateAllTasks(startDate)}
                endDate={getDateAllTasks(endDate, "at")}
                setCalendar={setCalendar}
                calendar={calendar}
              />
            </div>
            <div className="actionDiv">
              <span className="textAttribute">Actions</span>
              <div className="actions">
                <Actions
                  userArr={userArr}
                  setUserArr={setUserArr}
                  id={id}
                  setCalendar={setCalendar}
                  calendar={calendar}
                  setTasks={setTasks}
                  onClose={onClose}
                  setOpenPopUp={setOpenPopUp}
                  setAttachments={setAttachments}
                />
              </div>
            </div>
            {calendar ? (
              <CalendarPopUp
                id={id}
                setOpen={setCalendar}
                open={calendar}
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
