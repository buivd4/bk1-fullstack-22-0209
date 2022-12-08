import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      images: []
    }
  }
  loadImages=async ()=>{
    let response = axios.get("https://api.unsplash.com/photos",{
      headers:{
        "Authorization": "Client-ID H-74F2obVbbQHfiqzXiB3VGGJ03xxMtcjeKQM43CBNY"
      }
    })
    this.setState({
      images: response.data
    })
  }
  render(){
    return (
      <div>
        <h1>React Axios Example</h1>
        <button type="button" onClick={this.loadImages}>Load Images</button>
        <p>Loaded {this.state.images.length} image(s)</p>
      </div>
    )
  }
}

export default App;
