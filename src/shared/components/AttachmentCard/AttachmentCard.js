import React, { useEffect, useState } from "react";
import { Box, Dialog } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Button } from "../Button";
import axios from "axios";
import { getDownloadFile, getDeleteFile, HOST, login } from "../../../services";
import "./attachmentCard.css";

const useStyles = makeStyles({
  dialog: {
    "& .MuiDialog-paper": {
      maxWidth: "100%",
      maxHeight: "100%",
    },
  },
});
export function AttachmentCard({
  url,
  alt = "",
  id,
  fileName,
  setAttachments,
}) {
  const css = useStyles();
  const [imagePopUp, setImagePopUp] = useState(false);
  const typeProperty = ["jpg", "jpeg", "png", "bmp", "ico", "webp", "jfif"];
  const closed = (e) => {
    setImagePopUp(false);
  };

  let type = typeProperty.filter((e) => {
    return e === alt;
  });

  useEffect(() => {}, [fileName]);
  return (
    <div className="body">
      {type[0] === alt ? (
        <>
          <div className="imageTrueDiv" id={id}>
            <div className="imgDiv" style={{ position: "relative" }}>
              <img
                style={{ height: "100%" }}
                onClick={(e) => {
                  setImagePopUp(true);
                }}
                src={url}
                alt={alt}
              />
              <div
                className="img1"
                onClick={() => {
                  getDeleteFile(id)
                    .then(() =>
                      setAttachments((e) =>
                        e.filter((e) => {
                          return e.id !== id;
                        })
                      )
                    )
                    .catch((error) => error);
                }}
              >
                <img
                  style={{ width: "6px", height: "6px" }}
                  src={require("../../../images/closeIcon.svg")}
                />
              </div>
              <div
                className="img2"
                onClick={() => getDownloadFile(id, fileName)}
              >
                <img src={require("../../../images/download.svg")} />
              </div>
              <p style={{ position: "absolute", bottom: "0", width: "100%" }}>
                {fileName ? fileName : "file"}
              </p>
            </div>
          </div>
          {imagePopUp ? (
            <Dialog className={css.dialog} open={imagePopUp} onClose={closed}>
              <Box className="srcPopUp">
                <img src={url} alt={alt} />
              </Box>
            </Dialog>
          ) : (
            ""
          )}
        </>
      ) : (
        <div className="imageTrueDivFile" id={id}>
          <div className="imgDiv" style={{ position: "relative" }}>
            <div className="file">
              <img
                className="fileImage"
                src={require("../../../images/attachment/file.svg")}
              />
              <span className="textInFile">{alt}</span>
            </div>
            <div
              onClick={() => {
                getDeleteFile(id)
                  .then(() =>
                    setAttachments((e) =>
                      e.filter((e) => {
                        return e.id !== id;
                      })
                    )
                  )
                  .catch((error) => error);
              }}
              className="img1"
            >
              <img
                style={{ width: "6px", height: "6px" }}
                src={require("../../../images/closeIcon.svg")}
              />
            </div>
            <div className="img2" onClick={() => getDownloadFile(id, fileName)}>
              <img src={require("../../../images/download.svg")} />
            </div>
            <p style={{ position: "absolute", bottom: "0", width: "100%" }}>
              {fileName ? fileName : "file"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
