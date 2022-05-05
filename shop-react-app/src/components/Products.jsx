import { useEffect, useState } from "react"
import { products,cart } from "../Product-Redux/action"
import { useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import "./products.css"
import {nanoid} from"nanoid"
import { useParams } from "react-router-dom"
import arrow from "../Images/icons8-chevron-right-24.png"
export const Products=()=>{
    const {name}=useParams()
   const navigate=useNavigate()
    const dispatch=useDispatch()
    const [data,setData]=useState([])
   const [page,setPage]=useState(1)
   const [pagesize,setpagesize]=useState(6)
    const getProducts=async()=>{
        let res= await fetch(`https://shop-clone-api.herokuapp.com/products/${name}?pagesize=${pagesize}&page=${page}`)
        let data=await res.json()
        setData(data.product)
        // console.log(data)
        dispatch(products(data.product))
    }


    useEffect(()=>{
        getProducts()
       
    },[page])

    
    
       
        
        const Authtoken= JSON.parse(localStorage.getItem("Authtoken"))
        const postData=async(el)=>{
             
            await fetch("https://shop-clone-api.herokuapp.com/carts",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${Authtoken}`
                },
                body:JSON.stringify(el)
            })
        }
    // const postData=async(el)=>{
    //     fetch("https://shop-clone-api.herokuapp.com/carts",{
    //         "method":"POST",
    //         "headers":{
    //             "Content-Type":"application/json"
    //         },
    //         "body":JSON.stringify(el)
    //     })
    // }
    function AddtoCart(el){
        let postingProd={
            imageurl:el.imageurl||"",
            Category:el.Category||"",
            Brand: el.Brand||"",
            Name: el.Brand||"",
            price:el.price||"",
            typeofproduct: el.typeofproduct||"",
            Manufacturer: el.Manufacturer||"",
            styleType:el.styleType||"",
            sizeorigin: el.sizeorigin||""

        }
         postData(postingProd)
    }
    function ProductDetailPage(id){
        navigate(`/product/${name}/${id}`)
    }
    return <div className="productParent">

            <div className="historyProductPage">
                <p>SHOP.COM <img src={arrow} alt="" /> {name}</p>
                <p></p>
                <p></p>
            </div>
            <section>
                <div></div>
                <div>
                <div className="products">
                {data.map((el)=>(
                    <section className="ProductCard" key={nanoid()}>
                        <div className="productImage" >
                          <img src={el.imageurl} alt="" />
                        </div>
                      <div className="ProductDetail">
                        <h3 style={{fontSize:"16px" }}>{el.Name}</h3>
                        <div className="flex">
                            <img style={{width:"30px",}} src="https://media.istockphoto.com/vectors/shopping-cart-circle-icon-with-long-shadow-flat-design-style-vector-id871717684?k=20&m=871717684&s=612x612&w=0&h=YA_ENcr2e_FmHNRhnlrdgMJ96yWzcOJwv0zdhGCt8s4=" alt="" />
                            <p style={{fontSize:"12px", margin:"10px 0px 10px 0px" }}> {` Sold by ${el.Brand} ` }</p>
                           
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
                                <button className="seeDetailbtn" onClick={()=>{ProductDetailPage(el._id)}}>See Details</button>
                                <button className="addtocartbtn" onClick={()=>AddtoCart(el)}>Add to cart</button>
                            </div>
                      </div>
                        
                    </section>
                ))}
            </div>
                </div>
            </section>
           
             <section>
                 <button>Next</button>
                 <button>Prev</button>
             </section>
    </div>
    

}