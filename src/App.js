import React from 'react'
import ChatBig from './components/ChatBig';
import ChatSmall from './components/ChatSmall';
import Navbar from './components/Navbar'
import './index.css';

function App() {
  return (
    <div className=' overflow-auto'>
    <Navbar/>
    <ChatSmall/>
    <span className='overflow-auto'><ChatBig/></span>
    </div>
  );
}

export default App;
