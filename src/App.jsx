
import './App.css';
import { Navbar } from './components/SimpleNavbar/SimpleNavbar';
import { Address } from './components/Address/Address';
import {Route,Routes} from "react-router-dom"
import { AddressDetails } from './components/AddressDetails/AddressDetails';
import {Signup} from "./components/Signup/signup"
import { Singin } from "./components/Signin/signin";
//import "./components/Signup/signup.css"



function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Address />}></Route>
        <Route path="/addressdetails" element={<AddressDetails />}></Route>
      </Routes>
      {/* <Signup />
      <Singin/> */}
    </div>
  );
}

export default App;
