import { CartSlide } from "./CartSlide"
import { useNavigate } from "react-router-dom"
import { nanoid } from "nanoid"
export const Navbar=()=>{
    const navigate =useNavigate()
    function loadprod(curr){
        navigate(`/products/${curr}`)
    }
    const nav=[ "Men", "Women","Jwellery","Accessories","Footwear"
]
    return <div>
       <CartSlide/>
        {nav.map((el)=>(
            <button key={nanoid()}onClick={()=>loadprod(el)}>{el}</button>
        ))}
    </div>
}