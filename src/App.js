import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/navbar/Navbar';
// import Navbar from './Components/Navbar';
import Nav from "./Components/navbar2/Nav"
import Navbar from './Components/navbar1/Navbar';
import { Route, Routes } from 'react-router-dom';


import Image from './Components/Image';
import  Footer  from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Nav/>
      <Footer/>
      {/* <Navbar/> */}

      {/* <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/product"} element={<Product/>}/>
        <Route path={"/image"} element={<Image/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
