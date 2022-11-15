import React from "react";
import Avatar1 from "./assets/avatar1.png";
class Comment extends React.Component{
    render(){
        return (
            <div className="flex space-x-2">
                <img src={this.props.avatar} alt="Avatar cho nguoi dung" className="h-32"/>
                <div>
                    <div className="flex justify-center items-center">
                        <p className="font-bold text-lg px-2">{this.props.name}</p>
                        <p className="font-light text-sm">{this.props.time}</p>
                    </div>
                    <div className="px-2">
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;