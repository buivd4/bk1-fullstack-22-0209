import logo from './logo.svg';
import './App.css';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
function App() {
  return (
    <div>
      <h1>Redux Song List</h1>
      <div style={{display:"flex"}}>
        <SongList />
        <div style={{width:"200px"}}></div>
        <SongDetail />
      </div>
    </div>
  )
}

export default App;
