import React from "react";

const CommentDetailAlt = (props)=>{
    return (
        <div>
            <p>Phản hồi: {props.author || "Không xác định"}</p>
            <p>Nội dung: {props.content.msg}</p>
            <p>Vào lúc: {props.time}</p>
            <hr />
        </div>
    )
}

export default CommentDetailAlt;