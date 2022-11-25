import React from "react";

class SearchBar extends React.Component{
    onInputChange(event){
        console.log(event.target.value)
    }
    
    render(){
        return (
            <div style={{display:"flex", alignItems: "center", justifyContent:"center"}}>
                <form>
                    <div>
                        <label >Search Bar:</label>
                        <input type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar