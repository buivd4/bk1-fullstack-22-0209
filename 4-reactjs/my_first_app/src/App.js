import searchIcon from './search-icon.svg';
import './App.css';
import Comment from './Comment';
import CommentDetailAlt from './CommentDetailAlt';
import CommentDetail from './CommentDetail';
// React Component
function App() {
  var styleVar = {
    height: "30px",
    width: "200px",
    background: `url(${searchIcon}) no-repeat right`,
    paddingLeft: "10px",
    paddingRight: "30px",
    backgroundSize: "25px",
    margin: "auto",
  }
  var listOfComments = [
    <CommentDetail author="Alex" content={{msg:"Hello"}} time="10 phút trước"/>,
    <CommentDetail author="Jane" content={{msg:"Hi there!"}} time="8 phút trước"/>,
    <CommentDetailAlt author="Jerry" content={{msg:"Hi"}} time="6 phút trước"/>
  ]
  const alertMsg = ()=>{
    alert("Hello")
  }
  return (
    <div>
      <h1 >Live Search: React App</h1>
      <input type="text" placeholder="Search..." style={styleVar}></input>
      <Comment title="Lịch sử bình luận" footer="Xem thêm" comments={listOfComments} alertFn={alertMsg}/>
    </div>
  )
}

export default App;
