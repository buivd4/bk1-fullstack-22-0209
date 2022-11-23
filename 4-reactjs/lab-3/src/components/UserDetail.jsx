import React from "react";

const UserDetail = (props)=>{
    const onDetailClick = ()=>{
        // Tương ứng với việc gọi trực tiếp hàm
        // App.changeDetail()
        console.log("Change Detail");
        console.log(props.name);
        console.log(props.email);

        props.onViewDetail(props.name, props.email, props.phone)
    }
    return (
        <div className="border border-2 rounded-md mx-4 p-2 space-y-2">
            <p className="px-2 text-lg font-bold">{props.name}</p>
            <button onClick={onDetailClick} className="mx-8 border border-2 rounded-md bg-green-400">View Detail</button>
        </div>
    )
}

export default UserDetail;