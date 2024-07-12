import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {Comments} from "../Comments";
import { addComment, taskComments } from "../../../services";
import {Avatar, Box, IconButton, TextField} from "@mui/material";
import "./inputForComment.css";

const mapStateToProps = (state) => {
    return{
        userId : state.memberDetails.memberDetails.id,
    }
}

export const InputForComment = connect (
    mapStateToProps
)(({id, url, width = "100%", userId})=>{
    useEffect(() => {
        taskComments(id)
        .then(data => setComments(data))
      }, [])
      
      const [inputValue, setInputValue] = useState("");
      const [comments, setComments] = useState([]);
  
      return (
          <Box className="bodyInInputForCommentsComponent">
              <div className="inputContainer">
                  <div className="divAvatar">
                      <Avatar sx={{width: "110%", height: "100%",}}/>
                  </div>
                  <div className="divInputTextField">
              <form
                  onSubmit={e => {
                  e.preventDefault()
                  setInputValue("");
                  if (inputValue !== "") {
                      
                  }
              }}>
                  <TextField
                      className="inputTextField"
                      variant="standard"
                      border="0"
                      multiline
                      // onKeyDown={(e) => {
                      //     if (e.keyCode === 13) {
                      //         // e.preventDefault();
                      //     }
                      //     handleEnter(e)
                      // }}
                      // onKeyUp={(e) => {
                      //     handleEnter(e)
                      // }}
                      placeholder="Some text"
                      onChange={e => setInputValue(e.target.value)}
                      value={inputValue}
                      sx={{
                          // fontSize : "8px",
                          width: width,
                          "& .MuiInput-underline:after": {
                              borderBottom: 0,
                              display: "none",
                          },
                      }}
                  />
                  <img onClick={e => {
                      if (inputValue !== "") {
                          addComment(id, inputValue)
                      .then(data=>{
                          if(data.success){
                              setComments([{
                              comment:inputValue,
                              commentId:data.data.commentId,
                              userId:userId,
                              name:"Zhora Harutunyan",
                              image:"",
                              date:data.data.insertDate,
                          },...comments]);
                              setInputValue("");
                          }
                      })
                      }}}
                  className="telegramIcone" src={require("../../../images/telegram.svg")}/>
              </form>
  
  
                  </div>
              </div>
              <div className="commentDiv">
                  <Comments id={id} userId={userId} comments={comments} setComments={setComments}/>
              </div>
          </Box>
      )
})
