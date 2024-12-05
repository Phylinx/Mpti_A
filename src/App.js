import './App.css';
import React from 'react';
import LeftBar from './Components/Leftbar';
import AddPost from './Components/AddPost';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './Components/Profile';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div className='bg-black'>
        <div className='relative h-screen overflow-y-auto'>
          <div className='md:flex justify-center'>
          <LeftBar />
          <main role='main'>
            <div className="md:flex md:w-[990px]">
              <section className="md:w-[600px] border border-y-0 border-gray-800 ml-[65px] h-full">
                  <Routes>
                    <Route path="/" element={<AddPost />} />
                  </Routes>
                  <Routes>
                      <Route path="/profile" element={<Profile />} />
                  </Routes>
              </section>
            </div>
          </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
