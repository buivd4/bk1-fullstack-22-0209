import React from "react";
import Football from "./Football";
class RefComponent extends React.Component{
    constructor(props){
        super(props)
        this.name = React.createRef()
        // Tham chiếu đến Component Football
        this.football = React.createRef()
        this.state = {
            term: "hi"
        }
    }
    shoot=()=>{
        console.log(this.name.current.value)
        // Gọi method shoot2() của Component Football
        // console.log(this.football.current.shoot2())
    }

    render(){
        return (
            <div style={{display:"flex", alignItems: "center", justifyContent:"center"}}>
                <input type="text" onChange={this.shoot} ref={this.name} />
                <Football ref={this.football}/>
            </div>
        )
    }
}

export default RefComponent