import './App.css';
import React, { useState } from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Flex from './Components/Flexlist/flex';

function App() {


  return (
    <div className='App'>
      <Navbar  />
      <Hero />
      <Flex />
    </div>
  );
}

export default App;
