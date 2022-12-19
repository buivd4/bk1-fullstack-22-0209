import React from "react";
import {connect} from 'react-redux'
import { selectSong } from "../actions";
const SongList = (props) => {
  console.log(props)
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Song List</h2>
      {
        props.songs.map((song,idx)=>(
            <div key={idx} style={{display:"flex"}}>
                <h5>{song.title}</h5>
                <button onClick={()=>{props.selectSong(song)}}>Select</button>
            </div>
        ))
      }
    </div>
  );
};
const mapStateToProps=(state)=>{
    return {
        songs: state.songs
    }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    selectSong: (song) =>{
      dispatch(selectSong(song))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SongList);
