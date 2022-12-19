import { combineReducers } from "redux"
const songsReducer=()=>{
    return [
        {
            title: "ABC",
            duration: 2.54
        },
        {
            title: "XYZ",
            duration: 4.23
        }
    ]
}

const songSelectedReducer = (selectedSong=songsReducer()[0], action)=>{
    console.log("songSelectedReducer đã được thực thi")
    if (action.type==="SONG_SELECTED"){
        console.log("action SONG_SELECTED đã được truyền vào")
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: songSelectedReducer
})