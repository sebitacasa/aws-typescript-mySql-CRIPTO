import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { RootState } from './state/reducers';
import { depositMoney } from './state/action-creators';
import  OutlinedCard from "./components/card"
import Home from './components/home';

function App() {



  
 
  
 

  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
