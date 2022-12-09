import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './components/StreamList';
import StreamCreate from './components/StreamCreate';
import MainLayout from './layout/MainLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<StreamList />}></Route>
          <Route path="/streams/new" element={<StreamCreate />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
