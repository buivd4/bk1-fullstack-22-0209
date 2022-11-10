import logo from './logo.svg';
import './App.css';
import CommentDetail from './CommentDetail';

function App() {
  return (
    <div>
      <h1>This is LAB-2</h1>
      <hr />
      <div>
        <CommentDetail sender="Sam" time="Today at 6:00PM" content="Hello"/>
        <CommentDetail sender="John" time="Today at 6:30PM" content="Hi"/>
        <CommentDetail sender="Jane" time="Today at 6:00PM" content="Hello"/>
        <CommentDetail sender="David" time="Today at 6:00PM" content="Hello"/>
        <CommentDetail sender="Marry" time="Today at 6:00PM" content="Hello"/>
        <CommentDetail sender="Sam" time="Today at 6:00PM" content="Hello"></CommentDetail>
      </div>
    </div>
  );
}

export default App;
