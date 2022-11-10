import React from "react";
import Avatar from "./avatar.png";

const CommentDetail = (props) => {
  return (
    <div style={{ display: "flex", padding: "10px" }}>
      <img src={Avatar} width="50px" height="50px"/>
      <div style={{ paddingLeft: "5px" }}>
        <div>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>{props.sender}</span>
          <span
            style={{ fontSize: "13px", fontWeight: "lighter", paddingRight: "3px" }}
          >
            {props.time}
          </span>
        </div>
        <div>
            <p style={{fontSize:"10px"}}>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

// function CommentDetail {}

export default CommentDetail;
