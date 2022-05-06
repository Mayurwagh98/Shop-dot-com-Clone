import logo from './logo.svg';
import './App.css';

import Nav from "./Components/navbar2/Nav"
import Navbar from './Components/navbar1/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cartinfo  from "./Components/cardInfo/Cartinfo"

import CardAddress from './Components/cardinAddress/CardAddress';






function App() {
  return (
    <div className="App">
      <Navbar/>
      <Nav/>
      
      <CardAddress/>
    {/* <Cartinfo/>   */}
     
     
    
    </div>
  );
}

export default App;
