import { useEffect, useState } from "react"
import { products,cart } from "../Product-Redux/action"
import { useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import "./products.css"
export const Products=()=>{
   
    const dispatch=useDispatch()
    const [data,setData]=useState([])

    const getProducts=async()=>{
        let res= await fetch(`http://localhost:8080/products`)
        let data=await res.json()
        setData(data)
        dispatch(products(data))
    }


    useEffect(()=>{
        getProducts()
       
    },[])
    const postData=async(el)=>{
        fetch("http://localhost:8080/Cart",{
            "method":"POST",
            "headers":{
                "Content-Type":"application/json"
            },
            "body":JSON.stringify(el)
        })
    }
    function AddtoCart(el){
         postData(el)
    }
    return <div className="productParent">

            <div className="historyProductPage">
                <p>SHOP.COM</p>
                <p></p>
                <p></p>
            </div>

            <div className="products">
                {data.map((el)=>(
                    <section className="ProductCard" key={el.id}>
                        <div className="productImage" >
                          <img src={el.image} alt="" />
                        </div>
                      <div className="ProductDetail">
                        <h3 style={{fontSize:"16px" }}>{el.title}</h3>
                        <div className="flex">
                            <img style={{width:"30px",}} src="https://media.istockphoto.com/vectors/shopping-cart-circle-icon-with-long-shadow-flat-design-style-vector-id871717684?k=20&m=871717684&s=612x612&w=0&h=YA_ENcr2e_FmHNRhnlrdgMJ96yWzcOJwv0zdhGCt8s4=" alt="" />
                            <p style={{fontSize:"12px", margin:"10px 0px 10px 0px" }}> {` Sold by ${el.id} ` }</p>
                           
                        </div>
                        <div className= "flex  lineheight cashbackProduct">
                            <p className="crossedprice">${el.price}</p>
                            <p style={{fontWeight:700, fontSize:"15px"}}>${el.price}</p>
                        </div>
                        <div className=" flex cashbackProduct">
                            <p style={{fontSize:"12px" }}>${Math.ceil((el.price/3)/100)}</p>
                            <img src="" alt="" />
                            <p style={{fontSize:"12px" }}>Cashback</p>
                        </div>
                        <p style={{fontSize:"12px",lineHeight:"14.4px",color:"#00A8CA"}}>Free shipping</p>
                            <div className="Productdivfoot lineheight flex">
                                <button className="seeDetailbtn">See Details</button>
                                <button className="addtocartbtn" onClick={()=>AddtoCart(el)}>Add to cart</button>
                            </div>
                      </div>
                        
                    </section>
                ))}
            </div>
            <div className="productPageFooter">

            </div>
    </div>
    

}