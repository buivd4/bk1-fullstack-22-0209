import React from "react";

const CommentDetail = (props)=>{
    return (
        <div>
            <p>Người gửi: {props.author || "Không xác định"}</p>
            <p>Nội dung: {props.content.msg}</p>
            <p>Vào lúc: {props.time}</p>
            <hr />
        </div>
    )
}

export default CommentDetail;