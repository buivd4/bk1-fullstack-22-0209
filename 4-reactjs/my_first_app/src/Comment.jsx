import React from "react";

class Comment extends React.Component{
    render(){
        /// List of component
        return (
            <div>
                <h1>{this.props.title}</h1>
                <hr />
                {
                    this.props.comments
                }
                <hr />
                <h1>{this.props.footer}</h1>
                <button onClick={this.props.alertFn}>Alert</button>
            </div>
        )
    }
}

export default Comment;