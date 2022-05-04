 

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
 
import "./ProductDetails.css"
export const ProductDetail = () => {
    let {id}=useParams()
    
    const [data, setData] = useState({});
    async function getData() {
        let data = await fetch(`http://localhost:8080/products`);
        data = await data.json();
        let curr=data.find(element => element._id ==id);
        setData(curr);
         
    }
  
    useEffect(() => {
        getData();
    }, []);

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
    return <main >
        <section className="main_div">
            <div><img src={data.imageurl} alt={data.Name} /></div>
            <div>
                <div>
                    <h1 style={{fontWeight:700}}>{data.Name}</h1>
                    <p>{data.Brand}</p>
                    <p>Write a review</p>
                </div>
                <div className="price_div">
                    <p>You Save: $28.38 - $49.31 (21.0% - 36.5%)</p>
                    <h2>{data.price}</h2>
                    <div className="interest_sezzle">
                        <div className="interest">or 4 interest-free payments of $26.66 with</div> 
                         
                    </div>
                 </div>
                 <div className="quantity_div">
                                        <label htmlFor="quty">qty</label>
                                        <select name="" id="">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                            <option value="">6</option>
                                            <option value="">7</option>
                                            <option value="">8</option>
                                            <option value="">9</option>
                                            <option value="">10</option>
                                        </select>
                                        <button onClick={()=>AddtoCart(data)}>Add to Cart</button>
                                    </div>
                                    <div className="zip_calculate">
                                        <input type="number" placeholder="zip code" />
                                        <div className="calculate"><h4>Calculate Shipping</h4></div>
                                    </div>
                                    <div className="paragraph"><p>MSK Womens Embellished 3/4 Sleeve Point Collar Short Shift Wear To Work Dress</p></div>
                                   

                            
            </div>
            
        </section>
       

         
         <div className="thougt"><h2>We thought you may like:</h2></div>
                            <div className="extra_products">
                                <div> <img src="#" style={{ width: "300px" }} alt="" /></div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
         </div>
         <div className="product_info">
                                <h1>Product Information</h1>
                                <hr />
                                <p>SKU: P2587561</p>
                                <h5>Palladium Mens Pampa Lite Leather Waterproof Hiking Boots</h5>
                                <ul>
                                    <li><b>Manufacturer: </b>{data.Name}</li>
                                   
                                    <li><b>Suggested Price: </b>{data.price}</li>
              <li><b>Condition: New</b></li>
             </ul>
         </div>
        
    </main>
};