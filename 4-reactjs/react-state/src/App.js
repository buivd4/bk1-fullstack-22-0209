import './App.css';
import React from 'react';
import Image from './ford.jpg';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      number: 1,
      img: true
    }
  }
  componentDidMount(){
    console.log("Component did mount")
  }
  componentDidUpdate(){
    console.log("Component did update")
  }
  changeColor = ()=>{
    this.setState({color:"blue"})
  }
  changeBrand = ()=>{
    this.setState({brand:"Toyota"})
  }
  increaseNumber = ()=>{
    let n = this.state.number;
    this.setState({number: n+1})
  }
  hideOrShowImage = ()=>{
    let i = this.state.img
    this.setState({img: !i})
  }
  render(){
      return (
        <div>
          <h1>This is my {this.state.brand}</h1>
          <p>This is a {this.state.color} {this.state.model}</p>
          <p>I have {this.state.number} of this kind</p>
          {
            (this.state.img && <img src={Image} alt="ford-mustang" height="100px"/>)
          }
          <br></br>
          <button type='button' onClick={this.changeColor}>Change color</button>
          <button type='button' onClick={this.changeBrand}>Change brand</button>
          <button type='button' onClick={this.increaseNumber}>Increase number</button>
          <button type='button' onClick={this.hideOrShowImage}>{this.state.img?"Hide":"Show"} image</button>
        </div>
      )
  }

}

export default App;
