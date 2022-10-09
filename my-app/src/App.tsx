import React from 'react';
import './App.css';
import Home from './components/home';
import SignInSide from './components/signin';
import SignUp from './components/signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {



  
 
  
 

  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<SignInSide />} />
      <Route  path="/singup" element={<SignUp />} />
      <Route  path="/home" element={<Home/>} />
   </Routes>
  </BrowserRouter>
  );
}

export default App;
