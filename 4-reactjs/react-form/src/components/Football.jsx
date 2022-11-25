import React from "react";

class Football extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: "hi"
        }
        this.shoot3 = this.shoot3.bind(this)
    }
    shoot1(){
        // Trong trường hợp này, "this" là undefined
        // Cần khai báo với arrow function sử dụng được từ khóa "this"
        alert(this.state.term)
    }

    shoot2=()=>{
        // "this" sẽ trỏ đến thực thể Football
        alert(this.state.term)
    }

    shoot3(){
        alert(this.state.term)   
    }

    render(){
        return (
            <div style={{display:"flex", alignItems: "center", justifyContent:"center"}}>
                <button onClick={this.shoot3}>Take the shot!</button>
            </div>
        )
    }
}

export default Football;