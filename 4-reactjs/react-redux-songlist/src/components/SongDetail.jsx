import React from "react";
import {connect} from 'react-redux'
const SongDetail = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Song Detail</h2>
      <h3>Title: {props.selectedSong.title}</h3>
      <h3>Duration: {props.selectedSong.duration}</h3>
    </div>
  );
};
const mapStateToProps=(state)=>{
    return {
        selectedSong: state.selectedSong
    }
}
export default connect(mapStateToProps)(SongDetail);
