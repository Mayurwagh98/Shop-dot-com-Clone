import { CartSlide } from "./components/CartSlide";
import {Route,Routes} from "react-router-dom"
import { Cart } from "./components/Cart";
import { Products } from "./components/Products";
import { ProductDetail } from "./components/ProductDetail";
import { Navbar } from "./components/navbar";
import { Signup } from "./components/signup";
import {Signin} from "./components/signin"
const App = () => {
 return(
   <div className="App">
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/products/:name" element={<Products/>}></Route>
        <Route path="/product/:name/:id" element={<ProductDetail/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin"  element={<Signin/>}></Route>
     </Routes>
   </div>
 
 ) 
};

export default App;