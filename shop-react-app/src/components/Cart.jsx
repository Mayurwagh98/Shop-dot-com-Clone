import { useSelector } from "react-redux"
import { useEffect,useState } from "react"
import { useDispatch } from "react-redux"
import {cart} from "../Product-Redux/action"
import "./Cart.css"
export const Cart=()=>{
    const GetCart=useSelector((store)=>store.cart)
    const [Cartdata,setCartData]=useState([])
    const dispatch=useDispatch()
    const getCart=async()=>{
        let res= await fetch(`http://localhost:8080/Cart`)
        let data=await res.json()
        setCartData(data)
        dispatch(cart(data))
    }
    useEffect(()=>{
        getCart()
       
    },[])
    return <main>
        <h1 style={{fontWeight:700}}>Your Cart</h1>

        <div className="cart">
            {Cartdata.map((el)=>(
                <div  className="CartCard" key ={el.id}>
                     <h1>Shipment from {el.id}</h1>
                   <hr />
                  <div className="CartCardParent">
                      <div >
                          <img className="CartImage"src={el.image} alt="" />
                      </div>
                      <div className="CartCardDetail">
                          <h3>{el.title}</h3>
                          <h1>${el.price}</h1>
                          <div>
                              <p></p>
                              <p></p>
                              <p>Color:{}</p>
                              <p>Size:{}</p>
                          </div>
                          <div>
                              Quantity: <input style={{width:"30px"}} type="number"/>
                                <button style={{backgroundColor:"transparent", border:"none",textDecoration:"underline"}}>update</button>
                          </div>
                      </div>
                  </div>
                </div>
               
            ))}
        </div>
    </main>
}