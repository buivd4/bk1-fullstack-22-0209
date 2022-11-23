import React from "react";

const Detail = (props)=>{
    return (
        <div className="mx-2 border rounded-md h-full">
            <div className="text-center border rounded-md bg-blue-400">
                {props.name}
            </div>
            <div className="px-8 text-center py-2">
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </div>
        </div>
    )
}

export default Detail;