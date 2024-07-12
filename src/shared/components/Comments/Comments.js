import { Avatar, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { deleteComment } from "../../../services";
import { getDateAllTasks } from "../../functions";
import "./Comments.css";

const useStyle = makeStyles({
  body: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    width: "100%",
    padding: "10px 0",
    display: "flex",
  },
  avatar: {
    marginRight: "12px",
  },
  name: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "17px",
    display: "flex",
    alignItems: "center",
    color: "rgba(10, 12, 26, 0.8)",
    marginRight: "10px",
  },
  commentText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "17px",
    color: "rgba(10, 12, 26, 0.95)",
  },
  date: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: "10px",
    color: "rgba(10, 12, 26, 0.56)",
  },
  options: {
    display: "flex",
    fontFamily: "Montserrat",
    fontSize: "12px",
    fontWeight: "500px", //500
    color: "rgba(10, 12, 26, 0.4)",
  },
  optionsSpan: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500", //500
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  liMarker: {
    fontSize: "18px",
    margin: "0 6px",
  },
  MoreLess: {
    color: "#3894C9",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  lessIcone: {
    paddingRight: "5px",
    transform: "rotate(180deg)",
  },
  moreIcone: {
    paddingLeft: "5px",
  },
  filterComment: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "16px 0 12px",
    gap: "5px",
    cursor: "pointer",
  },
  filterText: {
    fontFamily: "Montserrat",
    color: "rgba(10, 12, 26, 0.71)",
    fontSize: "9px",
    fontWeight: "600",
  },
});

export function Comments({
  id,
  userId,
  avatar,
  comments,
  setArray,
  setComments,
}) {
  const css = useStyle();
  const [state, setState] = useState(8);
  const [filter, setFilter] = useState(true);
  return (
    <Box className={css.body}>
      {filter ? (
        <div className={css.filterComment} onClick={(e) => setFilter(false)}>
          <span className={css.filterText}>Newest first</span>
          <img src={require("../../../images/newDown.svg")} />
        </div>
      ) : (
        <div className={css.filterComment} onClick={(e) => setFilter(true)}>
          <span className={css.filterText}>Oldest first</span>
          <img src={require("../../../images/newUp.svg")} />
        </div>
      )}
      {comments.map((comment, i) => {
        if (i < state) {
          return (
            <Box className={css.container}>
              <Box className={css.avatar}>
                <Avatar
                  sx={{ width: "31px", height: "31px" }}
                  src={comment.image}
                />
              </Box>
              <Box>
                <Box sx={{ display: "flex" }}>
                  <span className={css.name}>{comment.name}</span>{" "}
                  {/*Name lastName*/}
                  <span className={css.date}>
                    {getDateAllTasks(comment.date, ",")}
                  </span>
                </Box>
                <Box sx={{ margin: "8px 0 5px" }}>
                  <span className={css.commentText}>{comment.comment}</span>
                </Box>
                {userId === comment.userId ? (
                  <Box className={css.options}>
                    <span
                      id={comment.commentId}
                      className={css.optionsSpan}
                      onClick={(ev) => {
                        deleteComment(comment.commentId, id).then(
                          (data) => {
                            if (data.success) {
                              comments.splice(i, 1);
                              setComments([...comments]);
                            }
                          }
                        ).catch(error => error);
                      }}
                    >
                      Delete
                    </span>
                    {/* <span className={css.liMarker}>&#8226;</span>
                  <span>List name</span>
                  <span className={css.liMarker}>&#8226;</span>
                  <span>Title</span> */}
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            </Box>
          );
        }
      })}

      {comments.length > state ? (
        <Box className={css.MoreLess} onClick={(e) => setState((v) => v + 8)}>
          <span>More</span>
          <img
            className={css.moreIcone}
            src={require("../../../images/Blue icons/vector.svg")}
            alt="More"
          />
        </Box>
      ) : (
        <Box className={css.MoreLess} onClick={(e) => setState(8)}>
          <span>Less</span>
          <img
            className={css.lessIcone}
            src={require("../../../images/Blue icons/vector.svg")}
            alt="Less"
          />
        </Box>
      )}
    </Box>
  );
}
