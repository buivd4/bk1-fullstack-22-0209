import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    handleChange = (event) => {
        console.log(event)
        this.setState(
            { value: event.target.value }
        )
    }
    render() {
        return (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <form>
                    <div>
                        <label >Search Bar:</label>
                        <input type="text" onChange={this.handleChange} />
                    </div>
                </form>
            </div>)
    }
}

export default Form