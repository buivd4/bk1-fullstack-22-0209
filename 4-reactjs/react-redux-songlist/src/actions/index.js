// Đầu vào: 1 bài hát (Object)
// ví dụ:
//  {
//      title:  "ABC",
//      duration: 2.77    
//  }
// Trả ra: 1 action

export const selectSong=(song)=>{
    return {
        type: "SONG_SELECTED",
        payload: song
    }
}
