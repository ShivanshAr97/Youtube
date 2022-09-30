import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Video from './components/Video';
import './index.css';
import Main from './Main';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/video' element={<Video />} />
      </Routes>
    </>
  );
}

export default App;